---
title: 'Kubernetes'
sidebar_position: 3
---

## Hosting Actual on a home server with Kubernetes

Actual is available as a container image (see the [Docker](Docker.md) section for more information), which makes it easy to install Actual anywhere you can run containers - including Kubernetes.

## Deploying to Kubernetes

### Assumptions
This guide makes a couple assumptions:
- A running Kubernetes cluster
- Permissions to create `Namespace`, `Deployment`, `PersistentVolumeClaim`, `Service`, and `Secret` resources on the cluster

### Create a `Namespace` (optional)
While creating a `Namespace` for your Actual installation is not necessary, it is recommended to help separate it from other workloads running on your Kubernetes cluster.

There are a couple ways to create a new `Namespace` on cluster:
1. Using `kubectl`'s built in commands for resource creation:
```sh
kubectl create namespace actualbudget
```

2. Creating a YAML file with the `Namespace` resource definition and applying it to the cluster:
```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: actualbudget
  labels:
    app.kubernetes.io/name: actualbudget
```
The above can be applied to a cluster with:
```sh
kubectl apply -f <file>.yaml
```

### Create a `PersistentVolumeClaim`
A `PersistentVolumeClaim` will make sure that your data is persisted somewhere that can be mounted as a volume to the `Pod` that will be running the Actual server. This ensures that if the `Pod` running the Actual server goes down or gets restarted that it can pick up right where it left off rather than starting fresh.

To create a new `PersistentVolumeClaim`:
1. Create a YAML file containing the `PersistentVolumeClaim` definition:
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: actualbudget-pvc
  namespace: actualbudget
spec:
  resources:
    requests:
      storage: 5G
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
  storageClassName: default
```

:::note
The above `PersistentVolumeClaim` assumes a `StorageClass` named `default` exists on the cluster. This may not be the case in your cluster and you should verify which `StorageClasses` are available and suits your case best. You can check which `StorageClasses` are available on your cluster by running:
```sh
kubectl get storageclass
```
:::

2. Apply it to the cluster with:
```sh
kubectl apply -f <file>.yaml
```

### Create a `Secret`
The Actual server requires some HTTPS configuration (you *can* run it without HTTPS but it's not recommended) so a `Secret` needs to be created that contains some HTTPS certificate information. For more information on creating a certificate see [Activating HTTPS](HTTPS.md).

Kubernetes `Secret` data is base64 encoded, so for both the `*.crt` and `*.key` files you will need to run:
```sh
base64 -i <file>
```
to get the base64 encoded text to add to the `Secret` resource

To create a `Secret`:
1. Create a YAML file containing the `Secret` definition:
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: actualsecrets
  namespace: actualbudget
type: Opaque
data:
  cert: <base64 encoded *.crt>
  key: <base64 encoded *.key>
```
2. Apply it to the cluster with:
```sh
kubectl apply -f <file>.yaml
```

### Create a `Deployment`
Now that we have a `Namespace`, `PersistentVolumeClaim`, and `Secret` created we can create a `Deployment` to run the Actual server.

To create the `Deployment`:
1. Create a YAML file containing the `Deployment` definition:
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: actualbudget-deploy
  namespace: actualbudget
  labels:
    app.kubernetes.io/name: actualbudget
spec:
  selector:
    matchLabels:
      app.kubernetes.io/name: actualbudget
  replicas: 1
  template:
    metadata:
      labels:
        app.kubernetes.io/name: actualbudget
    spec:
      restartPolicy: Always
      containers:
      - name: actual-server
        image: actualbudget/actual-server:latest
        env:
        - name: ACTUAL_HTTPS_CERT
          valueFrom:
            secretKeyRef:
              name: actualsecrets
              key: cert
        - name: ACTUAL_HTTPS_KEY
          valueFrom:
            secretKeyRef:
              name: actualsecrets
              key: key
        resources:
          requests:
            cpu: 100m
            memory: 128M
          limits:
            cpu: 500m
            memory: 512M
        ports:
        - containerPort: 5006
        volumeMounts:
        - mountPath: /data
          name: actualbudget-data
      volumes:
      - name: actualbudget-data
        persistentVolumeClaim:
          claimName: actualbudget-pvc
```
2. Apply it to the cluster with:
```sh
kubectl apply -f <file>.yaml
```

Eventually, you should be able to see that there is a `Pod` successfully running. You can verify this by running:
```sh
kubectl -n actualbudget get pods
```
The output should resemble:
```
NAME                                   READY   STATUS    RESTARTS      AGE
actualbudget-deploy-76bbfd96df-ss8sw   1/1     Running   1 (72m ago)   144m
```

### Create a `Service`
In order to expose the Actual server to network traffic you have to add a `Service` that will map the request to the correct port on the `Pod` running the Actual server.

To create the `Service`:
1. Create a YAML file containing the `Service` definition:
```yaml
apiVersion: v1
kind: Service
metadata:
  name: actualbudget-svc
  namespace: actualbudget
spec:
  selector:
    app.kubernetes.io/name: actualbudget
  ports:
  - port: 80
    targetPort: 5006
    protocol: TCP
  type: NodePort
```
2. Apply it to the cluster with:
```sh
kubectl apply -f <file>.yaml
```

:::note
For simplicity this `Service` uses the `NodePort` type which exposes a port on a node and can be accessed via `<node-ip>:<node-port>`. This same `Service` could be used with an `Ingress` and/or have the type set to `LoadBalancer` to get an external IP assigned to the service rather than having to use the node's IP. 
:::

Eventually you should see that the service is up and running and has a `NodePort` assigned to it. You can verify this by running:
```sh
kubectl -n actualbudget get service
```
The output should resemble:
```
NAME               TYPE       CLUSTER-IP    EXTERNAL-IP   PORT(S)        AGE
actualbudget-svc   NodePort   10.103.57.4   <none>        80:30277/TCP   145m
```

To access your Actual server running on your Kubernetes cluster you can browse to `https://<node-ip>:<node-port>` and get started budgeting!

### All-in-one YAML file
The following YAML can be used to create an all-in-one YAML file that can be applied with `kubectl apply -f` and configures everything in one go (you will still need to modify some values):
```yaml
---
apiVersion: v1
kind: Namespace
metadata:
  name: actualbudget
  labels:
    app.kubernetes.io/name: actualbudget
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: actualbudget-pvc
  namespace: actualbudget
spec:
  resources:
    requests:
      storage: 5G
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
  storageClassName: default
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: actualbudget-deploy
  namespace: actualbudget
  labels:
    app.kubernetes.io/name: actualbudget
spec:
  selector:
    matchLabels:
      app.kubernetes.io/name: actualbudget
  replicas: 1
  template:
    metadata:
      labels:
        app.kubernetes.io/name: actualbudget
    spec:
      restartPolicy: Always
      containers:
      - name: actual-server
        image: actualbudget/actual-server:latest
        env:
        - name: ACTUAL_HTTPS_CERT
          valueFrom:
            secretKeyRef:
              name: actualsecrets
              key: cert
        - name: ACTUAL_HTTPS_KEY
          valueFrom:
            secretKeyRef:
              name: actualsecrets
              key: key
        resources:
          requests:
            cpu: 100m
            memory: 128M
          limits:
            cpu: 500m
            memory: 512M
        ports:
        - containerPort: 5006
        volumeMounts:
        - mountPath: /data
          name: actualbudget-data
      volumes:
      - name: actualbudget-data
        persistentVolumeClaim:
          claimName: actualbudget-pvc
---
apiVersion: v1
kind: Service
metadata:
  name: actualbudget-svc
  namespace: actualbudget
spec:
  selector:
    app.kubernetes.io/name: actualbudget
  ports:
  - port: 80
    targetPort: 5006
    protocol: TCP
  type: NodePort
---
apiVersion: v1
kind: Secret
metadata:
  name: actualsecrets
  namespace: actualbudget
type: Opaque
data:
  cert: <base64 encoded cert>
  key: <base64 encoded key>
```
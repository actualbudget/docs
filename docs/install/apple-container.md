---
title: 'Apple Container'
---

Apple Container is a tool for creating and running Linux containers using lightweight virtual machines on macOS. It's written in Swift and optimized for Apple silicon, providing a native containerization solution for Mac users.

## Prerequisites

- Apple Container must be installed on your Mac. You can install it from [Apple's container repository](https://github.com/apple/container).
- macOS with Apple silicon (M1/M2/M3) for optimal performance
- Basic familiarity with command line operations

## Setup and Installation

### Start the Container Service

First, start the Apple Container service:

```bash
container system start
```

If this is your first time running Apple Container, it may prompt you to install a Linux kernel. Follow the installation prompts to complete the setup.

### Configure DNS (Optional but Recommended)

Setting up DNS makes it easier to access your containers with friendly names:

```bash
# Create a DNS name (e.g., "local")
sudo container system dns create local

# Set it as the default DNS
container system dns default set local
```

## Running Actual with Apple Container

### Prepare Data Directory

Create a directory to store your Actual budget data:

```bash
mkdir -p ~/Documents/actual
```

### Launch Actual Container

Run the Actual server container using the official Docker image:

```bash
container run --name actual \
  --mount source=${HOME}/Documents/actual,target=/data \
  --detach \
  --rm \
  docker.io/actualbudget/actual-server:latest
```

**Command breakdown:**
- `--name actual` - Names the container "actual"
- `--mount` - Mounts your local directory to persist data
- `--detach` - Runs the container in the background
- `--rm` - Automatically removes the container when stopped

### Access Actual

Once the container is running, open your web browser and navigate to:

- `http://actual.local:5006` *(if using DNS setup)*
- `http://ip-addr:5006` *(if not using DNS, ip addr can be found by entering `container list --all`)*

**Note:** The first time accessing Actual you will see a "Fatal Error" regarding the `SharedArrayBuffer`. Select *Advanced Options* > Check the checkbox > Select *Open Actual*.

## Managing Your Container

### Check Container Status

View running containers:

```bash
container list --all
```

Refer to the `STATE` to view the status of actual.

### Stop the Container

To stop the Actual container:

```bash
container stop actual
```

## System Management

### Stop the Container Service

When you're done using containers, you can stop the service:

```bash
container system stop
```

## Troubleshooting

If you encounter issues:

1. **Container won't start**: Ensure the Apple Container service is running with `container system start`
2. **Port conflicts**: Make sure port 5006 isn't being used by another application
3. **Data persistence**: Verify the mount path exists and has proper permissions
4. **Network access**: Check if your firewall is blocking the connection

For more detailed troubleshooting, consult the [Apple Container documentation](https://github.com/apple/container/).
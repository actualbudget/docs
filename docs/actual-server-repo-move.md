# Actual Server repository move

In February 2025 we will begin the process of merging the actual-server repository into the Actual workspace.

The reasons for this change are as follows:

- Streamlined Development: Developers will only need to clone/sync one repo instead of two.
- Improved Debugging: It makes end-to-end debugging for server/client easier as they will be in the same workspace.
- Simplified Desktop App Packaging: Enables the desktop app to embed the sync server.
- Ensuring code consistency and reducing the maintenance burden.


### Questions:

- **Q.** _I use Docker Hub/Github's container registry, how do I stay up to date?_

  **A.** We will continue to push images to [Docker Hub](https://hub.docker.com/r/actualbudget/actual-server) and [Github's container registry](https://ghcr.io/actualbudget/actual-server) as usual.


- **Q.** _I build the docker image locally, can I still do that?_

  **A.** All of the docker files are still available. To build the sync server locally you can use the ``` sync-server.Dockerfile``` located in the root of the repository.  The ``` docker-compose.yml ``` is located in the ```/packages/sync-server``` directory.


- **Q.** _I use the [Local Installation](https://actualbudget.org/docs/install/local). How do I keep up to date?_

  **A.** Follow these instructions:
  1. Clone the [Actual repository](https://github.comactualbudget/actual). You can use the following command:
  ```
  git clone https://github.com/actualbudget/actual.git
  ```
  2. Navigate to the Actual project root directory:
  ```
  cd actual
  ```
  3. Install the required dependencies for the server:
  ```
  yarn install:server
  ```
  4. Run the server with:
  ```
  yarn start:server
  ```

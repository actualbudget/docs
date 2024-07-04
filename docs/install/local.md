# Local Installation

The easiest way to get the Actual running on locally is to use the [actual-server](https://github.com/actualbudget/actual-server). 

Actual Server is the server element of the Actual which is used for syncing changes across devices and which comes with the latest version of [Actual Web.](https://github.com/actualbudget/actual)

## Prerequisites

- The Actual Server requires Node.js v18 and greater. You can download and install latest version of the Node.js from [Node.js website](https://nodejs.org/en/download) (we recommend downloading the “LTS” version). 
- Consider using a tool like [nvm](https://github.com/nvm-sh/nvm) or [asdf](https://asdf-vm.com) to install and manage multiple versions of Node.js.
- You’ll also need to have Git installed. The Git website has [instructions for downloading and working with Git for all supported operating systems](https://git-scm.com/download).
- Actual uses yarn packages. You can install [yarn](https://yarnpkg.com/getting-started/install) using the following command:

  ```bash
  npm install --global yarn
  ```

## Installing Actual

1. After the prerequisites are fulfilled, clone the [Actual Server](https://github.com/actualbudget/actual-server) project in your project root directory where you want to install Actual.
  ```bash
  git clone https://github.com/actualbudget/actual-server.git
  ```

2. Navigate to the Actual Server in your project root director.
    ```bash
    cd actual-server
    ```
3. Install all the required dependencies using yarn.
    ```bash
    yarn install
    ```

## Running Actual

After the Actual server is installed, start the Actual server by running the following command:
```bash
yarn start
```

## Accessing Actual

After the Actual server is started, you can access the Actual server from local server logged in the CLI as  [http://localhost:5006](http://localhost:5006). 

When accessing Actual for the first time, you may be prompted to provide a URL for the server. For a local installation, click the **Use localhost:5006** button to use the local server to access Actual.

## Updating Actual

Actual is constantly evolving to include new features and improve user's experience. It is recommended to update your local installation with our latest releases.

To update with our latest releases, use `git pull` command from the `master` branch of your local directory of Actual. After updating the changes, execute the `yarn install` to download the latest updates from the releases.
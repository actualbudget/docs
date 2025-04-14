---
title: 'CLI tool'
---

## Hosting Actual with the CLI tool

The Actual sync-server is available as an NPM package. The package is designed for easy deployment and is published to the official NPM registry under [@actual-app/sync-server](https://www.npmjs.com/package/@actual-app/sync-server).

### Installing the CLI tool

Node.js v18 or higher is required for the `@actual-app/sync-server` npm package

**Install globally with npm:**

```bash
npm install --location=global @actual-app/sync-server
```

Once installed, you can execute commands directly from your terminal using `actual-server`.

### Usage

Run the CLI tool with the following syntax:

```bash
actual-server [options]
```

**Available options**

| Command             | Description                  |
| ------------------- | ---------------------------- |
| `-h` or `--help`    | Print this list and exit.    |
| `-v` or `--version` | Print this version and exit. |
| `--config`          | Path to the config file.     |

### Examples

Run with default configuration:

```bash
actual-server
```

Run with [custom configuration](../config/index.md):

```bash
actual-server --config ./config.json
```

### Updating the CLI tool

The sync server can be updated with a simple command.

```bash
npm update -g @actual-app/sync-server
```

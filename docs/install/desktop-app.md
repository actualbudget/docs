---
title: 'Desktop app'
---

The simplest way to get started with Actual is by [downloading the desktop app](/src/pages/download.md). This app bundles Actual's full budgeting capabilities into a streamlined application that’s perfect for users looking for a smooth, hassle-free experience.

## Who should use the desktop app?

If you prefer not to worry about setting up or configuring a server, the Desktop app is designed for you. By combining both the client and server into one package, it eliminates the technical overhead and lets you dive straight into budgeting with Actual.

**Benefits include:**

- **All-In-One Package:** No additional configuration needed — everything you need is built right in.
- **User-Friendly:** Ideal for non-technical users who want to focus on managing their budget rather than managing servers.
- **Local Control:** Run the server on your own machine, giving you immediate access to features like Bank Sync and more.

## Who shouldn't use the desktop app?

If you’re already running your own server, the Web client remains your best option. Running the desktop app alongside an existing server can lead to version mismatches — the server might expect a different release than that provided by the desktop app, potentially causing unexpected issues.

## Setting Up the Desktop App with a Local Server

Setting up the desktop app is straightforward. Follow these steps:

In the server selection area, click **Change** as shown below:

![](/img/install/change-server.png)
<br />

The server runs on `localhost` by default. You can modify the port if necessary. Click **Start** to run the server.


![](/img/install/configure-server.png)
<br />

Upon starting the server, you’ll be prompted to create a password (if you haven’t already). Sign in to complete the configuration.

Once these steps are completed, your local server will be running, unlocking full server functionalities including Bank Sync and more.

## Connecting Your Local Server to a Mobile Device

You can access your local server from your mobile device. However, this requires a bit more setup since you’ll need a way to expose your local server to the internet. To achieve this you must set up a [Reverse Proxy](../config/reverse-proxies.md).

For a practical walkthrough, check out the [Ngrok guide](../config/reverse-proxies.md#ngrok). If you plan to use your mobile device regularly while the desktop app is running, consider configuring the reverse proxy to launch automatically with your computer.

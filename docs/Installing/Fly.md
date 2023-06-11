---
title: 'Fly.io'
---

In order to deploy Actual to Fly.io, you’ll need to use their command line interface from a terminal program. If you’ve never used a terminal before, don’t worry! We’ll walk you through every step of the process.

## Setup

### Creating a Fly.io Account

That said, first you’ll need to sign up for an account. Go to [fly.io](https://fly.io) and click “Get Started,” then fill in the form. Note that Fly may require you to enter credit card details. See [their docs on how they use credit cards](https://fly.io/docs/about/credit-cards/) for more information. If you follow the steps in this guide, you will remain well within the free plan limits. For more details, check out [Fly’s pricing documentation](https://fly.io/docs/about/pricing/).

### Accessing the `fly` command line tool

There are two ways to access the `fly` command line tool. You can either install it on your local machine, or you can use the web-based terminal that Fly provides. We recommend using the web-based terminal, as it’s the easiest way to get started. However, if you run into issues with the web-based terminal, you can always install the `fly` command line tool on your local machine.

#### Web-based terminal

Go to https://fly.io/terminal/ and click “Launch Web CLI” at the bottom of the page. You may be asked to log into Fly.

Create a new folder named `actual` by typing in this command once the `/app/bin $` prompt appears. Once you’ve typed in the command, press the `Enter` key on your keyboard.

```
mkdir actual; cd actual
```

Your terminal should look like this if you’ve done everything correctly:

```
/app/bin $ mkdir actual; cd actual
/app/bin/actual $
```

#### Local installation

If you prefer to install the `fly` command line tool on your local machine, you’ll need to start by open a command line terminal on your computer.

- **Windows**: Open the Start menu and search for “Command Prompt.” Click on the “Command Prompt” app to open it.
- **macOS**: Open the “Terminal” app from the Utilities folder in your Applications folder.
- **Linux**: Open your terminal app of choice.

Next, follow [the instructions to install the `fly` command line tool](https://fly.io/docs/hands-on/install-flyctl/). When entering the commands, make sure _not_ to include the `$` character at the beginning of each line.

Type `flyctl auth login` and press enter to open your browser and log your terminal into Fly.io.

## Configuring the app

Now that you’ve gotten the CLI set up, you’re ready to deploy your app to Fly.io. First, you’ll need our template Fly configuration:

If you’re using the web-based terminal:

1. Type in (or copy-paste) the command `cat > fly.toml` and press enter. Your cursor should move to a new blank line.
2. Copy the contents of the `fly.toml` template file below and paste it into the terminal.
3. Hit return on your keyboard so your cursor is at the beginning of a new line.
4. Press control+d on your keyboard to save the file. (Use the “control” key even on macOS! Terminals are weird)

<details><summary>Click to expand <code>fly.toml</code> template</summary>

```toml title=fly.toml
[env]
  PORT = "5006"
  TINI_SUBREAPER = "1"

[experimental]
  auto_rollback = true
  cmd = ["node", "--max-old-space-size=180", "app.js"]

[mounts]
  source="actual_data"
  destination="/data"

[[services]]
  http_checks = []
  internal_port = 5006
  processes = ["app"]
  protocol = "tcp"
  script_checks = []

  [services.concurrency]
    hard_limit = 25
    soft_limit = 20
    type = "connections"

  [[services.ports]]
    force_https = true
    handlers = ["http"]
    port = 80

  [[services.ports]]
    handlers = ["tls", "http"]
    port = 443

  [[services.tcp_checks]]
    grace_period = "10s"
    interval = "15s"
    restart_limit = 0
    timeout = "2s"
```

</details>

If you’re using a local terminal:

1. Create a new folder somewhere on your computer. You can call it whatever you want.
2. <a rel="download" target="_top" href="/fly.toml">Download the template <code>fly.toml</code> file by clicking here</a> and move it into the folder you just created.
3. Switch back to your terminal and navigate to the folder you just created.
   - On macOS, drag the folder from Finder to Terminal and hold the command key when dropping it into the terminal window.
   - On Windows, [FIXME!]
   - On Linux, use the `cd` command.

## Deploying the app

Now that you’ve got the configuration file set up, you’re ready to deploy your app to Fly.io. To do so, run the following commands. Wait for each command to finish before running the next one.

First, tell Fly about Actual:

```bash
fly launch --image jlongster/actual-server:latest
```

This command will ask a series of questions:

- “_An existing fly.toml file was found. Would you like to copy its configuration to the new app?_” Type `y` and press enter to use the config file we’ve provided.
- “_Choose an app name (leave blank to generate one)_” Your app will be available online at <code>https://<em>the-name-you-choose</em>.fly.dev</code>. You can choose any name you want, but it must be unique. If you’re not sure what to choose, you can leave it blank and Fly will generate a random name for you. Either type the name and press enter, or just press enter.
- _Choose a region for deployment_ This is the physical location where the server will be set up. You can choose any region you want, but we recommend choosing the one closest to you. Use the up and down arrow keys to pick a region, then press enter to choose the highlighted option.
- _Would you like to set up a Postgresql database now?_ Type `n` and press enter to skip this step.
- _Would you like to set up an Upstash Redis database now?_ Type `n` and press enter to skip this step.
- _Would you like to deploy now?_ We’re not quite done yet! Type `n` and press enter. We’ll deploy the app once we’re done.

Next, we’ll need to set up a “volume,” a place Fly can store your data so it doesn’t get lost when you restart or upgrade the server. To do so, run the following command:

```bash
fly volumes create actual_data
```

You’ll once again be asked to pick a region. Select the same one you chose for the main server.

It may take a few seconds to create the volume. Once that’s done, you’re ready to deploy!

```bash
fly deploy
```

The deploy can take a couple of minutes. Once it finsihes, you’ll see a message like this:

```bash
==> Monitoring deployment
Logs: https://fly.io/apps/some-app-1234/monitoring

 1 desired, 1 placed, 1 healthy, 0 unhealthy
--> v0 deployed successfully
```

You’re all set! You can now visit your very own instance of Actual at <code>https://<em>the-name-you-chose</em>.fly.dev</code>. If you’ve forgotten the name, it will be near the top of `fly.toml`, on the line that starts with `app =`.

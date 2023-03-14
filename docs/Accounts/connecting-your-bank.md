---
Title: 'Conn Bank'
---

# Connecting Your Bank

## Prerequisites

- An instance of actual server
- A bank account compatible with Nordigen. See [here](https://nordigen.com/en/coverage) for details regarding coverage.

## Setting up Nordigen

You can connect your bank account to Actual with [Nordigen](https://nordigen.com/). This is a free tool that allows you to connect with your bank to provide a secure and unified way to access transaction and balance data.

To start, you'll need to create an account with Nordigen [here](https://ob.nordigen.com/signup).

Once your account is created, head to the [dashboard](https://ob.nordigen.com/overview/) and click on "User secrets" in the sidebar.
![sidebar image of nordigen dashboard with user secrets highlighted](https://imgur.com/a/v4Tk20W)

Create a new set of authorisation tokens in this window by scrolling to the bottom and clicking "Create new". A window will pop up for you.
![screenshot of create new window](https://imgur.com/a/s5sWH7d)

You'll be shown a window with your tokens. These tokens are displayed **only once**. Make sure you don't close the window until you have copied them.

## Configuring Actual

Actual needs to be informed of your Nordigen secret values in order to pull the data. This can be done any number of ways.

### Config File

You can configure actual to use the Nordigen secrets by adding them to a `config.json` file in the `actual-server` directory like so:

```json
{
  "nordigen": {
    "secretId": "xxxx",
    "secretKey": "xxxxx"
  }
}
```

### Environment Variables

If you are using Docker, then configuration can bne done with environment variables.

```env
ACTUAL_NORDIGEN_SECRET_ID=
ACTUAL_NORDIGEN_SECRET_KEY=
```

:::info
If using fly.io, set the variables like so: `flyctl secrets set ACTUAL_NORDIGEN_SECRET_KEY=....`
:::

Restart actual-server for the changes to be recognised.

### Frontend

Once you have restarted actual-server, refresh your browser and log in. Open `Settings` -> `Show advanced settings` -> `Show experimental features` -> `Enable account syncing`.

Next you'll need to link your bank account to your actual account.

Start the process by selecting the desired account and pressing "link account" in the options menu.
![](https://imgur.com/a/rjdYgoj)

Select your country followed by your bank, then "Link account in browser".
![](https://imgur.com/a/3uHIEyz)

You'll be taken to Nordigen to link your account. Follow those steps all the way through.

Your account should now be linked!

:::caution
You will have to renew the authorization every 90 days, this is a limitation of Nordigen, not of Actual.
:::

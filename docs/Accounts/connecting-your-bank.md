---
Title: 'Conn Bank'
---

# Connecting Your Bank

:::warning
This is an **experimental feature**. That means we’re still working on finishing it. There may be bugs, missing functionality or incomplete documentation, and we may decide to remove the feature in a future release. If you have any feedback, please [open an issue](https://github.com/actualbudget/actual/issues) or post a message in the Discord.
:::

:::note
Client Version 23.3.0 and 
Server Version 23.3.1 or higher are required for this feature.
:::

We are excited to offer this optional bank integration in Actual. Here are a couple of considerations to know about before making the decision to use bank sync in your installation of Actual Budget.

- This integration relies on you providing your own API credentials that you will need to get by signing up with the service provider and Generate Keys and Secrets that will be used in Actual.

- The integration only works if you are using actual-server

- The Secrets and Keys are stored in your Actual installed version so it is highly recommended to turn on End to End encryption and create a strong passphrase to encrypt your files.

- Bank Sync is part of the Experimental Features in settings and needs to be turned on in order to use this integration

### Supported Providers
Nordigen

### Nordigen Setup

**Get SECRETS and KEYS for Actual**
1. Create an account with Nordigen - https://nordigen.com/
2. Make sure you are logged into your account dashboard page - https://ob.nordigen.com
3. Create your user secrets by selecting user secreate from the left side menu - https://ob.nordigen.com/user-secrets/
4. Click on the '+ create new' button at the bottom left or click the 'Create new Secrets' button the top right
    - Make sure you download your secrets file since the **key** will not be available to you again in the account dashboard
    - These secrets will be used in Actual to make the bank sync connection


**Add Nordigen sync to Actual**
1. Add the link to your accounts in actual (Existing or New)
    - For an exsisting account, click on that account and select the ... (kebab menu) in the top right and choose Link Account
    - To create a new account with bank syncing click on the '+ Add account' link in the left menu at the bottom and select the Link bank account button
2. Select the Link Your Bank button
3. Select your country from the list
4. Select your bank from the list

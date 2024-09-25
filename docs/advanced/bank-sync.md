# Connecting Your Bank

:::note
Client Version 23.7.0 and
Server Version 23.7.0 or higher are required for this feature.
:::

We are excited to offer this optional bank integration in Actual. 
Here are a couple of considerations to know about before making the decision to use bank sync in your installation of Actual Budget.

- This integration relies on you providing your own API credentials that you will need to get by signing up with the service provider and Generate Keys and Secrets that will be used in Actual.

- The integration only works if you are using actual-server

- The Secrets and Keys are stored in your Actual installed version so it is highly recommended to turn on End to End encryption and create a strong passphrase to encrypt your files.

- You will need to add a config file to your installation

## Supported Providers

* GoCardless
* SimpleFIN Bridge

:::note
[Experimental support for SimpleFIN](../experimental/simplefin-sync.md) (North American banks) is also available.
:::

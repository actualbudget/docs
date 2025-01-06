# Connecting Your Bank

We are excited to offer optional bank integration in Actual.

## Considerations
Here are a couple of considerations to know about before making the decision to use bank sync in your installation of Actual Budget.

- This integration relies on you providing your own API credentials that you will need to get by signing up with the service provider and Generate Keys and Secrets that will be used in Actual.

- The integration only works if you are using actual-server.

- The Secrets and Keys are stored in your Actual installed version so it is highly recommended to turn on End to End encryption and create a strong passphrase to encrypt your files.

- You will need to add a config file to your installation.


## Supported Providers

* [GoCardless (European Banks)](/docs/transactions/bank-sync/gocardless)
* [SimpleFIN Bridge (North American Banks)](/docs/transactions/bank-sync/simplefin)


## Does Actual Sync Automatically With Your Bank?

At this moment, it is not yet possible for Actual to automatically sync with your bank. You need to do this manually by going to "All Accounts" and pressing "Sync".

![Image showing where in the GUI you can sync your bank accounts](/static/img/connecting-your-bank/syncing-with-your-bank.png)


## A Small Tips on Starting From Scratch With Bank Sync in Actual

If you are setting up Actual for the first time, it is much easier not to try to pull in historical data. This has caused some users a lot of headaches with subsequent reconciliation.

The following process may be more helpful:

1. Set up your account in Actual specifying a correct opening account balance at a recent date.
2. Link the account one of the supported providers (GoCardLess or SimpleFIN).
3. Sync the account with the chosen provider. You should find that only transactions subsequent to the opening account balance entry are imported, making reconciliation easy.

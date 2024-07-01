---
title: Actual vs YNAB
description: Feature Comparison between Actual and You Need a Budget
slug: 2024-07-01-actual-vs-ynab
tags: [budgeting, versus]
authors: youngcw
hide_table_of_contents: false
---

Hello budgeters!

This is the start of the series **Actual Versus**!
Today we will be viewing how Actual Budget stacks up against the long standing YNAB (You Need a Budget).

YNAB is a longstanding heavywight in the envelope budgeting space.  It was one of the originals.
Actual takes a lot of inspiration from the original old YNAB4 and builds upon it.

<!--truncate-->

# Introduction
I will structure this comparison as follows.
First I will go over some of the fundamentals individually, then at the end have a quick comparison of some of the smaller features.
I will go in depth in the basics like how Actual is installed and run, how the budgeting basics compare, and then the other exciting features.

# Using Actual

This may be the place were Actual and YNAB are the most different.
YNAB is a service. This means that the user has minimal control over the application and data.
This also means that YNAB owns your budget data.  They say that they keep it safe, but that could change any time they want to.
Because of this service model YNAB also has a continuing fee.

Actual is Free and Open-Source.
This means that there is no cost for the core software. Things like bank syncing will have a fee from the provider.
If you don't want to use bank syncing, or it is not available in your region, there is no cost!
Because Actual is not a service we never see your budget data.  
It is controlled by you.  It lives entirely on your devices and your server if you host one.

### How to run the software

Actual has a few options for running the sofware.
The easiest to start is to install the desktop application or try the web demo.
Long term you should consider also hosting your own sync server.  Cosiderations for the sync server are added below.

#### Desktop Application
The desktop application can be found at our [github release page](https://github.com/actualbudget/actual/releases/latest).
Download the file that matches your operating system.  
The `.exe` for Windows, the `.dmg` for Mac, or one of the Linux options.

#### Web version
You can try out Actual using the [web demo](app.actualbudget.org).
This link can be used long term if you are exclusivly on mobile.
The data will be stored on your device and we wont have any access to it.
If you plan to do this make sure to export you data sometimes as a backup.


### Sync Server

Actual has two parts: the client (the stuff you see and interact with), and an optional sync server.
The server is what allows syncing your budget file between devices, and allows for bank syncing.
A full list of what does and does not require the sync server can be found [in this table](../docs/install)



# Core Feature Comparison

## Budgeting
The core budgeting style is where Actual and YNAB are the most similar.
Both use envelope style budgeting, sometimes refered to zero-sum budgeting.
This means that all your funds are assigned categories, or jobs in YNAB vernacular.
This is much more expicit of budgeting than the traditional style where you simply track income and expenses in a given time window.
This budgeting is based on the same paradigm of transactions with payees and categories in an account ledger.



---
title: 'Render'
---

In order to deploy Actual to Render.com, you’ll need to launch an app via their user-friendly deployment process. The entire process takes about 5 minutes!
It requires no technical know-how. If you can sign up for a newsletter, you can deploy Actual via Render!

The Free account has usage limits. These should not be a problem for normal use with Actual Budget.

## Setup

### Creating a Render.com Account

Render.com has an "Individual" plan for hobbyists (that's you!) with no monthly fee.

To begin, you’ll need to sign up for an account. Go to [render.com](https://render.com/) and click **Get Started**. Sign up with your email and
password of choice. You'll see a prompt to verify your eamil before you can continue.

### Verification email

By clicking the link in the email, you will be forwarded to a registration form. Fill in the form with your information.
You'll then be sent to your **Dashboard**

### Creating Actual Budget Web Service

From the "+ New" menu (upper right), choose **Web Service**.

- For the **Source Code** choose the **Existing Image** option and enter the Actual Budget Docker image **actualbudget/actual-server**.
- Click **Connect**.
- Optional - change **Name**, the default name is fine and will have no bearing on your service.
- Optional - change **Region** if you want.
- For **Instance Type** choose **Free**.
- Click **Deploy Web Service**.
- Wait for your service to deploy (usually takes a few minutes).

![](/img/render/web-service-form.png)

### Dashboard page

From the **Dashboard** you can easily see the status of your service. You can also click on the title to see an overview and adjust options and settings.

![](/img/render/web-service-deploying.png)

### Your Web Service is now ready to be used

Once deployed, you can access your new service from the link provided.

From your Dashboard, click on the name of your Web Service and you'll be taken to the Overview page. 

The address for your Actual Budget is found in the Domain field. In the screenshot example, this is
`https://actual-server-bova.onrender.com`. Yours will be something completely different.

![](/img/render/web-service-overview.png)

## Setting a password for your Actual Budget

Before you can start using Actual, you need to set a password for your server. This password is used 
next time you log into your server - and should never be the same as your PikaPods account password.

Keep this password safe, as it cannot be retrieved. If you forget your server password, you will not 
be able to retrieve your budget.


![](/img/a-tour-of-actual/server-connecting-first-time.png)


## Getting started with using Actual Budget

Go to our [Starting Fresh](/docs/getting-started/starting-fresh) guide to get started with 
Actual Budget.


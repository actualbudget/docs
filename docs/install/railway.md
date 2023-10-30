---
title: 'Railway'
---

Deploying Actual on Railway is a cheap, no-code solution that can be done completely through their dashboard.

## Setup

### Creating an account

If you don't already have a Railway account, visit [railway.app](https://railway.app/) and click `Log in`. Either sign in with GitHub or enter the email address you'd like to create an account for and follow the prompts.


### Installation

From your [Railway dashboard](https://railway.app/dashboard), click `New project` and select 'Empty project'.

Click `Add a service`, then select `Docker image`. Enter Actual server's docker image, `actualbudget/actual-server:latest`. Your server will immediately start deploying.

Click `New`, then follow the prompts. There should only be one available service to attach the volume to, and enter `/data` as the mount point.

Click on your service. By default it will have a random name like `future-rock`. In the `variables` tab, create a new variable called `PORT`. Give it a value of `443` for HTTPS (Railway will handle the cert for you).

Then in the `settings` tab, Click `generate domain` if you'd like Railway to create a subdomain for you, otherwise click `Custom Domain` and follow the prompts to add a CNAME record to your domain.

That's it! Your Actual server will be running on whatever domain you chose, ready for first-time setup.

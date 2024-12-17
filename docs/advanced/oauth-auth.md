# Authenticating With OpenID Provider

:::note
Client Version 24.10.0 and
Server Version 24.10.0 or higher are required for this feature.
:::

## Setup
:::info
This feature requires use of [Actual Server](../config/)
:::

To enable this feature, you can do it using configuration file at actual server, environment variables or you can use the UI

### Config using configuration file

If your OpenId provider supports discovery, use the following configuration example:

```json title="config.json"
"openId": {
        "issuer": "URL for the OpenId Provider",
        "client_id": "client_id given by the provider",
        "client_secret": "client_secret given by the provider",
        "server_hostname": "your Actual Server URL (so the provider redirects you to this)"
    }
```

If your OpenId provider does not provide discovery (like GitHub), you have to configure it manually:

```json title="config.json"
"openId": {
        "issuer": {
            "name": "Friendly name for the issuer",
            "authorization_endpoint": "Provider's authorize endpoint",
            "token_endpoint": "Provider's access token endpoint",
            "userinfo_endpoint": "Provider's user info endpoint"
        },
        "client_id": "client_id given by the provider",
        "client_secret": "client_secret given by the provider",
        "server_hostname": "your Actual Server URL (so the provider redirects you to this)"
    }
```

:::tip
This or the environment variables are the only ways to use GitHub as user provider.
:::

### Config using environment variables

If your OpenId provider supports discovery, use the following variables:

- `ACTUAL_OPENID_DISCOVERY_URL`: URL for the OpenId Provider
- `ACTUAL_OPENID_CLIENT_ID`: client_id given by the provider
- `ACTUAL_OPENID_CLIENT_SECRET`: client_secret given by the provider
- `ACTUAL_OPENID_SERVER_HOSTNAME`: Your Actual Server URL (so the provider redirects you to this)

If your OpenId provider does not provide discovery (like GitHub), use the following variables:

- `ACTUAL_OPENID_AUTHORIZATION_ENDPOINT`: Provider's authorize endpoint
- `ACTUAL_OPENID_TOKEN_ENDPOINT`: Provider's access token endpoint
- `ACTUAL_OPENID_USERINFO_ENDPOINT`: Provider's user info endpoint
- `ACTUAL_OPENID_CLIENT_ID`: client_id given by the provider
- `ACTUAL_OPENID_CLIENT_SECRET`: client_secret given by the provider
- `ACTUAL_OPENID_SERVER_HOSTNAME`: Your Actual Server URL (so the provider redirects you to this)

### Configuring OpenID using UI

#### Using previous versions Actual (with Actual Server enabled)

If you are using Actual Server for the past versions, you will need to enable OpenId Auth from the options:

![](/static/img/oauth/start-using-options.png)

Once you click `Start using OpenID` a modal will be presented.

#### Setup Actual Server for the first time

During your initial setup of Actual, you can configure OpenID by clicking the button `Configure OpenID authentication instead (Advanced)`:

![](/static/img/oauth/welcome-button.png)

##### Configuration from options
![Configuration from options](/static/img/oauth/modal.png)

##### Configuration from bootstrap
![Configuration from bootstrap](/static/img/oauth/bootstrap.png)

##### Instructions
Fill all the required field for the selected provider.

Some providers only require some fields to be filled out.```
As an example, the field _passwordless.id_ does not have a `client_secret`.

When all settings are correctly filled out, click the 'OK' button, and you will be redirected to the `login` page.

:::warning
There are some basic configuration checks when clicking `OK`, but if you somehow type the wrong information and the data is saved, you must manually open the actual server database and update it. The table `auth` is the name of the table.
:::

#### Tested Providers
- Auth0
- Authentik
- GitHub
- Google Accounts
- Keycloak
- Microsoft Entra
- Passwordless.id

:::tip
Each provider has different requirements. One example is Auth0, where you have to change the following:

![](/static/img/oauth/provider-requirement.png)
:::

#### After setup:

When setup is done, you will be redirected to the _login_ page:

![](/static/img/oauth/first-login.png)

### Next Step
Once you have configured your OpenID, you can continue to enable [Multiuser](multi-user) login. 


:::tip
Configuring the OpenID provider from options or during the initial setup for Actual can only be done if your provider supports discovery; otherwise, use [file configuration](oauth-auth#config-using-configuration-file)
:::
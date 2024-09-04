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

### Using previous versions Actual (with Actual Server enabled)

If you are using Actual Server for the past versions, you will need to enable OpenId Auth from the options:

![](/static/img/oauth/start-using-options.png)

Once you click `Start using OpenID` a modal will be presented.

### Setup Actual Server for the first time

If you are starting to use Actual Server, during bootstrap, you can configure OpenID by click the button `Configure OpenID authentication instead (Advanced)`:

![](/static/img/oauth/welcome-button.png)

### Configuring OpenID using UI

#### Configuration from options
![Configuration from options](/static/img/oauth/modal.png)

#### Configuration from bootstrap
![Configuration from bootstrap](/static/img/oauth/bootstrap.png)

#### Instructions
Fill all the required field for the selected provider.

Some providers does not require all fields to be filled. 
For example passwordless.id does not have a `client_secret`.

After configuring all settings properly, click `OK`. The user will be redirected to the `login` page.

:::warning
There are some basic configuration checks when clicking `OK` but if you somehow type a wrong information and the data is saved, you will have to open the actual server database manually and update it. The name of the table is `auth`.
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
Each provider has different requirements, see Auth0 for example, you have to change for your own settings:

![](/static/img/oauth/provider-requirement.png)
:::

#### After setup:

You will be redirected to login page:

![](/static/img/oauth/first-login.png)

### Next Step
Once OpenID provider is setup. Setup [Multiuser](multi-user) 


:::tip
Configuring OpenID provider from options or bootstrap can be only done if your provider supports discovery, otherwise, use [file configuration](oauth-auth#config-using-configuration-file)
:::
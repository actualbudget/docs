# Authenticating With OpenID Provider

:::note
Client Version 24.10.0 and
Server Version 24.10.0 or higher are required for this feature.
:::

## Setup
:::info
This feature requires use of [Actual Server](../config/)
:::

To enable this feature, you can do it using configuration file at actual server or you can use the UI

### Config using configuration file

If your OpenId provider supports discovery, use the following configuration example:

```json title="config.json"
"openId": {
        "issuer": "URL for the OpenId Provider",
        "client_id": "client_id given by the provider",
        "client_secret": "client_secret given by the provider",
        "server_hostname": "your actual server URL (so the provider redirects you to this)"
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
        "server_hostname": "your actual server URL (so the provider redirects you to this)"
    }
```

:::tip
This is the only way to use GitHub as user provider.
:::

### Using previous versions Actual (with Actual Server enabled)

If you are using Actual Server for the past versions, you will need to enable OpenId Auth from the options:

![](/static/img/oauth/start-using-options.png)

Once you click `Start using OpenID` a modal will be presented. For more details, go to [Configuring OpenID using UI](oauth-auth#configuring-openid-using-ui)

### Setup Actual Server for the first time

If you are starting to use Actual Server, during bootstrap, you can configure OpenID by click the button `Configure OpenID authentication instead (Advanced)`:

![](/static/img/oauth/welcome-button.png)

### Configuring OpenID using UI

#### Configuration from options
![Configuration from options](/static/img/oauth/modal.png)

#### Configuration from bootstrap
![Configuration from bootstrap](/static/img/oauth/bootstrap.png)

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
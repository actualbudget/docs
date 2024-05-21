# Authenticating With HTTP Headers

:::note
Client Version 25.x.0 and
Server Version 25.x.0 or higher are required for this feature.
:::

This feature will allow Actual to use a HTTP header to automatically authenticate and login without prompting for a password. This would be useful for individuals who run SSO services like [Authentik](https://goauthentik.io/), [Authelia](https://www.authelia.com/), and more.

## Setup

This feature needs to be enabled on the server, it is not configure to work out of the box. In the actual config, set the value `loginMethod` or env `ACTUAL_LOGIN_METHOD` to `"header"`. This will enable header authentication, but the normal password authentication will still work as a fallback. 

:::warning
Be careful! A misconfiguration on this next step could make your instance available to whole internet. 
:::

The SSO provider then needs to be configured to pass a extra HTTP header to actual. The details on how to do this are unique to the SSO provider, but the header `x-actual-password` needs to be set to your actual password.


:::note
This feature is not a HTTP basic auth, but a different form of using a password. For HTTP basic auth or User accounts see [this issue](https://github.com/actualbudget/actual/issues/524)
:::

## Configuration Options

* `loginMethod` (env: `ACTUAL_LOGIN_METHOD`): can be "password" (default) or "header". Must be set to "header" for this authentication option to work. Will fallback to password on header authentication failures
* `trustedProxies` (env: `ACTUAL_TRUSTED_PROXIES`): List of CIRDs to allowed to send the authentication header. The default value for this is to allow only known internal ip address ranges. If your SSO provider is external, you will have to set this option to the CIRD/IP(s) of your SSO provider. If your provider is in your local network, this default option should work for you. 

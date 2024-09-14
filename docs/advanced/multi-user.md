# Multi user support

:::note
Client Version 24.10.0 and
Server Version 24.10.0 or higher are required for this feature.
:::

This feature enables multiple users to login into Actual. For now, you need to enable [OpenId Provider auth](oauth-auth). The usernames will be fetched from the provider.

## Setup

This feature needs to be enabled on the server, it is not configured to work out of the box. In the Actual config, set the value `multiuser` or env `ACTUAL_MULTIUSER` to `"true"`. This will enable multiuser support. 

:::warning
The first user to login, after enabling multiuser (and OpenID Provider), will be considered the `master` user. Master users **cannot** be deleted nor change the role from Admin to Basic. But you can change the username manually.
:::

## User Directory

This is where the user management must happen. 

To access the **User Directory** page, access the menu from the server:

![](/static/img/multiuser/user-directory.png)

Users can be added, disabled, enabled, removed from this page:

![](/static/img/multiuser/user-directory-overview.png)

Users can be `Basic` or `Admin`.

- Basic:
Users with the Basic role can create new budgets and be invited to collaborate on budgets created by others.
This role is ideal for users who primarily need to manage their own budgets and participate in shared budget activities.

- Admin:
Can do everything that Basic users can. In addition, they have the ability to add new users to the directory and access budget files from all users.
Also can assign ownership of a budget to another person, ensuring efficient budget management.

## User Access Management

This is where the user access management must happen. 

To access the **User Access Management** page, the user have to be with a budget open:

![](/static/img/multiuser/user-access.png)

At this page you can give budget access, revoke and transfer ownership:

![](/static/img/multiuser/user-access-overview.png)

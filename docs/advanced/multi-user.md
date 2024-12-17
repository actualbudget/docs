# Managing Multi-User Support

:::note
Client Version 24.10.0 and
Server Version 24.10.0 or higher are required for this feature.
:::

This feature enables multiple users to login into Actual. For now, you need to enable [OpenId Provider auth](oauth-auth). The usernames will be fetched from the provider.

## Setup

This feature needs to be enabled on the server, it is not configured to work out of the box. In the Actual config, set the value `multiuser` or env `ACTUAL_MULTIUSER` to `"true"`. This will enable multiuser support. 

:::warning
The first user to log in after enabling multiuser (and OpenID Provider) will be considered the `master` user. Master users **cannot** be deleted or their role changed from Admin to Basic, but their usernames can be changed manually.
:::

## User Directory

This is where the user management must happen. 

To access the **User Directory** page, access the menu from the server:

![](/static/img/multiuser/user-directory.png)

Users can be added, disabled, enabled, removed from this page:

![](/static/img/multiuser/user-directory-overview.png)

There are two user roles _Basic_ or _Admin_.

- The Basic role: 
Users with the Basic role can create new budgets and collaborate on budgets made by others.
This role is ideal for users who primarily need to manage and participate in shared budget activities.

- The Admin role:
This role can do everything the Basic user role can. It can also add new users to the user directory and allow all users to access budget files.
The role can assign ownership of a budget to another person, ensuring efficient budget management.

## User Access Management

This is where the user access management must happen. 

The only place where one can access the **User Access Management** page is from within an open budget:

![](/static/img/multiuser/user-access.png)

This screen is where you assign, give and revoke budget access and transfer ownership:

![](/static/img/multiuser/user-access-overview.png)

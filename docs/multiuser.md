# Multiple Users

There are a few ways of having multiple users, each with their pros and cons.

### 1 File per person

Each person will have one file, and everyone will be able to access everyone's files.

This option is great for trusted people such as family members.

:::warning This gives everyone with the password access to edit everyone's files :::

### Encryption

This is similar to the 1 file per person method, but adds file encryption to address the security issues with it.
This way, each person will have it's own password for each file, preventing people from editing/looking at each other's files.

You can enable end-to-end encryption in the [Settings page.](../settings/index.md)
Take into consideration that if you lose the password the file is not recoverable (it's recommended to use a password manager such as KeePassXC or Vaultwarden).

### OpenID Experimental Feature

This allows you to use an auth provider (either internal or external) to manage multiple user accounts.

You can read more about it in the [Experimental multi-user page.](../experimental/multi-user.md)

:::warning This feature is experimental and might cause IRRECOVERABLE DATA LOSS, use at your own risk :::

### Multiple docker containers / instances of actual-server

You can run 2 (or more) docker containers or run multiple instances of the `actual-server`.
This will allow you to assign each container/instance to a different person.

This is not recommended as it doesn't scale well when you have quite a bit of users.

# Settings

The settings screens in Actual provide you with a number of options for managing the look and feel of your budget along with some more system specific settings.

You can access the Settings screen by clicking the down arrow by your budget name or going to the sidebar and clicking More > Settings.

![](/img/using-actual/settings-1.png)

### Formatting

The formatting options allow you to select the following:

- Your preferred date format
- Your preferred number format
- Your preferred first day of the week

![](/img/using-actual/settings-formatting.png)

### Encryption

End-to-end encryption allows you to encrypt the data on your remote server with a password. If you don't trust the server's owners, enable this setting to fully encrypt the data. Read more about this feature on the [Syncing Across Devices page.](../getting-started/sync.md/#end-to-end-encryption)

![](/img/using-actual/settings-encryption.png)

### Export

This section allows you to download a `.zip` archive of all of your server data for easy backup or migration.

![](/img/using-actual/settings-export.png)

## Advanced Settings

![](/img/using-actual/settings-advanced.png)

### Budget ID

Your Budget ID is a unique identifier that identifies the specific budget file that you have open. You can have many budgets per install of Actual and this allows you to identify which budget the data relates to.

### Reset Budget Cache

Resetting the Budget Cache clears all cached values and will completely re-calculate your entire budget. Many of these values are cached on your browser to improve performance.

### Reset Sync

Actual's sync function is quite complicated and is is covered in detail [here](../getting-started/sync.md#what-does-resetting-sync-mean). This is typically the last-resort to fix any potential issues with sending budget files between other devices.

### Repair Split Transactions

If you are experiencing bugs relating to split transactions and the “Reset budget cache” button above does not help, this tool may fix them.

### Experimental Features

If you want to test out some bleeding-edge features, here's your place to do it.

:::danger
Before enabling any experimental feature, **always [back up your budget](backup-restore/backup.md) first**.
Experimental features may corrupt it or cause irrecoverable errors. Back up your budget so you can recover it if this happens.
:::

As of the [latest release](../releases.md), the current available experimental features are:


- Monthly spending
- Budget mode toggle
- Goal templates
- SimpleFIN sync

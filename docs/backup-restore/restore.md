# Restoring Backups

## Restoring a manual backup

If you previously followed the [steps](./backup.md) to back up your data and have an Actual
zip export, you can now import that using the web version of Actual.

To do this,

1. login to your budget, then in the top right corner click 'Server'

   ![](/img/restore/actual-config-7.png)

1. Then select Logout

   ![](/img/restore/actual-config-8.png)

1. Log back into your instance of Actual

   ![](/img/restore/actual-config-9.png)

1. From the next screen select Import File

   ![](/img/migrating/actual-import-1.png)

1. Select Actual and then locate your Zip file, this will then import what you previously exported into
   Actual.

   ![](/img/migrating/actual-import-2.png)

That is it. A fresh budget will show in your budget list. If the imported data is a copy of your current budget, you may want to rename the new budget by clicking on it's name so you can tell them apart. Once you verify the new imported budget is correct, you can navigate back to the budget selection screen by closing the current budget and deleting the old copy.

## Errors When Restoring From Backup
It is possible that you may encounter an error during restoration that says: `This budget cannot be loaded with this version of the app. Make sure the app is up-to-date.`
The fix for this is to manually migrate the your sqlite database in the steps outlined below:
1. Download and install [SQLite Browser](https://sqlitebrowser.org/)
2. Unzip the `.zip` file you downloaded earlier. The filename should look like: `yyyy-mm-dd-My-Finances-abcd1234.zip`
3. Open up the `db.sqlite` file in the SQLite Browser.
4. Click on the `Browse Data` tab and select `__migrations__` from the table dropdown menu.
5. You should see a list of integers. Cross-reference the data in this table with the list of [database migrations](https://github.com/actualbudget/actual/tree/master/packages/loot-core/migrations) in the main Actual repository.
6. For every integer that's missing, you'll want to click on the `.sql` file associated with it and copy the raw data.
7. Run the sql query in the Execute tab of SQLite Browser. Be sure to check the output that the command was successful.
8. If the sql query that you copied is successful, you'll want to insert the migration command's id into the `__migrations__` table by executing `insert into __migrations__ values(id_of_missing_migration_command);`.
9. Once your `__migrations__` table matches the database migrations folder, commit and close the database.
10. Rezip your modified `db.sqlite` and `metadata.json` files into a zip file.
11. Retry the restore process outlined above.

## Automatic Backups

:::caution
Automatic backups are currently only available in the (beta) desktop app.
:::

Actual keeps backups of your data locally. If something disastrous happens, you can always load a recent backup to get your data back.

Currently it keeps up to 10 backups, one per day of usage of the app, multiple backups of the current day. The result is you will have data backed **up to the last 15 minutes**, in addition to the last 10 days you used the app.

### Loading an automatic backup

- Select the **File > Load Backup…** menu item
- Choose the backup you want to load and select it

The app will reload with the data from that backup. If you want to keep using that backup, you don't have to do anything else, just keep using the app. If you want to go back to the previous data, open the backup menu again and select **Revert to original version**. This option will be available until another backup is made.

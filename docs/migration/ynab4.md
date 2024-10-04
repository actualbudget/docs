# Migrating from YNAB4

- Go to the **Create new file** screen (this is the first screen you see on first launch).
- Click **Import…**
- All of your existing YNAB4 budgets should be listed. Select the one you want to import.
- Click **Import**
- That's it!

## Known issues
- Split transactions may import incorrectly; in YNAB4 a split transaction tracks a payee at the parent level, while in Actual the payee shown at parent level is joined from the payees of the splits. Because the splits do not have the correct payees they may not show up as expected in reports and filters. The fix for this is to use Settings / Show advanced settings / Repair split transactions. This will only need to be done once.

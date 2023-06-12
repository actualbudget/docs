# Payees

A payee is a description of the source of a transaction. Actual provides a powerful way of managing payees.

When importing transactions, by default it will create new payees based on the given name. Usually this ends up with some ugly names like `Target Debit Crd Ach Tran Co Id:Xxxxx15170`. With payee management, you can clean these names up, set rules for how payees are resolved, and even set a default category to use.

To manage payees, either select the **File > Manage Payees** menu item or click the **Manage Payees** button when editing a transaction's payee.

## How payees work

When importing transactions from a file, the system tries to automatically match the given names to existing payees. It does this by running through **rules** that you can edit. If no existing payee is found, it will create one.

If a payee is found with an exact match as the given name, it will always use that payee.

Otherwise, it will look for payees with rules that match it. These rules specify whether it should match a string exactly, or if it should contain a string. For example, a **Target** payee might have a rule that says "if a name contains 'Target', use this payee", and the ugly payee above would be resolve to this **Target** payee.

When a payee is matched, if it has a **default category** the transaction will automatically be assigned it.

## Editing a payee

1. Open the **Manage Payees** screen
2. To **rename** a payee, click the name and type in a new one.
3. To **delete** a payee, select it and press the **1 payee** button in the top-left and select **Delete**.
4. Edit the default category by clicking it and selecting one from the dropdown.
5. Edit the rules by clicking on the "# rules" button and a dropdown will appear with the list of rules to match this payee with.

## Merging payees

A powerful feature is merging payees. You may already have months worth of data and a lot of ugly **Morrisons** payees that all vary slightly. You want to merge all of these together into one payee.

1. Click the three dots next to your budget name

![](/img/payees/BudgetOptionButton.png)

2. Click Manage Payees

![](/img/payees/ManagingPayees.png)

3. Type "Morrisons" into the filter to only show those payees.

![](/img/payees/Payees.png)

4. Click the checkbox in the table header next to the **Name** column to select all of the different variations of "Morrisons"

![](/img/payees/PayeesSelected.png)

5. Click the button in the top-left to open the menu, and select **Merge**

![](/img/payees/MergePayeesOption.png)

6. All of the payees will merge into one and the name will be editable. Type in a name for the final payee.

![](/img/payees/PayeesMerged.png)

You can individually select payees and merge them if you like, but filtering & merging is a powerful way to quickly clean up your payees.

## Transfer payees

[Transfers](./transfers.md) are just special payees that indicate which account to transfer to/from. Since they are payees, you can create rules like normal which will automatically create transfers. Find them at the bottom of the **Manage Payees** screen if you want to create custom rules.

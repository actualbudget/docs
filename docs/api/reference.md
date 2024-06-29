---
title: API Reference
---

import { types, objects, PrimitiveTypeList, PrimitiveType, StructType, Method, MethodBox } from './types';
import APIList from './APIList';

This is the documentation of all available API methods. The API has not been released yet, but it will be available in the next update. This section is a work in progress.

<APIList title="Budgets" sections={[
"getBudgetMonths",
"getBudgetMonth",
"setBudgetAmount",
"setBudgetCarryover"
]} />

<APIList title="Transactions" sections={[
"Transaction",
"addTransactions",
"importTransactions",
"getTransactions",
"updateTransaction",
"deleteTransaction"
]} />

<APIList title="Accounts" sections={[
"Account",
"getAccounts",
"createAccount",
"updateAccount",
"closeAccount",
"reopenAccount",
"deleteAccount"
]} />

<APIList title="Categories" sections={[
"Category",
"getCategories",
"createCategory",
"updateCategory",
"deleteCategory"
]} />

<APIList title="Category Groups" sections={[
"Category group",
"getCategoryGroups",
"createCategoryGroup",
"updateCategoryGroup",
"deleteCategoryGroup"
]} />

<APIList title="Payees" sections={[
"Payee",
"getPayees",
"createPayee",
"updatePayee",
"deletePayee"
]} />

<APIList title="Rules" sections={[
"ConditionOrAction",
"Rule",
"Payee rule",
"getRules",
"getPayeeRules",
"createRule",
"updateRule",
"deleteRule"
]} />

<APIList title="Misc" sections={[
"initConfig",
"init",
"shutdown",
"sync",
"runBankSync",
"runImport",
"loadBudget",
"downloadBudget",
"batchBudgetUpdates",
"runQuery"
]} />

## Types of methods

API methods are categorized into one of four types:

- `get`
- `create`
- `update`
- `delete`

Objects may have fields specific for a type of method. For example, the `payee` field of a `transaction` is only available in a `create` method. This field doesn't exist in objects returned from a `get` method (`payee_id` is used instead).

Fields specific to a type of request are marked as such in the notes.

`id` is a special field. All objects have an `id` field. However, you don't need to specify an `id` in a `create` method; all `create` methods will return the created `id` back to you.

All `update` and `delete` methods take an `id` to specify the desired object. `update` takes the fields to update as a second argument — it does not take a full object. That means even if a field is required, you don't have to pass it to `update`. For example, a `category` requires the `group_id` field, however `updateCategory(id, { name: "Food" })` is a valid call. Required means that an `update` can't set the field to `null` and `create` method must always have it.

## Primitives

These are types.

<PrimitiveTypeList />

## Budgets

#### `getBudgetMonths`

<Method name="getBudgetMonths" args={[]}  returns="Promise<month[]>" />

#### `getBudgetMonth`

<Method name="getBudgetMonth" args={[{ name: 'month', type: 'month' }]} returns="Promise<Budget>" />

#### `setBudgetAmount`

<Method name="setBudgetAmount" args={[{ name: 'month', type: 'month' }, { name: 'categoryId', type: 'id' }, { name: 'value', type: 'amount' }]} returns="Promise<null>" />

#### `setBudgetCarryover`

<Method name="setBudgetCarryover" args={[{ name: 'month', type: 'month' }, { name: 'categoryId', type: 'id' }, { name: 'flag', type: 'bool' }]} returns="Promise<null>" />

## Transactions

#### Transaction

<StructType fields={objects.transaction} />

#### Split transactions

A split transaction has several sub-transactions that split the total
amount across them. You can create a split transaction by specifying
an an array of sub-transactions in the `subtransactions` field.

Subtransactions can specify the following fields, and `amount` is the only required field:

- `amount`
- `category_id`
- `notes`

If the amounts of the sub-transactions do not equal the total amount
of the transaction, currently the API call will succeed but an error
with be displayed within the app.

#### Transfers

Existing transfers will have the `transfer_id` field which points to the transaction on the other side. **You should not change this** or you will cause unexpected behavior. (You are allowed to set this when importing, however.)

If you want to create a transfer, use the transfer payee for the account you wish to transfer to/from. Load the payees, use the [`transfer_acct`](#payee) field of the payee to find the account you want to transfer to/from assign that payee to the transaction. A transfer with a transaction in both accounts will be created. (See [transfer payees](#transfers-1).)

#### Methods

#### `addTransactions`

<Method name="addTransactions" args={[{ name: 'accountId', type: 'id'}, { name: 'transactions', type: 'Transaction[]'}, { name: 'runTransfers = false', type: 'bool?'}, { name: 'learnCategories = false', type: 'bool?'}]} returns="Promise<id[]>" />

Adds multiple transactions at once. Does not reconcile (see `importTransactions`). Returns an array of ids of the newly created transactions.

This method does **not** avoid duplicates. Use `importTransactions` if you want the full reconcile behavior.

This method has the following optional flags:

- `runTransfers`: create transfers for transactions where transfer payee is given (defaults to false)
- `learnCategories`: update Rules based on the category field in the transactions (defaults to false)

This method is mainly for custom importers that want to skip all the automatic stuff because it wants to create raw data. You probably want to use `importTransactions`.

#### `importTransactions`

<Method name="importTransactions" args={[{ name: 'accountId', type: 'id'}, { name: 'transactions', type: 'Transaction[]'}]} returns="Promise<{ errors, added, updated }>" />

Adds multiple transactions at once, but goes through the same process as importing a file or downloading transactions from a bank. You probably want to use this one. Returns an array of ids of the newly created transactions.

The import will "reconcile" transactions to avoid adding duplicates. Transactions with the same `imported_id` will never be added more than once. Otherwise, the system will match transactions with the same amount and with similar dates and payees and try to avoid duplicates. If not using `imported_id` you should check the results after importing.

It will also create transfers if a transfer payee is specified. See [transfers](#transfers).

This method returns an object with the following fields:

- `added`: an array of ids of transactions that were added
- `updated`: an array of ids of transactions that were updated (such as being cleared)
- `errors`: any errors that occurred during the process (most likely a single error with no changes to transactions)

#### `getTransactions`

<Method name="getTransactions" args={[{ name: 'accountId', type: 'id'}, { name: 'startDate', type: 'date' }, { name: 'endDate', type: 'date' }]} returns="Promise<Transaction[]>" />

Get all the transactions in `accountId` between the specified dates (inclusive). Returns an array of [`Transaction`](#transaction) objects.

#### `updateTransaction`

<Method name="updateTransaction" args={[{ name: 'id', type: 'id'}, { name: 'fields', type: 'object'} ]} />

Update fields of a transaction. `fields` can specify any field described in [`Transaction`](#transaction).

#### `deleteTransaction`

<Method name="deleteTransaction" args={[{ name: 'id', type: 'id'}]} />

Delete a transaction.

#### Examples

```js
// Create a transaction of $12.00. A payee of "Kroger" will be
// automatically created if it does not exist already and
// assigned to the transaction.

await importTransactions(accountId, [
  {
    date: '2019-08-20',
    amount: 1200,
    payee_name: 'Kroger',
    category_id: 'c179c3f4-28a6-4fbd-a54d-195cced07a80',
  },
]);
```

```js
// Get all transactions in an account for the month of August
// (it doesn't matter that August 31st doesn't exist).

await getTransactions(accountId, '2019-08-01', '2019-08-31');
```

```js
// Assign the "Food" category to a transaction

let categories = await getCategories();
let foodCategory = category.find(cat => cat.name === 'Food');
await updateTransaction(id, { category_id: foodCategory.id });
```

## Accounts

#### Account

<StructType fields={objects.account} />

#### Account types

The account type must be one of these valid strings:

- `checking`
- `savings`
- `credit`
- `investment`
- `mortgage`
- `debt`
- `other`

The account type does not effect anything currently. It's simply extra information about the account.

#### Closing accounts

Avoid setting the `closed` property directly to close an account; instead use the `closeAccount` method. If the account still has money in it you will be required to specify another account to transfer the current balance to. This will help track your money correctly.

If you want to fully delete an account and remove it entirely from the system, use [`deleteAccount`](#deleteaccount). Note that if it's an on-budget account, any money coming from that account will disappear.

#### Methods

#### `getAccounts`

<Method name="getAccounts" args={[]} returns="Promise<Account[]>" />

Get all accounts. Returns an array of [`Account`](#account) objects.

#### `createAccount`

<Method name="createAccount" args={[{ name: 'account', type: 'Account' }, { name: 'initialBalance = 0', type: 'amount?' }]} returns="Promise<id>" />

Create an account with an initial balance of `initialBalance` (defaults to 0). Remember that [`amount`](#primitives) has no decimal places. Returns the `id` of the new account.

#### `updateAccount`

<Method name="updateAccount" args={[{ name: 'id', type: 'id' }, { name: 'fields', type: 'object' }]} />

Update fields of an account. `fields` can specify any field described in [`Account`](#account).

#### `closeAccount`

<Method name="closeAccount" args={[{ name: 'id', type: 'id' }, { name: 'transferAccountId', type: 'id?' }, { name: 'transferCategoryId', type: 'id?' }]} />

Close an account. `transferAccountId` and `transferCategoryId` are optional if the balance of the account is 0, otherwise see next paragraph.

If the account has a non-zero balance, you need to specify an account with `transferAccountId` to transfer the money into. If you are transferring from an on-budget account to an off-budget account, you can optionally specify a category with `transferCategoryId` to categorize the transfer transaction.

Transferring money to an off-budget account needs a category because money is taken out of the budget, so it needs to come from somewhere.

If you want to simply delete an account, see [`deleteAccount`](#deleteaccount).

#### `reopenAccount`

<Method name="reopenAccount" args={[{ name: 'id', type: 'id' }]} />

Reopen a closed account.

#### `deleteAccount`

<Method name="deleteAccount" args={[{ name: 'id', type: 'id' }]} />

Delete an account.

#### Examples

```js
// Create a savings accounts
createAccount({
  name: "Ally Savings",
  type: "savings
})
```

```js
// Get all accounts

let accounts = await getAccounts();
```

## Categories

#### Category

<StructType fields={objects.category} />

#### Methods

#### `getCategories`

<Method name="getCategories" args={[]} returns="Promise<Category[]>" />

Get all categories.

#### `createCategory`

<Method name="createCategory" args={[{ name: 'category', type: 'Category' }]} returns="Promise<id>" />

Create a category. Returns the `id` of the new account.

#### `updateCategory`

<Method name="updateCategory" args={[{ name: 'id', type: 'id' }, { name: 'fields', type: 'object' }]} returns="Promise<null>" />

Update fields of a category. `fields` can specify any field described in [`Category`](#category).

#### `deleteCategory`

<Method name="deleteCategory" args={[{ name: 'id', type: 'id' }]} returns="Promise<null>" />

Delete a category.

### Examples

```js
{
  name: "Food",
  group_id: "238d4d38-a512-4e28-9bbe-e96fd5d99251"
}
```

#### Income categories

Set `is_income` to `true` to create an income category. The `group_id` of the category should point to the existing income group category (currently only one ever exists, see [category group](#category-group)).

## Category groups

#### Category group

<StructType fields={objects.categoryGroup} />

```js
{
  name: 'Bills';
}
```

#### Income category groups

There should only ever be one income category group,

#### Methods

#### `getCategoryGroups`

<Method name="getCategoryGroups" args={[]} returns="Promise<CategoryGroup[]>" />

Get all category groups.

#### `createCategoryGroup`

<Method name="createCategoryGroup" args={[{ name: 'group', type: 'CategoryGroup' }]} returns="Promise<id>" />

Create a category group. Returns the `id` of the new group.

#### `updateCategoryGroup`

<Method name="updateCategoryGroup" args={[{ name: 'id', type: 'id' }, { name: 'fields', type: 'object' }]} returns="Promise<id>" />

Update fields of a category group. `fields` can specify any field described in [`CategoryGroup`](#categorygroup).

#### `deleteCategoryGroup`

<Method name="deleteCategoryGroup" args={[{ name: 'id', type: 'id' }]} returns="Promise<null>" />

Delete a category group.

## Payees

#### Payee

<StructType fields={objects.payee} />

```js
{
  name: "Kroger",
  category: "a1bccbd1-039e-410a-ba05-a76b97a74fc8"
}
```

#### Transfers

Transfers use payees to indicate which accounts to transfer money to/from. This lets the system use the same payee matching logic to manage transfers as well.

Each account has a corresponding "transfer payee" already created in the system. If a payee is a transfer payee, it will have the `transfer_acct` field set to an account id. Use this to create transfer transactions with [`importTransactions`](#importtransactions).

#### Methods

#### `getPayees`

<Method name="getPayees" args={[]} returns="Promise<Payee[]>" />

Get all payees.

#### `createPayee`

<Method name="createPayee" args={[{ name: 'payee', type: 'Payee' }]} returns="Promise<id>" />

Create a payee. Returns the `id` of the new payee.

#### `updatePayee`

<Method name="updatePayee" args={[{ name: 'id', type: 'id' }, { name: 'fields', type: 'object' }]} returns="Promise<id>" />

Update fields of a payee. `fields` can specify any field described in [`Payee`](#payee).

#### `deletePayee`

<Method name="deletePayee" args={[{ name: 'id', type: 'id' }]} returns="Promise<null>" />

Delete a payee.

## Rules

#### ConditionOrAction

<StructType fields={objects.condition} />

#### Rule

<StructType fields={objects.rule} />

#### Payee rule

<StructType fields={objects.payeeRule} />

#### Methods

#### `getRules`

<Method name="getRules" args={[]} returns="Promise<Rule[]>" />

Get all rules.

#### `getPayeeRules`

<Method name="getPayeeRules" args={[{ name: 'payeeId', type: "id" }]} returns="Promise<PayeeRule[]>" />

Get all payees rules for `payeeId`.

#### `createRule`

<Method name="createRule" args={[{ name: 'rule', type: 'Rule' }]} returns="Promise<Rule>" />

Create a rule. Returns the new rule, including the `id`.

#### `updateRule`

<Method name="updateRule" args={[{ name: 'id', type: 'id' }, { name: 'fields', type: 'object' }]} returns="Promise<Rule>" />

Update fields of a rule. `fields` can specify any field described in [`Rule`](#rule).  Returns the updated rule.

#### `deleteRule`

<Method name="deleteRule" args={[{ name: 'id', type: 'id' }]} returns="Promise<null>" />

Delete a rule.

#### Examples

```js
{
  stage: 'pre',
  conditionsOp: 'and',
  conditions: [
    {
      field: 'payee',
      op: 'is',
      value: 'test-payee',
    },
  ],
  actions: [
    {
      op: 'set',
      field: 'category',
      value: 'fc3825fd-b982-4b72-b768-5b30844cf832',
    },
  ],
}
```

## Misc

#### InitConfig

<StructType fields={objects.initConfig} />

#### Methods

#### `init`

<Method name="init" args={[{ properties: [{ name: 'config', type: 'InitConfig' }] }]} returns="Promise<void>" />

Initializes the API by connecting to an Actual Budget server.

#### `shutdown`

<Method name="shutdown" args={[]} returns="Promise<void>" />

Shuts down the API. This will close any open budget and clean up any resources.

#### `sync`

<Method name="sync" args={[]} returns="Promise<void>" />

Synchronizes the locally cached budget files with the server's copy.

#### `runBankSync`

<Method name="runBankSync" args={[{ properties: [{ name: 'accountId', type: 'string' }] }]} returns="Promise<void>" />

Run the 3rd party (gocardless, simplefin) bank sync operation. This will download the transactions and insert them into the ledger.

#### `runImport`

<Method name="runImport" args={[{ properties: [{ name: 'budgetName', type: 'string' }, { name: 'func', type: 'func' }] }]} returns="Promise<void>" />

Creates a new budget file with the given name, and then runs the custom importer function to populate it with data.

#### `loadBudget`

<Method name="loadBudget" args={[{ properties: [{ name: 'syncId', type: 'string' }] }]} returns="Promise<void>" />

Load a locally cached budget file.

#### `downloadBudget`

<Method name="downloadBudget" args={[{ properties: [{ name: 'syncId', type: 'string' }, { name: 'password', type: 'string?' }] }]} returns="Promise<void>" />

Load a budget file. If the file exists locally, it will load from there. Otherwise, it will download the file from the server.

#### `batchBudgetUpdates`

<Method name="batchBudgetUpdates" args={[{ properties: [{ name: 'func', type: 'func' }] }]} returns="Promise<void>" />

Performs a batch of budget updates. This is useful for making multiple changes to the budget in a single call to the server.

#### `runQuery`

<Method name="runQuery" args={[{ properties: [{ name: 'query', type: 'ActualQL' }] }]} returns="Promise<unknown>" />

Allows running any arbitrary ActualQL query on the open budget.

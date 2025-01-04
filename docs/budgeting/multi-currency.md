# Multi-Currency
Actual Budget is currency agnostic and does not support multi-currency.  There are people working on implementing currency support, however it will take time.
For the current status visit:
https://github.com/tlesicka/actual-budget-multicurrency-todo

## Method to implement multi-currency using Rule Templates
Until multi-currency is added to Actual Budget, you can use this method to achieve similar results.

:::warning
This uses an **experimental feature**. Which means we’re still working on finishing it. There may be bugs, missing functionality or incomplete documentation, and we may decide to remove the feature in a future release. If you have any feedback, please [open an issue](https://github.com/actualbudget/actual/issues) or post a message in the Discord.
:::

## Setup
1. Enable Rule action templating
   - From the Settings->Show advanced settings->Experimental features
   - click "I understand the risks, show experimental features"
   - click "Rule action templating"

2. Create Foreign Currency Account
   - (optional) After creating a new account for the foreign currency, either:
     - Add a note to the account ```#currency:XXX``` where XXX is the currency code (i.e. EUR, USD, AUD, etc)
     - Name the account with the currency code in parens (i.e. ```Australian Cash (AUD)```)

     ![Account Name and Notes](/static/img/multi-currency/account-name-and-note.png)

     Neither is required, but naming the account this way or creating a note will allow a smooth transition when multi-currency is enabled.

3. Create Rules

   You will need to create two separated rules for each foreign currency account.

   **Rule 1:**

   ![Rule 1](/static/img/multi-currency/rule-1.png)

   - From the Rules page select "Create new rule"
   - From the Rule Modal
   - Select "Post"
   - Edit Conditions (If "All" of these conditions match)
     - "Account" "is" then select the foreign currency account
     - "notes" "is not" ```nothing```
     - "notes" "does not contain" ```FX rate:```
   - Actions
     - On the left side of the action, just to the right of the -/+ symbols, click the Template toggle button. (The action must be of type "set" "notes" or "set" "amount" before the Template toggle button will appear.)

     ![Rule Action Template mode not available](/static/img/multi-currency/rule-action.png)

     ![Rule Action Normal Mode](/static/img/multi-currency/rule-action-normal-instructions.png)

     ![Rule Action Template Mode](/static/img/multi-currency/rule-action-template.png)

     - "set" "notes" ```{{ fixed (div amount 100) 2 }} XXX (FX rate: FX_RATE) • {{ notes }}```
       - XXX is the currency code (i.e. EUR, USD, AUD, etc)
       - FX_RATE is the exchange rate (i.e. insert 0.65 for 1 AUD = 0.65 USD)
     - click the + symbol to add a new action line
     - click the Template toggle button for this line
     - "set" "amount" ```{{ fixed (mul amount FX_RATE) 0 }}```
       - FX_RATE is the same as above
   - Click Save

   **Rule 2:**

   ![Rule 2](/static/img/multi-currency/rule-2.png)

   - From the Rules page select "Create new rule"
   - From the Rule Modal
   - Select "Post"
   - Edit Conditions (If "All" of these conditions match)
     - "Account" "is" then select the foreign currency account
     - "notes" "is" ```nothing```
   - Actions
     - On the left side of the action, just to the right of the -/+ symbols, click the Template toggle button
     - "set" "notes" ```{{ fixed (div amount 100) 2 }} XXX (FX rate: FX_RATE)```
       - XXX is the same currency code from the first rule
       - FX_RATE is the exchange rate from the first rule
     - click the + symbol to add a new action line
     - click the Template toggle button for this line
     - "set" "amount" ```{{ fixed (mul amount FX_RATE) 0 }}```
       - FX_RATE is the same as above
   - Click Save

## Usage
1. Create a transaction in the foreign currency account using the foreign currency amount.  (i.e. normal budget currency is USD but account is AUD, then enter the AUD amount in the Payment or Deposit column)

   ![Pre-Conversion Transaction](/static/img/multi-currency/usage-preconvert.png)

2. Go to the Rules page and select one of the two rules for that account.  At the bottom, will be transactions that the rule can be applied to.
   - If you do not see the transaction(s) that you want to convert, click cancel and check the other rule for that account.
   - Select the transaction(s) that you would like to convert and click "Apply actions" button
   - Once the actions have been applied, click cancel since you don't want to change the rule.

![Apply Exchange Rate to Transaction](/static/img/multi-currency/usage-convert.png)

3. Go back to the foreign currency account to verify that the transaction was converted.

   ![Post-Conversion Transaction](/static/img/multi-currency/usage-postconvert.png)

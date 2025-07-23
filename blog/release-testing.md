---
title: Preliminary changelog v25.8.0
description: Changelog for release testing
date: 2025-07-23T00:00
slug: release-testing
tags: []
hide_table_of_contents: false
authors: matt-fidd
---

<!--truncate-->

**Docker tag: edge**

#### Features
- [#5032](https://github.com/actualbudget/actual/pull/5032) Add user defined tag colors
- [#5167](https://github.com/actualbudget/actual/pull/5167) Introduce an experimental feature to display currency symbols in the app
- [#5352](https://github.com/actualbudget/actual/pull/5352) Only show sidebar tooltip on desktop

#### Enhancements
- [#5104](https://github.com/actualbudget/actual/pull/5104) Add colors to ReportTable "Totals" row
- [#5219](https://github.com/actualbudget/actual/pull/5219) Mobile running balance
- [#5279](https://github.com/actualbudget/actual/pull/5279) Run rules on transactions created by a transfer (only applying to the fields notes and cleared).
- [#5282](https://github.com/actualbudget/actual/pull/5282) Add interval picker for net worth report
- [#5286](https://github.com/actualbudget/actual/pull/5286) Add Discord link to the help menu for improved user discoverability and support.
- [#5288](https://github.com/actualbudget/actual/pull/5288) Round all template amounts when hide decimals is set
- [#5290](https://github.com/actualbudget/actual/pull/5290) Add notes to the scheduled transactions table
- [#5293](https://github.com/actualbudget/actual/pull/5293) Adds a button to mobile CategoryGroupMenu that allows users to apply all budget templates in this group
- [#5295](https://github.com/actualbudget/actual/pull/5295) Extend the week template to be a periodic template supporting days, weeks, months, years
- [#5301](https://github.com/actualbudget/actual/pull/5301) Make remainder templates respect up to limits
- [#5307](https://github.com/actualbudget/actual/pull/5307) Reword button and title of the overspending banner when in tracking budget
- [#5309](https://github.com/actualbudget/actual/pull/5309) Added Bank of Valletta to list of limited history banks.
- [#5316](https://github.com/actualbudget/actual/pull/5316) Fix templates in tracking budget when using priorities, and templated income.
- [#5330](https://github.com/actualbudget/actual/pull/5330) Add keyboard shortcuts for duplicating transaction, editing date, and editing amount
- [#5334](https://github.com/actualbudget/actual/pull/5334) Add shortcut for showing the command palette to the keyboard shortcuts modal
- [#5340](https://github.com/actualbudget/actual/pull/5340) Enhanced Keyboard Shortcuts modal to be searchable
- [#5348](https://github.com/actualbudget/actual/pull/5348) Add aggregated account views (On Budget, Off Budget, All Accounts) to Command Bar
- [#5353](https://github.com/actualbudget/actual/pull/5353) Adding DD-MM-YYYY as a date format option for displaying.
- [#5355](https://github.com/actualbudget/actual/pull/5355) Display account balances in Command Bar
- [#5359](https://github.com/actualbudget/actual/pull/5359) Add options to post schedule today or the next scheduled date
- [#5362](https://github.com/actualbudget/actual/pull/5362) Disable sidebar tooltip on touchscreen device. Related to #5352
- [#5368](https://github.com/actualbudget/actual/pull/5368) Add button to find existing tag from transactions notes

#### Bugfix
- [#5207](https://github.com/actualbudget/actual/pull/5207) Hide running balance when adding a new transaction
- [#5211](https://github.com/actualbudget/actual/pull/5211) Fix a few typos mentioned on Weblate
- [#5239](https://github.com/actualbudget/actual/pull/5239) Fixed the functions to set budget targets based on past averages to correctly ignore hidden categories. Further work is required to handle hidden category groups, including potentially creating new views or migrations to expose relevant information to the target setting functions.
- [#5247](https://github.com/actualbudget/actual/pull/5247) Fix issue that importTransactions() options (defaultCleared) was not used
- [#5259](https://github.com/actualbudget/actual/pull/5259) Fix rule templating on date causing crash
- [#5263](https://github.com/actualbudget/actual/pull/5263) Fix bug where "has tag(s)" filter created empty tag when using Enter key
- [#5269](https://github.com/actualbudget/actual/pull/5269) Apply context menu actions to all selected transactions and payees
- [#5281](https://github.com/actualbudget/actual/pull/5281) Hide balance graph values when privacy mode is activated
- [#5303](https://github.com/actualbudget/actual/pull/5303) Fix server-started message invoking too early, causing desktop app server configuration flakiness.
- [#5305](https://github.com/actualbudget/actual/pull/5305) Fix overspent categories banner including hidden categories in the tracking budget
- [#5319](https://github.com/actualbudget/actual/pull/5319) Allow templates for daily interval schedules that are longer than 1 month to budget in intermediary months
- [#5326](https://github.com/actualbudget/actual/pull/5326) fixes saving correct account notes when opening another account
- [#5335](https://github.com/actualbudget/actual/pull/5335) Fix pseudo-element quotes in ColorPicker
- [#5344](https://github.com/actualbudget/actual/pull/5344) Fix Boursorama GoCardless wrong payee for multiline transactions
- [#5356](https://github.com/actualbudget/actual/pull/5356) Fix datepicker month input validation to allow mm/yyyy
- [#5358](https://github.com/actualbudget/actual/pull/5358) Fix payee and transaction context menus when no items selected
- [#5360](https://github.com/actualbudget/actual/pull/5360) Fix crash when using bulk amount update
- [#5364](https://github.com/actualbudget/actual/pull/5364) Applied color-variable to resizable handle to adapt to color theme automatically
- [#5373](https://github.com/actualbudget/actual/pull/5373) On initial click for reconcile selection of value
- [#5377](https://github.com/actualbudget/actual/pull/5377) Local cleanup groups will only use money from inside the group itself.
- [#5380](https://github.com/actualbudget/actual/pull/5380) Fix template priority sorting that was broken by the remainder change

#### Maintenance
- [#5059](https://github.com/actualbudget/actual/pull/5059) Convert `SelectLinkedAccountsModal` to TypeScript
- [#5169](https://github.com/actualbudget/actual/pull/5169) Update contributor points calculation logic.
- [#5208](https://github.com/actualbudget/actual/pull/5208) Move remaining .d.ts files to .ts
- [#5212](https://github.com/actualbudget/actual/pull/5212) Introduce linting rules to improve translation consistency and coverage
- [#5361](https://github.com/actualbudget/actual/pull/5361) Remove unused dependency express-response-size
- [#5365](https://github.com/actualbudget/actual/pull/5365) Bump form-data to 4.0.4
- [#5371](https://github.com/actualbudget/actual/pull/5371) Added tests for Help menu

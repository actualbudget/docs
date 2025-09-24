---
title: Pre-Release 25.10.0
description: New pre release of Actual.
date: 2025-09-24T10:00
slug: prerelease-notes
tags: [announcement, release]
hide_table_of_contents: false
authors: matt-fidd
---

<!--truncate-->

**Docker tag: edge**

#### Features

- [#5037](https://github.com/actualbudget/actual/pull/5037) Adds net worth graph for each account page. — thanks @passabilities
- [#5624](https://github.com/actualbudget/actual/pull/5624) Add tools to migrate/un-migrate to/from UI automations — thanks @jfdoming
- [#5653](https://github.com/actualbudget/actual/pull/5653) Add BRL, JMD, RSD, RUB, THB and UAH currencies — thanks @misu-dev
- [#5725](https://github.com/actualbudget/actual/pull/5725) Add a setting to disable update notifications — thanks @MikesGlitch
- [#5758](https://github.com/actualbudget/actual/pull/5758) Add 'dryRun' option to importTransactions API. — thanks @amrawadk
- [#5767](https://github.com/actualbudget/actual/pull/5767) Create a mobile payees list page with search and filtering capabilities. — thanks @MatissJanis
- [#5780](https://github.com/actualbudget/actual/pull/5780) Add Express-based CORS proxy with rate limiting, logging, and GitHub token authentication support. — thanks @lelemm

#### Enhancements

- [#5562](https://github.com/actualbudget/actual/pull/5562) Implement react compiler to take advantage of some performance improvements — thanks @joel-jeremy
- [#5584](https://github.com/actualbudget/actual/pull/5584) Introduction of APIs to handle Schedule + a bit more. Refer to updated API documentation PR2811 on documentation. — thanks @karimkodera
- [#5610](https://github.com/actualbudget/actual/pull/5610) Re-design mobile accounts page to better match the transactions and budget tables/list + add all accounts page — thanks @joel-jeremy
- [#5649](https://github.com/actualbudget/actual/pull/5649) Add error boundary for modal windows — thanks @MatissJanis
- [#5676](https://github.com/actualbudget/actual/pull/5676) Add NO_COLOR standard environment flag to sync-server logging (https://no-color.org/). — thanks @michaelsanford
- [#5688](https://github.com/actualbudget/actual/pull/5688) Add Romanian and Moldovan Leu currencies — thanks @biolan
- [#5698](https://github.com/actualbudget/actual/pull/5698) Added support for Egyptian Pound (EGP) and Saudi Riyal (SAR) currencies. — thanks @xshalan
- [#5711](https://github.com/actualbudget/actual/pull/5711) Add bank sync option to only import account balance — thanks @youngcw
- [#5733](https://github.com/actualbudget/actual/pull/5733) Mobile: open recurring schedule picker in modal — thanks @MatissJanis
- [#5741](https://github.com/actualbudget/actual/pull/5741) Add BPER Italy bank parser (BPER_RETAIL_BPMOIT22) — thanks @dirk-apers
- [#5744](https://github.com/actualbudget/actual/pull/5744) Dynamically update currency display options — thanks @StephenBrown2
- [#5753](https://github.com/actualbudget/actual/pull/5753) Extend report end date to the latest transaction date — thanks @csenel
- [#5762](https://github.com/actualbudget/actual/pull/5762) Add quiet mode to API — thanks @matt-fidd
- [#5766](https://github.com/actualbudget/actual/pull/5766) Mobile rules page - set min width for value editor — thanks @MatissJanis
- [#5775](https://github.com/actualbudget/actual/pull/5775) Add limit type template for use in future template GUI — thanks @youngcw
- [#5776](https://github.com/actualbudget/actual/pull/5776) Mobile payees - clicking takes to appropriate pages — thanks @MatissJanis

#### Bugfix

- [#5414](https://github.com/actualbudget/actual/pull/5414) Improved the handling of schedules that have the same payee, amount, account, and date when posted by the schedule automatically or manually via the previews. — thanks @Triscal
- [#5572](https://github.com/actualbudget/actual/pull/5572) Remove auto-scrolling behavior when editing split transactions on mobile — thanks @e13h
- [#5622](https://github.com/actualbudget/actual/pull/5622) Fix range calculator on the MonthPicker component — thanks @itsbekas
- [#5696](https://github.com/actualbudget/actual/pull/5696) Fix issue where marking existing transactions as transfer switches the date and notes of the two transactions — thanks @Nalin-Gupta
- [#5706](https://github.com/actualbudget/actual/pull/5706) Fixes detailedAccounts that might me null or undefined with some Italian Banks (Widiba, Poste, Intesa) — thanks @mauroartizzu
- [#5734](https://github.com/actualbudget/actual/pull/5734) Change account menu popover width to minWidth to accommodate different text lengths when switching languages — thanks @jgeneaguilar
- [#5735](https://github.com/actualbudget/actual/pull/5735) Exclude hidden categories from "Copy last month's budget" when copying whole month — thanks @mgibson-scottlogic
- [#5736](https://github.com/actualbudget/actual/pull/5736) Force the display of the 'Schedules transaction' badge on a single line — thanks @milanalexandre
- [#5738](https://github.com/actualbudget/actual/pull/5738) Fixes Spending Card crash — thanks @misu-dev
- [#5752](https://github.com/actualbudget/actual/pull/5752) Fix scrolling inside modals on iOS 26 — thanks @matt-fidd
- [#5759](https://github.com/actualbudget/actual/pull/5759) Fix timestamp error when shutting down API with no budget loaded — thanks @matt-fidd
- [#5760](https://github.com/actualbudget/actual/pull/5760) Improve cleanup when opening multiple budgets through the API — thanks @matt-fidd
- [#5761](https://github.com/actualbudget/actual/pull/5761) Optimise the way payee information is fetched. — thanks @thromer
- [#5765](https://github.com/actualbudget/actual/pull/5765) Translations of category labels in the TransactionEdit component (mobile) — thanks @milanalexandre
- [#5777](https://github.com/actualbudget/actual/pull/5777) Translated ‘(No payee)’ for a scheduled transaction — thanks @milanalexandre
- [#5779](https://github.com/actualbudget/actual/pull/5779) Ensure file upload size limits are respected when syncing files — thanks @matt-fidd

#### Maintenance

- [#5648](https://github.com/actualbudget/actual/pull/5648) Add issue types for bug reports and feature requests in GitHub issue templates. — thanks @MatissJanis
- [#5662](https://github.com/actualbudget/actual/pull/5662) Fix version bump logic to work if the month has rolled over — thanks @jfdoming
- [#5684](https://github.com/actualbudget/actual/pull/5684) Remove usage of a raw variable in Account component — thanks @joel-jeremy
- [#5685](https://github.com/actualbudget/actual/pull/5685) Remove usage of a raw variable in AccountAutocomplete component — thanks @joel-jeremy
- [#5686](https://github.com/actualbudget/actual/pull/5686) Remove usage of a raw variable in CategoryAutocomplete component — thanks @joel-jeremy
- [#5687](https://github.com/actualbudget/actual/pull/5687) Remove usage of a raw variable in PayeeAutocomplete component — thanks @joel-jeremy
- [#5690](https://github.com/actualbudget/actual/pull/5690) Optimize usage of useScrollListener and useTransactionsSearch — thanks @joel-jeremy
- [#5695](https://github.com/actualbudget/actual/pull/5695) Fix local dockerfile build memory allocation — thanks @MikesGlitch
- [#5707](https://github.com/actualbudget/actual/pull/5707) Bump vite from 6.3.5 to 6.3.6 — thanks @matt-fidd
- [#5713](https://github.com/actualbudget/actual/pull/5713) Update Electron to the latest stable version — thanks @MikesGlitch
- [#5714](https://github.com/actualbudget/actual/pull/5714) Remove `BANKS_WITH_LIMITED_HISTORY` override array for GoCardless — thanks @matt-fidd
- [#5718](https://github.com/actualbudget/actual/pull/5718) Remove usage of raw variables in renders — thanks @joel-jeremy
- [#5750](https://github.com/actualbudget/actual/pull/5750) Optimize scroll provider and replace usage of debounce package with lodash's debounce — thanks @joel-jeremy
- [#5770](https://github.com/actualbudget/actual/pull/5770) TypeScript: move ImportTransactionsModal to ts — thanks @MatissJanis

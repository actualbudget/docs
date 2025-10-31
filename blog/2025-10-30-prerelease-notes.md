---
title: Pre-Release 25.11.0
description: New pre release of Actual.
date: 2025-10-30T00:00
slug: prerelease-notes
tags: [announcement, release]
hide_table_of_contents: false
authors: matt-fidd
---

<!--truncate-->

**Docker tag: edge**

Version: v25.11.0

#### Features

- [#4603](https://github.com/actualbudget/actual/pull/4603) Add `delete transaction` rule action — thanks @lelemm, @youngcw, & @matt-fidd
- [#5639](https://github.com/actualbudget/actual/pull/5639) Adds currency display to the rules — thanks @misu-dev
- [#5641](https://github.com/actualbudget/actual/pull/5641) Add option to 'trim intervals' to remove empty start/end intervals on custom reports — thanks @MikesGlitch
- [#5784](https://github.com/actualbudget/actual/pull/5784) Introduce a Workbox-based service worker for enhanced plugin support and caching functionality. — thanks @lelemm
- [#5785](https://github.com/actualbudget/actual/pull/5785) Introduce system-wide feature flag system for managing frontend plugins. — thanks @lelemm
- [#5848](https://github.com/actualbudget/actual/pull/5848) Add LKR and CRC currencies — thanks @hasathcharu
- [#5907](https://github.com/actualbudget/actual/pull/5907) Adds currency display to the schedules — thanks @misu-dev
- [#5939](https://github.com/actualbudget/actual/pull/5939) Add a Formula card and Formula for rules for enhanced report generation and rules. — thanks @lelemm
- [#5954](https://github.com/actualbudget/actual/pull/5954) Changing the desktop app inner executable from desktop-electron to actual — thanks @MikesGlitch
- [#5978](https://github.com/actualbudget/actual/pull/5978) Add bank sync settings to mobile — thanks @matt-fidd

#### Enhancements

- [#5747](https://github.com/actualbudget/actual/pull/5747) Align amount conversion utilities between api and loot-core — thanks @StephenBrown2
- [#5797](https://github.com/actualbudget/actual/pull/5797) Set initial number formats based on currency selection — thanks @StephenBrown2
- [#5808](https://github.com/actualbudget/actual/pull/5808) show full decimals while editing regardless of hide decimals setting — thanks @csenel
- [#5824](https://github.com/actualbudget/actual/pull/5824) Mobile payees - swipe to delete — thanks @MatissJanis
- [#5838](https://github.com/actualbudget/actual/pull/5838) Add average per year calculation to the summary report — thanks @matt-fidd
- [#5847](https://github.com/actualbudget/actual/pull/5847) Hide desktop app menu by default & move menu items to app for consistency with Web. — thanks @MikesGlitch
- [#5850](https://github.com/actualbudget/actual/pull/5850) Use remark plugin to support GFM in the Text widget in report. — thanks @gdufay
- [#5869](https://github.com/actualbudget/actual/pull/5869) Added Argentinian Peso currency symbol — thanks @rast110e5
- [#5871](https://github.com/actualbudget/actual/pull/5871) Add swipe-to-delete functionality for mobile rules with undo support in the UI. — thanks @MatissJanis
- [#5876](https://github.com/actualbudget/actual/pull/5876) Added support for Uzbek Soum (UZS). — thanks @Ilyos Khurozov
- [#5899](https://github.com/actualbudget/actual/pull/5899) Mobile rules: add virtualizer to the list for improved performance — thanks @MatissJanis
- [#5904](https://github.com/actualbudget/actual/pull/5904) Mobile payees: add list virtualization — thanks @MatissJanis
- [#5906](https://github.com/actualbudget/actual/pull/5906) Mobile rules: add undo notifications — thanks @MatissJanis
- [#5914](https://github.com/actualbudget/actual/pull/5914) fix Cetelem bank transactions: Sign of transaction amount needs to be flipped for Cetelem Black credit cards — thanks @andreparames
- [#5921](https://github.com/actualbudget/actual/pull/5921) Mobile transactions: add virtualizer to the list for improved performance — thanks @MatissJanis
- [#5924](https://github.com/actualbudget/actual/pull/5924) Dashboard: Update default dashboard layout with more comprehensive widgets — thanks @MatissJanis
- [#5925](https://github.com/actualbudget/actual/pull/5925) Enables access to the account balance within rule templates. — thanks @StephenBrown2
- [#5941](https://github.com/actualbudget/actual/pull/5941) Desktop: align onboarding form element sizes — thanks @MatissJanis
- [#5943](https://github.com/actualbudget/actual/pull/5943) Improve file decryption modal design and update button labels for better user clarity. — thanks @MatissJanis
- [#5947](https://github.com/actualbudget/actual/pull/5947) Add support for arm64 AppImage — thanks @MikesGlitch
- [#5948](https://github.com/actualbudget/actual/pull/5948) Remove sensitive data logging from sync-server — thanks @MatissJanis
- [#5958](https://github.com/actualbudget/actual/pull/5958) Adjust account panel borders for a cohesive appearance by modifying item border styling. — thanks @MatissJanis
- [#5965](https://github.com/actualbudget/actual/pull/5965) Update desktop app icons with the new styles — thanks @MikesGlitch
- [#6033](https://github.com/actualbudget/actual/pull/6033) Update the Flathub store page description and screenshots — thanks @MikesGlitch

#### Bugfix

- [#5807](https://github.com/actualbudget/actual/pull/5807) fix losing transaction amount decimals on update while "hide decimal places" setting is active — thanks @csenel
- [#5815](https://github.com/actualbudget/actual/pull/5815) Show empty data points on line graph reports — thanks @matt-fidd
- [#5842](https://github.com/actualbudget/actual/pull/5842) Mobile Payees - add loading indicator to rules count label — thanks @MatissJanis
- [#5870](https://github.com/actualbudget/actual/pull/5870) Run schedule rules regardless of posted date — thanks @matt-fidd
- [#5878](https://github.com/actualbudget/actual/pull/5878) Fix service worker issues in development mode by improving directory handling and symlink creation. — thanks @lelemm
- [#5891](https://github.com/actualbudget/actual/pull/5891) Fix the Authentik external help URL for OIDC — thanks @claudiospizzi
- [#5896](https://github.com/actualbudget/actual/pull/5896) Fix api failing to import helper functions from loot-core — thanks @matt-fidd
- [#5900](https://github.com/actualbudget/actual/pull/5900) Fix overlapping header texts on mobile — thanks @qunm00
- [#5901](https://github.com/actualbudget/actual/pull/5901) Fix hotkey warning in browser console — thanks @matt-fidd
- [#5911](https://github.com/actualbudget/actual/pull/5911) Adds functionality to maintain sort order when duplicating a split transaction and generate new valid sort order for duplicate transactions. — thanks @guizaa
- [#5918](https://github.com/actualbudget/actual/pull/5918) budgetfilesSlice: Fix fallback sorting of files by ID — thanks @db-src
- [#5926](https://github.com/actualbudget/actual/pull/5926) Do not allow clicking 'delete from all devices' if server is offline — thanks @MatissJanis
- [#5928](https://github.com/actualbudget/actual/pull/5928) Fix service worker to generate a new hash with every build for better caching. — thanks @lelemm
- [#5940](https://github.com/actualbudget/actual/pull/5940) Budget selection page: do not show refresh button for non-server users — thanks @MatissJanis
- [#5963](https://github.com/actualbudget/actual/pull/5963) Fix notification display for updating the service worker in the application. — thanks @lelemm
- [#5967](https://github.com/actualbudget/actual/pull/5967) Fix GoCardless institutions with special continuous access EUA behavior — thanks @matt-fidd
- [#5970](https://github.com/actualbudget/actual/pull/5970) Fix budget crash when transactions have dates before year 2000 — thanks @MatissJanis
- [#5980](https://github.com/actualbudget/actual/pull/5980) Fix slow performance in import csv modal — thanks @matt-fidd
- [#5981](https://github.com/actualbudget/actual/pull/5981) Fix report date dropdowns not including current period — thanks @matt-fidd
- [#5987](https://github.com/actualbudget/actual/pull/5987) Fix InitialFocus not working on some fields — thanks @joel-jeremy
- [#5994](https://github.com/actualbudget/actual/pull/5994) Transaction table: add space between searchbar and loading icon — thanks @MatissJanis
- [#6005](https://github.com/actualbudget/actual/pull/6005) Custom reports - persist "show_uncategorized" in DB — thanks @MatissJanis
- [#6007](https://github.com/actualbudget/actual/pull/6007) Fix inconsistent widths of bank sync field mapping selects on mobile — thanks @matt-fidd
- [#6010](https://github.com/actualbudget/actual/pull/6010) Fix sync server file download when files are in .config directory on linux — thanks @MikesGlitch
- [#6020](https://github.com/actualbudget/actual/pull/6020) Allows selection of quicken (qfx) files for import on safari mobile — thanks @dbequeaith

#### Maintenance

- [#5804](https://github.com/actualbudget/actual/pull/5804) Mobile rules - refactor to use react-aria GridList — thanks @MatissJanis
- [#5812](https://github.com/actualbudget/actual/pull/5812) Add more translations to enhance multilingual support across the application. — thanks @lelemm
- [#5818](https://github.com/actualbudget/actual/pull/5818) Bump dependencies in eslint-plugin-actual package — thanks @matt-fidd
- [#5819](https://github.com/actualbudget/actual/pull/5819) Bump dependencies in sync-server package — thanks @matt-fidd
- [#5827](https://github.com/actualbudget/actual/pull/5827) Expand eslint untranslated string rule — thanks @matt-fidd
- [#5837](https://github.com/actualbudget/actual/pull/5837) Refactor rules framework — thanks @matt-fidd
- [#5843](https://github.com/actualbudget/actual/pull/5843) Add retries into the initialisation of the desktop app backend for a better dev-experience — thanks @MikesGlitch
- [#5853](https://github.com/actualbudget/actual/pull/5853) Fix React compiler behaviour in dev mode — thanks @jfdoming
- [#5857](https://github.com/actualbudget/actual/pull/5857) Upgrade electron builder in prep for Liquid Glass icons — thanks @MikesGlitch
- [#5858](https://github.com/actualbudget/actual/pull/5858) Bump non-react dependencies in desktop-client — thanks @matt-fidd
- [#5864](https://github.com/actualbudget/actual/pull/5864) Bump various build dependencies — thanks @matt-fidd
- [#5865](https://github.com/actualbudget/actual/pull/5865) Bump react dependencies — thanks @matt-fidd
- [#5873](https://github.com/actualbudget/actual/pull/5873) Update link to documentation in docker-compose.yml — thanks @acolombo11
- [#5885](https://github.com/actualbudget/actual/pull/5885) Bump yarn to 4.10.3 — thanks @matt-fidd
- [#5886](https://github.com/actualbudget/actual/pull/5886) Bump various dependencies — thanks @matt-fidd
- [#5888](https://github.com/actualbudget/actual/pull/5888) Bump loot-core dependencies — thanks @matt-fidd
- [#5897](https://github.com/actualbudget/actual/pull/5897) Trigger edge Docker image builds on every push to master branch instead of using cron job — thanks @MatissJanis
- [#5903](https://github.com/actualbudget/actual/pull/5903) Upgrade recharts to v3 — thanks @matt-fidd
- [#5905](https://github.com/actualbudget/actual/pull/5905) Add end-to-end tests for the mobile Payees page, verifying UI and interactions. — thanks @MatissJanis
- [#5912](https://github.com/actualbudget/actual/pull/5912) Allow size-compare action to run immediately after artifact upload — thanks @jfdoming
- [#5935](https://github.com/actualbudget/actual/pull/5935) Update flathub platform and sdk — thanks @MikesGlitch
- [#5936](https://github.com/actualbudget/actual/pull/5936) Upgrade Electron to 38.3.0 — thanks @matt-fidd
- [#5937](https://github.com/actualbudget/actual/pull/5937) Drop support for Node.js v20 — thanks @matt-fidd
- [#5942](https://github.com/actualbudget/actual/pull/5942) Add AGENTS.md file for Cursor, Windsurf, Claud, etc. - AI agents — thanks @MatissJanis
- [#5952](https://github.com/actualbudget/actual/pull/5952) Refactor VRT workflow into two stages for improved testing and patch validation. — thanks @MatissJanis
- [#5964](https://github.com/actualbudget/actual/pull/5964) Refactor test execution to use lage task runner for improved monorepo test orchestration with parallel execution, smart caching, and better CI performance. — thanks @MatissJanis
- [#5966](https://github.com/actualbudget/actual/pull/5966) Update mobile e2e tests to improve test reliability. — thanks @MatissJanis
- [#5971](https://github.com/actualbudget/actual/pull/5971) Update react compiler to v1 — thanks @joel-jeremy
- [#5982](https://github.com/actualbudget/actual/pull/5982) Bump vite version — thanks @matt-fidd
- [#5983](https://github.com/actualbudget/actual/pull/5983) Bump various dependencies — thanks @matt-fidd
- [#5989](https://github.com/actualbudget/actual/pull/5989) Bump Alpine docker image to 3.22 which also bumps node to 22.16.0 — thanks @albus522

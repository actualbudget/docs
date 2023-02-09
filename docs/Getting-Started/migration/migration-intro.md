---
title: "Migration Overview"
---

:::note
[Click here](simple-sync) if you are looking for the steps to migrate from "full sync" to (the more reliable) "simple sync" method.
:::


Keeping your existing transaction history is important. If you already use a different app, you probably want to migrate it over into Actual.

Right now, only YNAB4 is officially supported. However, the [API](/developers/API/) allows anyone to write a custom importer. We will work with the community to help write other importers soon.

## Migration from the old Desktop App
The Desktop app that was tied to the old hosted instance of ActualBudget does not have the export button which is available in the Web version and in newer versions of the Desktop app (see https://github.com/actualbudget/actual/pull/71). To export your data, log in to the Web version at https://app.actualbudget.com. Here you can export your data using Settings > Export Data. The export can be imported into newer versions of the Web app and Desktop app.

## Migration from other apps

[YNAB4](ynab4) is the only built-in importer right now. We're hoping the community can help build other importers on top of the [API](/developers/API/).

:::note
There are guides [here](../../Advanced/advanced-intro) for some advanced migration tasks.
:::

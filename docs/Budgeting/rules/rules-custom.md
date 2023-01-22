---
title: 'Supercharge your Budget'
---

This page has examples of custom rules that some of our users have found useful for their own budgets.  If you have any custom rules you're proud of, let the Discord group know or submit an issue or PR to the Actual Documentation GitHub repository.

**Q:  How do I set a default account when I add transactions?**

**A:**  Set a **Pre** rule to check for an empty account field. When entering a transaction in the "All Accounts" ledger or from the ledger of a Category listing, your preferred default account will be auto filled.

![](/img/custom-rules-1.png)

**Q:  I have accounts that a can be considered to clear at the moment of purchase.  How can I automatically clear accounts like Cash or Venmo?**

**A:**  Set a **Post** rule to to check for your account where instant transactions can be made and set the action to "cleared" and tick the checkbox.  Cash or Venmo are typical examples of this type of account.  Any time a transaction is added to the accounts listed in this rule will automatically get a cleared state from now on.

![](/img/custom-rules-2.png)
# Tags

Transaction can be tagged through its notes in order to flag them and identify them easily in the table.

An example would be to tag all transaction for a trip with a tag like `#Vacation2025`

## Syntax

A tag is a string prefixed by the `#` character, it can be set anywhere withing the *Notes* field of a transaction.

It is possible to have multiple tags for a single transaction.

To use the `#` character in the *Notes* field without tagging, you can escape it by inputting it twice: `##do-not-tag-this`.

![](/static/img/tags/input.png)

![](/static/img/tags/input-result.png)

## Filter Transactions

To view transaction that uses a given tag you can either:
- click on the tag in the transactions table.
- use the `has tags` filter on the *Notes* field:

![](/static/img/tags/filter.png)



## Manage Tags

By default tags use the default purple brand color of actual.  
If you use a lot of tags, it can be useful to customize tags color. This can be achieved through the dedicate *Tags* page accessible via the side bar.

![](/static/img/tags/manage.png)

In this page you can:
- **Add New** tag, whether any transaction with this tag already exists or not.
- **Find Existing Tags**, which will search tags within transactions and add them to the list of managed tags.
- Change the color of any tag (including the default color) and/or add a description for you to remember what you use it for.
- **View Transactions** using a given tag.

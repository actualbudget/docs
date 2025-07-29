# Tags

Transactions can be tagged through their notes in order to flag them and identify them easily in the table.  
An example would be to tag all transaction for a trip with a tag like `#Vacation2025`

## Syntax

A tag is a string of any characters (except `#`) prefixed by the `#` symbol, it can be added anywhere within the *Notes* field of a transaction.  
It is possible to have multiple tags for a single transaction.  
Tags are case-sensitive, meaning that `#tag` and `#TAG` are different.  
To use the `#` symbol in the *Notes* field without tagging, you can escape it by inputting it twice: `##do-not-tag-this`.

![](/static/img/tags/input.png)

![](/static/img/tags/input-result.png)

## Filter Transactions

To view transactions with a given tag you can either:
- click on the colored tag in the transactions table.
- use the `has tags` filter on the *Notes* field:

![](/static/img/tags/filter.png)

## Manage Tags

By default tags use the purple brand color of Actual.  
If you use a lot of tags, it can be useful to customize tags color. This can be achieved through the dedicated *Tags* page accessible via the side bar.

![](/static/img/tags/manage.png)

On this page you can:
- **Add New** tags, it doesn't matter whether any transactions with this tag already exist or not.
- **Find Existing Tags**, which will search for tags already used within transactions and add them to the list of managed tags.
- Change the color of any tag and/or add a description.
- **View Transactions** that use the given tag.

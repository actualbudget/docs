# Budget Templates

:::warning
This is an **experimental feature**. That means we’re still working on finishing it. There may be bugs, missing functionality or incomplete documentation, and we may decide to remove the feature in a future release. If you have any feedback, please [open an issue](https://github.com/actualbudget/actual/issues) or post a message in the Discord.
:::
:::warning
All functionality described here may not be available in the latest stable release. Use the `edge` images for the latest implementation.
:::

Budget templates allow you to automate your budgeting step every month.
For example, a template like `#template 100` in a Food category will automatically budget $ 100 in your Food category when templates are run.
With budget templates there is no need to manually fill in each category each month.
With one click you can fill in your entire budget based on the templates you have added.
Create a template by adding a note to a category and adding a line that begins with `#template` or `#goal`.

![](/img/goal-template/goal-template-1.png)

You are welcome to have other lines in your note, but the `#template`/`#goal` line must match the template syntax.

### Apply the Templates

There are a few ways to apply your templates.

#### Apply all templates

In the budget month menu you will see the following options:

![](/img/goal-template/goal-template-2.png)

**Check templates** will test all `#template\#goal` lines for proper syntax.

**Apply budget template** will run all templates in categories that currently have 0 budgeted.
This will leave any existing budget amounts intact.

**Overwrite with budget template** will fill in all budget cells using the templates and ignore any already existing budget amounts.
This is the recommended method if you are using template priorities.

#### Apply only specific templates

You can also apply selections of templates if you want.

**Single Category**: Use the option shown below from the budget field drop down to apply templates to just that category.
This will overwrite any existing budgeted amount.

# ADD Picture here

**Apply templates to a single category group**: Use the option shown below from the category group drop down to apply all templates to categories in a specific group.
This will overwrite any existing budgets in the categories in the group.

# ADD Picture here

### Goal Indicators
After having run the templates in a given month and category, the status of a respective category goal will be indicated as a text color of the category balance.
The image below shows an example of categories in the following states: normal (no goal set), empty (no goal set), goal met(green), goal not met(orange), and a negative balance(red).

![](/img/goal-template/templates-colors.png)

#### Goal Indicator Information
If you hover over the balance value in a templated category, a tooltip will appear with info on the status us that category with respect to its template.

# ADD Picture here

## Available Templates

There are many types of templates you can use to tailor how categories get filled to match your personal budgeting needs.

### Simple Type
The simple template type is the most basic type of template.
The base template will budget the amount you ask it to.
Simple!
This template also has a few variations making it likely the most used template out of the available options.

Below is an example of how it works.
The template budgets just what you ask, no matter how much the respective category has in its balance.

<!-- prettier-ignore -->
|Syntax|Budgeted Amount|
|---|:---:|
|#template 50| $ 50 |

There is also a useful variation of a simple template.
This varation will put a **limit** on how much the balance of a category can be that month.
Here are some examples of how this is used

<!-- prettier-ignore -->
|Syntax| Previous Balance | Budgeted Amount | New Balance |
|---|:---:| :---: |:---:|
|#template 50 up to 100| $ 80 | $ 20 | $ 100 |
|#template 50 up to 100| $ 20 | $ 50 | $ 70 |
Isn't that neat!
This is especially useful for budget categories that have month to month variation in spending such as groceries.
You can budget the same amount per month, but save up from one month to the next without having to worry about building up more funds than you need.

The last variation of the simple template is sometimes referred to as a "refill".
With this style the template budgets whatever it takes to hit a "full" amount.
Here is how it works:

<!-- prettier-ignore -->
|Syntax| Previous Balance | Budgeted Amount | New Balance |
|---|:---:| :---: |:---:|
|#template up to 150| $ 10 | $ 140  | $ 150 |
|#template up to 150| $ -20 | $ 170  | $ 150 |
Cool, right! This is another way to gracefully handle categories that have month to month variation.
This will always give you the same amount available each month no matter what you spend the previous month and not ever build up more funds than you need.
This variation along with the previous variation, are probably the most used templates.
They are simple enough to use easily, but are robust enough to make budgeting much simpler.


## All Variations
There is more flexibility with the limit part of the template.
By default, the limit (the "up to" part of the template) is based per month.
You can modify the limit to be per week or per day if that matches your needs better.
You can also modify the limit to not ever remove funds over your limit.
This can be useful if you get refunds or reimbursements that you would like to have remain inside a category even if over your limit.
Below is examples of these different variations of simple templates.

<!-- prettier-ignore -->
|Syntax|Description|Example Application|
|---|---|---|
|#template 50|Budget 50 each month|Regular monthly bills, such as internet|
|#template 50 up to 300|Budget 50 each month up to a maximum of 300|Funding rainy day categories, such as replacement shoes and bicycle repairs
|#template up to 150|Budget up to 150 each month, and remove extra funds over 150|Variable expenses, such as petrol and groceries|
|#template up to 150 hold|Budget up to 150 each month, but retain any funds over 150 |Variable expenses that may get refunds or reimbursements|
|#template up to 5 per day |Budget up to 5 per day that month, and remove extra funds | Setting a daily coffee budget|
|#template up to 100 per week starting 2024-10-07 |Budget 100 per week starting on Mondays, and remove extra funds| Setting a weekly grocery budget |

# Old Table
<!-- prettier-ignore -->
|Syntax|Description|Example Application|
|---|---|---|
|#template 500 by 2025-03|Break down large, less-frequent expenses into manageable monthly expenses|Saving for a replacement car in a few years
|#template 500 by 2025-03 repeat every 6 months|Break down large, less-frequent expenses into manageable monthly expenses|Biannual credit card fees
|#template 500 by 2025-03 repeat every year|Break down large, less-frequent expenses into manageable monthly expenses|Annual insurance premium
|#template 500 by 2025-03 repeat every 2 years|Break down large, less-frequent expenses into manageable monthly expenses|Domain name renewal|
|#template 500 by 2024-12 spend from 2024-03|Budget 500 by December. Any spending between March and December is OK.|Christmas presents, overseas holiday, or any other expenses that I will be partially paying for before the target period ends.|
|#template 500 by 2024-12 spend from 2024-03 repeat every year| |	
|#template 500 by 2024-12 spend from 2024-03 repeat every 2 years| |	
|#template 10 repeat every week starting 2025-01-03|Budget 10 a week|
|#template 10 repeat every week starting 2025-01-03 up to 80|Budget 10 a week, up to a maximum of 80|
|#template 10 repeat every 2 weeks starting 2025-01-04|Budget 10 fortnightly|
|#template 10 repeat every 9 weeks starting 2025-01-04 up to 30|Budget 10 every 9 weeks, up to a maximum of 30|
|#template 15% of all income|Budget 15% of all income categories| Using a "pay yourself first" strategy|
|#template 10% of Paycheck|Budget 10% of the "Paycheck" income category| Using a "pay yourself first" strategy, but have income categories you want to ignore|
|#template 15% of previous all income|Budget 15% of all income categories using last month's income|Using a "pay yourself first" strategy in conjunction with a "month ahead" strategy |
|#template 10% of previous Paycheck|Budget 10% of last month's "Paycheck" income category| Using a "pay yourself first" strategy in conjunction with a "month ahead" strategy, but have income categories you want to ignore|
|#template 12% of available funds|Budget 12% of your "To Budget" funds available at the current priority level| |
|#template schedule {SCHEDULE NAME}|Fund upcoming scheduled transactions over time|Monthly schedules, or larger non-monthly scheduled transactions|
|#template schedule full {SCHEDULE NAME}|Fund upcoming scheduled transaction only on needed month| Small schedules that are non-monthly|
|#template average 6 months | Budget the average amount spent over the last 6 months. Can set the number to any number > 0. Matches the existing option on the budget page but with flexible month ranges |
|#template copy from 12 months ago | Budget the same amount as was budgeted 12 months ago. Number of months is adjustable | Your power bill fluctuates throughout the year, but is about the same in equivalent months between years. |
|#template remainder | Add all remaining funds to this category| See the [Remainder Template](#remainder-template) Section for info |
|#goal 1000         | Set a long term goal instead of a monthly goal | See the [Goal Directive](#goal-directive) Section for info |

### Notes

- Currency symbol is optional, `#template $50` and `#template 50` are the same.
- As mentioned above, currently `$` is the only currency symbol supported.
- Number formats that use comma for the decimal separator are not supported (e.g., 123,45). You must use 123.45.
- Thousands separators are not supported (e.g., 1,234). You must use 1234.
- {SCHEDULE NAME} is defined in the **Schedules** editor. **Take great care to copy across these schedule names EXACTLY**, without braces.
- By default templates do not consider available funds when being applied. Use template priorities to not budget more than is available.
- The `hold` flag can be added to any goal that uses the `up to` key word.
- A single category with two templates that use `up to` is not supported.
- If any single template contains an `up to`, the whole category will be subject to that limit even if there are later templates and priorities. This excludes remainders which will run after the limit is applied.

### Multiple Template Lines

You can add multiple `#template` lines for a single category note. Each line will be added together.

For examples:

**Budget 200/month for 3 months and 400/month for the next 3 months**

    #template 600 by 2024-06 repeat every 6 months

    #template 1200 by 2024-09 repeat every 6 months

**Streaming Services: 42.97**

    Netflix
    #template 24.99
    Disney Plus
    #template 9.99
    Amazon Prime
    #template 7.99

**100 every month and an additional 10 every fortnight**

    #template 10 repeat every 2 weeks starting 2025-01-04
    #template 100

## Template Priorities

Templates can be given a priority flag to change the order that the templates get applied to your budget. Set a priority by adding `-X` to the `#template` flag. EX `#template-4` will be priority level 4. Any template with a priority other than 0 will not apply more funds than are available.

### Notes

- Lower priority values get run first. EX 0 is run first, then 1, then 2, etc.
- A `#template` with no priority flag defaults to priority 0 and is the same as a standard template.
- Negative priorities are not allowed and will result in the template being skipped.
- Template application order is based on the database order, not the view order. To guarantee a specific fill order use separate priorities for each category.
- If you have multiple `schedule` or `by` template lines in a single category, they will be forced to match the same priority level as the line run first.
- It is recommended to use the "overwrite with budget template" option when applying templates if you use priorities.

    - **Expected budgeted amount is 200** 
    **Expected maximum category balance is 200**

        #template 300
        #template-1 150 up to 200
       
    - **Expected budgeted amount is 450** 
    **No maximum category balance exists**

        #template 150 up to 500
        #template-1 300

## Remainder Template

The remainder template is run differently to the other templates. Any remainder templates will be forced to run last in their own pass. This way the amount left to budget is whatever remains after all other templates have had a chance to run. Below are a few considerations when using the remainder template:

- You can use as many remainder templates as you want.
- Remainder templates don't have a priority as they are always run last.
- The remainder template supports weights to control the distribution of funds across multiple categories. See the examples on how this is done.
- If no weight is provided, the weight will be defaulted to 1.
- The budgeted amount is calculated as `budgeted_amount=available_funds/sum_of_weights*category_weight`.

### Examples

All of the examples below use the case of 100 leftover when the remainder pass is run.

1. Add all remaining funds to a single category.

| Category | Template line       | Amount applied |
| -------- | ------------------- | -------------- |
| Savings  | #template remainder | 100            |

2. Split funds evenly between two categories.

| Category      | Template line       | Amount applied |
| ------------- | ------------------- | -------------- |
| Savings       | #template remainder | 50            |
| Vacation Fund | #template remainder | 50            |

3. Split funds with one category receiving extra.

| Category      | Template line         | Amount applied |
| ------------- | --------------------- | -------------- |
| Savings       | #template remainder 2 | 66.66         |
| Vacation Fund | #template remainder   | 33.34         |

4. Spread funds over many categories.

| Category        | Template line         | Amount applied |
| --------------- | --------------------- | -------------- |
| Savings         | #template remainder 3 | 50            |
| Vacation Fund   | #template remainder   | 16.66         |
| Investment Fund | #template remainder 2 | 33.34         |

## Goal Directive

This option is unique enough to warrant its own directive `#goal` instead of the standard `#template` option.
The `#goal` option overrides how the goal indicator typically functions.
In the standard `#templates`, the goal indication colors are based on the current month's budgeted value.
When using the `#goal` option, the indication is based on the total balance.
This shifts the indication to a long-term goal you are saving up to instead of just the current monthly portion.
A few examples have been given to illustrate this difference.

### Notes
* The `#goal` templates are run the same way as the regular `#templates` but use the month options or the category budget options.
* If there is a `#goal` directive in a category, the indicator for that category will be based on the total balance compared to the amount set in the `#template` line.
* The `#goal` directive will not budget any funds, and funds budgeted by hand will not get reset by running templates.
* A `#goal` line can be stacked with `#templates` to automatically budget the category (via the templates) but override how the category goal is indicated (the goal line).
* If `#templates` include a `#goal`, the budgeted amount will get overwritten when using the "overwrite with budget template" button.
* There is no priority on a `#goal` line.

### Examples
All examples assume that 400 was carried over from the previous month

####  1. I'm saving for a large purchase, but I'm still determining how much I can allocate each month.
In this case, a balance greater than or equal to 500 will set the balance green, marking a met goal.
If you run the template, you get the following:

| Template Line(s) | Amount budgeted | Balance(color) |
|:---|:--:|---:|
| `#goal 500` | 0 | 400(yellow) |

If you were able to budget 100 this month, you would then hit your goal and get a green indication.

| Template Line(s) | Amount budgeted | Balance(color) |
|:---|:--:|---:|
| `#goal 500` | 100 | 500(green) |

#### 2. I'm saving for a purchase, but I will budget 50 a month until I reach my goal.
In this example, a template is used to automatically budget 50 into the category when templates are run.
The `#goal` line will override the goal indication from the `#template` line, and only go green when a balance of 500 is reached.
If you run templates, you get the following:

| Template Line(s) | Amount budgeted | Balance(indication color) |
|:---|:---:|---:|
| `#template 50` `#goal 500` | 50 | 450(yellow) |

If you have some extra funds after templates are run and can budget that last 50, you get the following:

| Template Line(s) | Amount budgeted | Balance(indication color) |
|:---|:---:|---:|
| `#template 50` `#goal 500` | 100 | 500(green) |



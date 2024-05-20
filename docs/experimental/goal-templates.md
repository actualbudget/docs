# Budget Goal Templates

:::warning
This is an **experimental feature**. That means we’re still working on finishing it. There may be bugs, missing functionality or incomplete documentation, and we may decide to remove the feature in a future release. If you have any feedback, please [open an issue](https://github.com/actualbudget/actual/issues) or post a message in the Discord.
:::
:::warning
All functionality described here may not be available in the latest stable release. Use the `edge` images for the latest implementation.
:::

Create a template by adding a note to a category and adding a line that begins with `#template`.

![](/img/goal-template/goal-template-1.png)

You are welcome to have other lines in your note, but the #template line must match the syntax.

## How to use the templates

<!-- prettier-ignore -->
|Syntax|Description|Example Application|
|---|---|---|
|#template $50|Budget $50 each month|Regular monthly bills, such as internet|
|#template up to $150|Budget up to $150 each month, and remove extra funds over $150|Variable expenses, such as petrol and groceries|
|#template up to $150 hold|Budget up to $150 each month, but retain any funds over $150 |Variable expenses that may get refunds or reimbursements|
|#template $50 up to $300|Budget $50 each month up to a maximum of $300|Funding rainy day categories, such as replacement shoes and bicycle repairs
|#template $500 by 2025-03|Break down large, less-frequent expenses into manageable monthly expenses|Saving for a replacement car in a few years
|#template $500 by 2025-03 repeat every 6 months|Break down large, less-frequent expenses into manageable monthly expenses|Biannual credit card fees
|#template $500 by 2025-03 repeat every year|Break down large, less-frequent expenses into manageable monthly expenses|Annual insurance premium
|#template $500 by 2025-03 repeat every 2 years|Break down large, less-frequent expenses into manageable monthly expenses|Domain name renewal|
|#template $500 by 2024-12 spend from 2024-03|Budget $500 by December. Any spending between March and December is OK.|Christmas presents, overseas holiday, or any other expenses that I will be partially paying for before the target period ends.|
|#template $500 by 2024-12 spend from 2024-03 repeat every year| |	
|#template $500 by 2024-12 spend from 2024-03 repeat every 2 years| |	
|#template $10 repeat every week starting 2025-01-03|Budget $10 a week|
|#template $10 repeat every week starting 2025-01-03 up to 80|Budget $10 a week, up to a maximum of $80|
|#template $10 repeat every 2 weeks starting 2025-01-04|Budget $10 fortnightly|
|#template $10 repeat every 9 weeks starting 2025-01-04 up to 30|Budget $10 every 9 weeks, up to a maximum of $30|
|#template 15% of all income|Budget 15% of all income categories| Using a "pay yourself first" strategy|
|#template 10% of Paycheck|Budget 10% of the "Paycheck" income category| Using a "pay yourself first" strategy, but have income categories you want to ignore|
|#template 15% of previous all income|Budget 15% of all income categories using last month's income|Using a "pay yourself first" strategy in conjunction with a "month ahead" strategy |
|#template 10% of previous Paycheck|Budget 10% of last month's "Paycheck" income category| Using a "pay yourself first" strategy in conjunction with a "month ahead" strategy, but have income categories you want to ignore|
|#template 12% of available funds|Budget 12% of your "To Budget" funds| |
|#template schedule {SCHEDULE NAME}|Fund upcoming scheduled transactions over time|Monthly schedules, or larger non-monthly scheduled transactions|
|#template schedule full {SCHEDULE NAME}|Fund upcoming scheduled transaction only on needed month| Small schedules that are non-monthly|
|#template average 6 months | Budget the average amount spent over the last 6 months.  Can set the number to any number > 0.  Matches the existing option on the budget page but with flexible month ranges |
|#template remainder | Add all remaining funds to this category| See the [Remainder Template](#remainder-template) Section for info |

### Notes

- Currency symbol is optional, `#template $50` and `#template 50` are the same.
- Number formats that use comma for the decimal separator are not supported (eg, 123,45). You must use 123.45.
- Thousands separators are not supported (eg, 1,234). You must use 1234.
- {SCHEDULE NAME} is defined in the **Schedules** editor. **Take great care to copy across these schedule names EXACTLY**, without braces.
- By default templates do not consider available funds when being applied. Use template priorities to not budget more than is available.
- The `hold` flag can be added to any goal that uses the `up to` key word.
- A single category with two templates that use `up to` is not supported.
- If in a category there are multiple templates within the same priority level and one template uses the `up to` key word, all templates in that priority level will be limited to the maximum amount specified by `up to`.

### Multiple Template Lines

You can add multiple `#template` lines for a single category note. Each line will be added together.

For examples:

**Budget $200/month for 3 months and $400/month for the next 3 months**

    #template $600 by 2024-06 repeat every 6 months

    #template $1200 by 2024-09 repeat every 6 months

**Streaming Services: $42.97**

    Netflix
    #template $24.99
    Disney Plus
    #template $9.99
    Amazon Prime
    #template $7.99

**$120 in February 2022, $130 in March 2025**

    #template $10 repeat every 2 weeks starting 2025-01-04
    #template $100

### Template Priorities

Templates can be given a priority flag to change the order that the templates get applied to your budget. Set a priority by adding `-X` to the `#template` flag. EX `#template-4` will be priority level 4. Any template with a priority other than 0 will not apply more funds then are available.

#### Notes

- Lower priority values get run first. EX 0 is run first, then 1, then 2, etc.
- No priority flag defaults to priority 0 and is the same as a standard template.
- Negative priorities are not allowed and will result in the template being skipped.
- Template application order is based on the database order, not the view order.  To guarantee a specific fill order use separate priorities for each category
- If you have multiple `schedule` or `by` template lines in a single category, they will be forced to match the same priority level as the line run first.
- If the `up to` key words are used with a category that has multiple templates with different priorities, the lowest priority will take precedence because it is evaluated last as shown in the following examples.

    - **Expected budgeted amount is 200**  
    **Expected maximum category balance is 200**

        #template 300
        #template-1 150 up to 200
        
    - **Expected budgeted amount is 450**  
    **No maximum category balance exists**

        #template 150 up to 500
        #template-1 300

### Remainder Template

The remainder template is run differently to the other templates. Any remainder templates will be forced to run last in their own pass. This way the remaining budget is after all other templates have had a chance to run. Below are a few considerations when using the remainder template

- You can use as many remainder templates as you want
- Remainder templates don't have a priority as they are always run last
- The remainder template supports weights to control the distribution of funds across multiple categories. See the examples on how this is done.
- If no weight is provided, the weight will be defaulted to 1
- The budgeted amount is calculated as `budgeted_amount=available_funds/sum_of_weights*category_weight`

#### Examples

All the examples below use the case of $100 leftover when the remainder pass is run.

1. Add all remaining funds to a single category

| Category | Template line       | Amount applied |
| -------- | ------------------- | -------------- |
| Savings  | #template remainder | $100           |

2. Split funds evenly between two categories

| Category      | Template line       | Amount applied |
| ------------- | ------------------- | -------------- |
| Savings       | #template remainder | $50            |
| Vacation Fund | #template remainder | $50            |

3. Split funds with one category receiving extra

| Category      | Template line         | Amount applied |
| ------------- | --------------------- | -------------- |
| Savings       | #template remainder 2 | $66.66         |
| Vacation Fund | #template remainder   | $33.34         |

4. Spread funds over many categories

| Category        | Template line         | Amount applied |
| --------------- | --------------------- | -------------- |
| Savings         | #template remainder 3 | $50            |
| Vacation Fund   | #template remainder   | $16.66         |
| Investment Fund | #template remainder 2 | $33.34         |

## Apply the templates

To apply the goal templates you create, enable the feature in the Settings experimental section. When the feature is on, three new options will appear in the monthly budget actions list.

![](/img/goal-template/goal-template-2.png)

**Check templates** will test all template lines for proper syntax.

**Apply budget template** will only fill empty cells using the templates.

**Overwrite with budget template** will fill in all budget cells using the templates.

### Goal Indicators
After having run the templates in a given month the status of a respective category goal will be indicated as a text color of the category balance.  The image below shows an example of categories in the following states: normal (no goal set), zero (no goal set), goal met, goal not met, and a negative balance.

![](/img/goal-template/templates-colors.png)

---
title: Contributing to Actual Budget
---

So, you want to get stuck in an help out with existing issues in Actual Budget or develop a feature of your own, that is great and we really appreciate that. 
We have created this document to signpost you to some of the key areas that will be of interest when developing for Actual Budget. 

As always, if you need any help, want something clarifying, jump into the Discord and we will try our best to help you out. 

### The Project Layout

The layout of the codebase in Actual Budget takes a bit of getting used to and finding things at first can be a little tricky, we have put together a help document that shows the structure of the project, while this isn't 100% complete it will give you a good starting point for your development. 

### Working on existing issues

Existing issues are a good place to start especially if you are a first time contributor to Actual Budget, we have some issues labelled `good first issue` which are perfect for people who want to have a go at contributing. 

If you are more familiar with Actual Budget, the `help wanted` label should point you in the right direction of some of the issues we need help with. 

### Submitting an idea for something you want to work on

Okay, so you have an idea for something that you think would be great in Actual Budget, but how do you pitch it to the community so that all your hard work is not wasted?

To start submit a pull request with the implementation or if it's a larger feature - open a new issue so we can discuss it.

### Writing Good Release Notes

Create a Markdown file in the upcoming-release-notes directory of the repository you’re contributing to named after the PR number. The file should contain front matter with a category key (defining which header to put the entry under) and an authors key (defining the author of the entry). The body of the file should contain the changelog entry. Keep it short and clear — ideally one sentence, and also non-technical (unless the category is “Maintenance”). Copy-paste the template below to get started!

---
category: Features
authors: [YourGitHubUsername]
---

Add option to include exchange rate multiplier during import
Valid categories:

* `Features`: New features
* `Enhancements`: Improvements to existing features
* `Bugfix`: Bug fixes
* `Maintenance`: Internal changes that don’t directly affect users
The `authors` key should be an array with the GitHub usernames of the people who contributed to the PR. In most cases, this should just be you but you can add multiple people if needed.

Try to phrase your message as a command, e.g. "Add option to include exchange rate multiplier during import" rather than "Added option to include exchange rate multiplier during import” or "Adds option to include exchange rate multiplier during import." Generally your message should match the PR title, but you can change it if you think it’s more clear.


### The Design Strategy Of Actual

Actual Budget was designed to be sleek, clean and clutter free, by default there is a lot of empty space, this is by design. When developing your features or fixes take into consideration existing workflows such as drop down menus, submenus don't go straight for the empty space as that is more likely to get your code rejected. 

The settings screen needs to also remain a place where core settings lives, we don't really want to have a myriad of options in here for each and every setting within the UI, doing that makes the code un-managable for future contributors and clutters up and confuses things for the users of Actual Budget. 

### Examples of pull request that will get rejected 

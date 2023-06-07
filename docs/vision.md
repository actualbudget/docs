---
title: Actual Budget Vision
---

This document provides an outline of the vision of the open source version of Actual Budget, where the project would like to be, what the goals are and some of the history around Actual Budget. 

### History 

Actual Budget was designed, developed and maintained as a closed source paid product by James Longster for 4 years before he [decided](https://actualbudget.com/open-source) to release the code base to the community.

Initially there were a number of bumps in the road, the code wasn't 100% ready for the world to see it, some of the features that were integral to Actual Budget functioning just didn't work, over the first 4-5 months the community worked with James to get these issues ironed out but initially James just didn't have the time to take on the maintaining of an open source project all on his own, early 2023 a team of core maintainers took over the main bulk of the maintaining from James and have since been progressing with a number of features, some of which have been merged, some still in progress, fixes to the the existing code and plenty of improvements. 

### What Makes Actual Budget Great

Some of the things that make Actual Budget stand out from the rest include;

* Local-first
* Open (you own your data; you can do whatever you want with it)
* Sleek, clutter-free UI
* Simple to use for beginners; with progressive discoverability for advanced users (rules, schedules, and more to come)
* Stable, reliable, secure
* Privacy in mind (no tracking, no 3rd parties unless explicitly enabled)
* Community driven

### Primary Objectives

1. Full visibility into one's budget
  * The user owns and controls their data now and in the future
  * See the current status and trends in a budget
  * See trends in where money is coming in and going out

2. Clean and fast user experience
  * Fully usable across all devices, offline and online
  * Multiple budgets, each one accessible by multiple users
  * Accessible application

### Future Features
With the above objectives in mind, below is a set of features where contributors, including developers, testers, and idea-generators, can focus efforts.

#### User interface

* Mobile and desktop interfaces that can access all functions of the app
* Themes
  * Light and dark themes that comply with [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
  * Give users capability to add their own themes
  * Consistent look and feel across the application
* Goals
  * A fully-fleshed out goal system
  * Add a user interface for goals
* Reporting
  * Insight into income and expenses including user-defined (custom) reporting
  * Insight into monthly budget trends

#### User experience

* Clean and fast experience
* International language support
  * Separate language definitions
  * Language selection page
* Keyboard shortcuts
  * Commonality with well-known applications
  * Common across the app, with context-based exceptions
  * Fully documented with a help reference page
  * Customization page
* Truly offline use
  * Use as a [progressive web application](https://blog.logrocket.com/building-pwa-react/) so the app can be opened offline and on any device

#### External connectivity

* Pull from external bank/investment/etc accounts
  * Implementing and testing syncing providers other than Nordigen
  * Enabling support for Nordigen and other syncing providers by default

#### Developer experience

* Move towards component [driven design](https://www.componentdriven.org/) so that a UI testing framework such as [Storybook](https://storybook.js.org/) can be used
* Move towards a component framework scalable across device sizes and aspect ratios, such as [bootstrap](https://getbootstrap.com/)

### Mobile

The current strategy for Actual is to provide a mobile-friendly, responsive website. We do not intend to publish a native app as it is expensive to build and maintain feature parity between the various versions and operating systems. Thus we are fully focusing on a single product.

Instead, Actual Budget will focus on developing an excellent web experience by combining the underlying technology and some UI components from the desktop version with some components maintained separately for mobile and desktop where there need to be significant differences in presentation. For more details, [see our dedicated mobile strategy issue](https://github.com/actualbudget/actual/issues/804).

### The Future

Some of the high-level features we would like to add to Actual Budget in the future include:

* Goal templates moved to the UI.
* Mobile transaction entry.
* Implementing and testing syncing providers other than Nordigen
* Enabling support for Nordigen and other syncing providers by default
* Darkmode.
* custom reports.
* and more
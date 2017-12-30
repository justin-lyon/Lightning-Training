# Introduction to Lightning Components
[README](../README.md) > Introduction

---
## Contents

 1. [Introduction](#markdown-header-introduction)
 2. [Activities](#markdown-header-activities)
 3. [Supplementals](#markdown-header-supplementals)

---
## Introduction
This guide is meant as an introduction to intermediate level developers on the Salesforce Platform. Basic understanding of Salesforce development and familiarity with Acumen's Best Practices wiki are expected.

Lightning Components were released by Salesforce on August 25, 2015. Since then a number of strategies, patterns, and approaches have been applied. Some better than others. Having an understanding of Javascript, Modular Component Design and Composition, and any popular MVVM Javascript frameworks will help speed you along in your studies of Lightning.

This series of guides is meant as a supplement to Salesforce's Trailheads, and as supplementary documentation for Acumen's Best Practices in Lightning Development.

---
## Activities

Activities use a numbering convention for their modules. Modules within an activity are cumulative and should be completed in sequence. **Individual Activities can be completed in any order, however later Activities will assume understanding of the material covered in earlier Activities.**

All Activities can be found in the `/training/activities` folder of this repository.

### [00-getting-started](activities/00-getting-started/instructions.md)
A walkthrough of config prerequisites before you can begin Lightning Development in general and any prerequisites to completing the activities in this guide.

### [01-my-first-lightning-app](activities/01-my-first-lightning-app/01.00-instructions.md)
In this activity we'll introduce the Lightning Component basics - covering the most common files in a Lightning Component Bundle, their responsibilities and their relationships to one another, and Static Resources!

To exhibit these Lightning Component Basics we'll be implementing a Custom Account Grid UI that fires a Lightning Application Event updating a Custom Related List of Contacts. Overriding our Lightning Application's Home Tab through the App Builder.

### [02-form-entry](activities/02-form-entry/02.00-instructions.md)
In this activity we'll introduce Form Entry, Initializing a new record in Lightning, and performing DML to insert this new record to the database.

To exhibit these goals, we'll be implementing a custom New Contact form that overrides the standard New Contact button in Salesforce.

### [03-custom-search](activities/03-custom-search/03.00-instructions.md)
In this activity we'll combine form entry with a results table to execute a search and populate our table with the results.

To exhibit this goal, we'll be implementing a custom Contact Search page. It will be configured as a custom Tab in our Lightning Application. This page will search Contacts by Full Name and display the results in a Tabular layout.

### [04-super-components](activities/04-super-components/04.00-instructions.md)
This activity will guide you through a Lightning Super Component implementation.

To exhibit this goal, we'll be implementing a search against the New York Times API. It will be a custom tab in our Lightning Application.

---
## Supplementals

A collection of Trailheads & Salesforce Docs useful as supplementary resources to custom Lightning Development.

### Trailheads

 * [Lightning Component Core Concepts](https://trailhead.salesforce.com/en/modules/lex_dev_lc_vf_concepts)
 * [Lightning Component Basics](https://trailhead.salesforce.com/trails/lex_dev/modules/lex_dev_lc_basics)
 * [Lightning Component Tips & Gotchas](https://trailhead.salesforce.com/en/modules/lex_dev_lc_vf_tips)
 * [Lightning Component Skills & Tools](https://trailhead.salesforce.com/modules/lex_dev_lc_vf_fundamentals)
 * [Lightning Data Service Basics](https://trailhead.salesforce.com/modules/lightning_data_service)
 * [Security for Lightning Components](https://trailhead.salesforce.com/modules/security-for-lightning-components)
 * [Build an Instant Notification App](https://trailhead.salesforce.com/projects/workshop-platform-events)
 * [Lightning Experience Specialist](https://trailhead.salesforce.com/en/super_badges/superbadge_lex)

### Salesforce Documentation

 * [SLDS](https://www.lightningdesignsystem.com/)
 * [Lightning Components Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/intro_framework.htm)

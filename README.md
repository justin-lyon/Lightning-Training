# Lightning Training

## README Contents
 1. [About](#markdown-header-about)
 2. [Samples](#markdown-header-samples)

## Other Materials in this Repo
 * [Best Practices](development-practices/best-practices.md)
 * [Training Activities](training/introduction.md)

---
## About

This repository is a working reference for Lightning Developers. It contains functional sample code for a variety of use cases. This sample project may be fully deployed onto your Developer Edition Sandbox, or you may build the project yourself by following the activities under [training](/training/introduction.md).

---
### Samples

In no particular order, a list of SLDS & custom Lightning Component features and where to find them in this repository.

* SLDS Grid
	* `AccountGrid`
* SLDS Card
	* `AccountCard`
* SLDS Data Table
	* `ContactTable`
* Aura.Component[] attribute
	* `AccountCard`
	* `NavigateToSObjectLink`
* Aura.Action attribute
	* `ContactSearchForm`
	* `NewContactForm`
	* `NYT_ArticleSearchForm`
* Lightning Super Component
	* `NYT_ArticleSearchAPI` Super
	* `NYT_ArticleSearchContainer` Child
* JS Static Resource
	* [`LightningKit/js/`](https://bitbucket.org/acumensolutions/lightning-kit)
		* `acumen-navigator.js`
		* `acumen-toaster.js`
	* `NavigateSObjectLink`
	* `ContactSearchContainer`
* Application Event
	* `SelectedAccount`
	* `ClickableAccount`
	* `HomeAccountContainer`
	* `RelatedContactsContainer`
* Custom Form Entry
	* `NewContactForm`
	* `ContactSearchForm`
	* `NYT_ArticleSearchForm`
* Two way binding & Data Propagation
	* Any Container Component and its children
* Configurable `aura:attribute` in Lightning App Builder
	* `HomeAccountContainer`
	* `HomePage` Lightning Page

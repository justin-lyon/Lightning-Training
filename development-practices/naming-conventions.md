# naming-conventions
[README](../README.md) > [best-practices](./best-practices.md) > naming-conventions

---

## Contents

 1. [Naming Conventions](#markdown-header-naming-conventions)

---

## Naming Conventions
Two new naming conventions are added to Acumen's Style Guides for Lightning.

 1. **\*Container** suffix for Lightning Components
	- ex: `HomeAccountContainer`
 2. **\*AuraService** suffix for Lightning Apex Controllers
	- ex: `HomeAccountAuraService`

**Container** signifies that this Lightning Component is two things.

 * It is surfaced to Lightning Experience config - to be exposed in App Builder, Community Builder, or as a button override.
 * It is the top level component of our component hierarchy, and as such has the responsibility to maintain the data of its children.

There is no view in a Container component. Once data is retrieved, it is passed down into a **Primary View** or layout component such as a *Grid*.

**AuraService** distinguishes between a Lightning Apex Controller and its predecessor, the Visualforce Apex Controller or Extension. Visualforce Controllers are responsible not only for data access in your page, but also individual page actions. This is no longer the case with Lightning Apex Controllers.

 * A Lightning Apex Controller *only* exposes your data layer as a service to your client side javascript.
 * Behaviorally speaking, an AuraService is named such because it is functionally a REST service passing data between client and server in JSON.

Another key difference between a VF Apex Controller and a Lightning Apex Controller is that a Lightning Apex Controller is stateless. All members and methods of an AuraService are declared `static`.

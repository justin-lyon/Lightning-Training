# 00-getting-started
[README](../../../README.md) > [Introduction](../../introduction.md) > 00-getting-started

---

> Complete the steps in this section to prepare your developer edition
> sandbox for Lightning Development as well as pre-config for the activities
> in this guide.

> Keep in mind, Lightning Experience caches our pages. You may need to hard refresh multiple times. You can confirm more subtle changes by inspecting the DOM and source as well.

---
## Contents

Lightning Requirements

 1. [Create a new Developer Edition Sandbox](#markdown-header-create-a-new-developer-edition-sandbox)
 2. [Activate My Domain](#markdown-header-activate-my-domain)

Activity Requirements

 1. [Setup Our Salesforce Lightning Application](#markdown-header-setup-our-salesforce-lightning-application)
 2. [Add API Config Custom Setting](#markdown-header-add-api-config-custom-setting)
 3. [Register for NYTimes API](#markdown-header-register-for-nytimes-api)

---
## Lightning Requirements

### Create a new Developer Edition Sandbox

 1. Go to [developer.salesforce.com](https://developer.salesforce.com/)
 2. Click on *Sign Up*
 3. Enter your information
 4. Submit - verification and login details will be sent to your email.

### Activate My Domain

 1. Login to your Sandbox
 2. In Salesforce Setup navigate to My Domain.
 3. Register a subdomain, keep it concise.
 4. Await the activation email.
 5. Return to the My Domain Setup page
	* Refresh or from the link in your email
 6. Click the *Login* Button
 7. Click *Deploy to Users*

[Salesforce Help - My Domain](https://help.salesforce.com/articleView?id=domain_name_overview.htm&type=0)

---
## Activity Requirements

### Setup Our Salesforce Lightning Application

 1. In Salesforce Setup, navigate to App Manager
 2. Create a New Lightning Application
 3. Name it Training
 4. Add Tabs:
	* Home
	* Accounts
	* Contacts
 5. Assign to System Administrator Profile

### Installing the Lightning Kit

 1. Download the contents of the [Lightning-Kit](https://bitbucket.org/acumensolutions/lightning-kit) Repository
 2. Upload the LightningKit Static Resource to your Developer Edition Sandbox as a zipped folder.

### Add API Config Custom Setting

 1. In Salesforce Setup, navigate to Custom Settings
 2. Create a new List Custom Setting named API Config, (APIConfig__c).
 3. Add two fields
	* Key, Key__c, Type:Text(50)
	* URL, URL__c, Type:URL

### Register for NYTimes API

 1. Navigate to [developer.nytimes.com](http://developer.nytimes.com/)
 2. Register for an API Key
 3. In Salesforce Setup, navigate to the API Config Custom Setting
 4. Click *Manage*
 5. Add a new record with the values:
	* Name: NYTimes
	* URL__c: https://api.nytimes.com/svc/search/v2/articlesearch.json
	* Key__c: `Your Key`
 6. In Salesforce Setup, navigate to Remote Site Settings
 7. Click *New Remote Site*
	* Name: NYTimesAPI
	* Remote Site URL: https://api.nytimes.com

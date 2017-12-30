({
	onKeyUp : function(cmp, event, helper) {
		var searchText = cmp.get("v.searchText");
		if(searchText.length > 2) {
			helper.requestContacts(cmp);
		} else {
			cmp.set("v.contacts", []);
		}
	}
})
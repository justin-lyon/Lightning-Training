({
	handleSelectedAccount : function(cmp, event, helper) {
		helper.setAccount(cmp, event);
		helper.requestContacts(cmp);
	}
})
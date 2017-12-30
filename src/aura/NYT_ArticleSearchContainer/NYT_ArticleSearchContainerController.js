({
	clickSubmit : function(cmp, event, helper) {
		helper.makeRequest(cmp, helper);
	},

	dataChange : function(cmp, event, helper) {
		helper.handleResponse(cmp, helper);
	}
})
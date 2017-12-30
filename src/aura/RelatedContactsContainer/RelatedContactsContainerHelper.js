({
	setAccount : function(cmp, event) {
		var account = event.getParam("account");
		cmp.set("v.account", account);
	},

	requestContacts : function(cmp) {
		var account = cmp.get("v.account");
		var action = cmp.get("c.getContactsByAccount");

		action.setParams({
			accountId: account.Id,
		});

		action.setCallback(this, function(response) {
			var status = response.getState();

			if(status === "SUCCESS") {
				var contacts = response.getReturnValue();
				cmp.set("v.contacts", contacts);
			} else {
				console.log("Error state with: " + status);
				console.log(response.getError());
			}
		});

		$A.enqueueAction(action);
	}
})

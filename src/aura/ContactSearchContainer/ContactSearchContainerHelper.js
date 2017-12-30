({
	requestContacts : function(cmp) {
		var searchText = cmp.get("v.searchText");
		var action = cmp.get("c.getContactsByName");
		action.setParams({
			name: searchText,
		});

		action.setCallback(this, function(response) {
			var state = response.getState();

			if(state === "SUCCESS") {
				var contacts = response.getReturnValue();
				if(contacts.length > 0) {
					cmp.set("v.contacts", contacts);
				} else {
					acumen.toaster.info("No contacts found.", "Please try again.");
					cmp.set("v.contacts", []);
				}
			} else {
				console.log("Error with state: " + state);
				console.log(response.getError());
			}
		});

		$A.enqueueAction(action);
	}
})
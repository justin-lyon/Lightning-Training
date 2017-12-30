({
	initializeContact : function(cmp) {
		var contact = {
			sobjectType: "Contact",
			FirstName: "",
			LastName: "",
			BillingStreet: "",
			BillingCity: "",
			BillingState: "",
			BillingPostalCode: "",
			Email: "",
			Phone: "",
			Title: "",
			Department: "",
		};

		cmp.set("v.contact", contact);
	},

	createContact : function(cmp) {
		var contact = cmp.get("v.contact");
		var action = cmp.get("c.saveNewContact");

		action.setParams({
			contact: contact,
		});

		action.setCallback(this, function(response) {
			var state = response.getState();

			if(state === "SUCCESS") {
				console.log("success");
				acumen.toaster.success("Saved", contact.FirstName + " " + contact.LastName);
			} else {
				console.log("Error with state: " + state);
				console.log(response.getError());
				acumen.toaster.error("Error", "Could not save contact.");
			}
		});

		$A.enqueueAction(action);
	}
})
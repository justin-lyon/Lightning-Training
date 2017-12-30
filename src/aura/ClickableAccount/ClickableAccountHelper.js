({
	fireSelectedAccount: function(cmp) {
		var account = cmp.get("v.account");
		var event = $A.get("e.c:SelectedAccount");

		event.setParams({
			account: account,
		});

		event.fire();
	}
})
({
	requestAccounts: function(cmp, helper) {
		var action = cmp.get("c.getLimitedAccounts");

		action.setParams({
			limitter: cmp.get("v.limitter")
		});

		action.setCallback(this, function(res) {
			var status = res.getState();

			if(status === "SUCCESS") {
				var accounts = res.getReturnValue();
				cmp.set("v.accounts", accounts);

				this.fireSelectedAccount(cmp);

			} else {
				console.log("Error stat with: " + status);
				console.log(response.getError());
			}
		});

		$A.enqueueAction(action);
	},

	fireSelectedAccount: function(cmp) {
		var accounts = cmp.get("v.accounts");
		var event = $A.get("e.c:SelectedAccount");

		event.setParams({
			account: accounts[0],
		});

		event.fire();
	}
})

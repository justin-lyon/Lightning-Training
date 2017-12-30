({
	getArticles : function(cmp, searchText) {
		var action = cmp.get("c.searchArticles");
		action.setParams({
			searchText: searchText,
		});

		action.setCallback(this, function(response) {
			var state = response.getState();

			if(state === "SUCCESS") {
				var data = JSON.parse(response.getReturnValue());
				cmp.set("v.data", data);
			} else {
				console.log("Error with state: " + state);
				console.log(response.getError());
				acumen.toaster.error("Error", "An unknown error has occurred.");
			}
		});

		$A.enqueueAction(action);
	}
})

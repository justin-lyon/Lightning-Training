({
	makeRequest : function(cmp, helper) {
		helper.getArticles(cmp, cmp.get("v.searchText"));
	},

	handleResponse : function(cmp, helper) {
		var data = cmp.get("v.data");
		if(data.status === "OK") {
			var articles = data.response.docs;
			var meta = data.response.meta;
			cmp.set("v.articles", articles);
			cmp.set("v.articleMeta", meta);
		} else {
			acumen.toaster.warning("Warning", "An unknown error occurred on the NYT Api.");
		}
	}
})
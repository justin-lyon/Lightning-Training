({
	openArticle : function(cmp) {
		var article = cmp.get("v.article");
		acumen.navigator.navigateToURL(article.web_url);
	}
})
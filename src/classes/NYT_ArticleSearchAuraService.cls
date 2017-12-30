public with sharing class NYT_ArticleSearchAuraService {

	@AuraEnabled
	public static String searchArticles(String searchText) {
		try {
			NYT_ArticleSearch nytService = new NYT_ArticleSearch();
			HttpResponse res = nytService.searchByString(searchText);
			return res.getBody();
		} catch(CalloutException cex) {
			throw new AuraHandledException(cex.getMessage());
		}
	}
}
public with sharing class NYT_ArticleSearch {
	private static APIConfig__c config;

	static {
		config = APIConfig__c.getInstance('NYTimes');
	}

	public HttpResponse searchByString(String searchText) {
		String endpoint = config.URL__c;

		List<String> queryParams = new List<String>();
		queryParams.add('api-key=' + config.Key__c);
		queryParams.add('q=' + searchText);
		queryParams.add('fq=\'document_type=article\'');
		endpoint += '?' + String.join(queryParams, '&');

		HttpRequest req = new HttpRequest();
		req.setMethod('GET');
		req.setEndpoint(endpoint);
		req.setHeader('Content-type', 'application/json');

		Http h = new Http();
		return h.send(req);
	}
}
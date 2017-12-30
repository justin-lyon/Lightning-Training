public with sharing class ContactSearchAuraService {

	private static ContactDAI contactAccessor = new ContactDA();
	public static ContactDAI ContactDI {private get; set{
		contactAccessor = value;
	}}

	@AuraEnabled
	public static List<Contact> getContactsByName(String name) {
		return contactAccessor.queryContactsByName(name);
	}
}
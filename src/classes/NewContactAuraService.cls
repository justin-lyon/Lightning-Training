public with sharing class NewContactAuraService {

	private static ContactDAI contactAccessor = new ContactDA();
	public static ContactDAI ContactDI {private get; set{
		contactAccessor = value;
	}}

	@AuraEnabled
	public static void saveNewContact(Contact contact) {
		try {
			contactAccessor.insertContact(contact);

		} catch(DmlException dmle) {
			throw new AuraHandledException(dmle.getMessage());
		}
	}
}
public with sharing class ContactDA implements ContactDAI {

	public List<Contact> queryContactsByAccount(Id accountId) {
		return [
			SELECT Name, Title, Phone, Email, BirthDate, Department, PhotoUrl, MailingAddress
			FROM Contact
			WHERE AccountId = :accountId];
	}

	public List<Contact> queryContactsByName(String name) {
		String scrubbedName = '%' + String.escapeSingleQuotes(name) + '%';
		return [
			SELECT Name, Title, Phone, Email, BirthDate, Department, PhotoUrl, MailingAddress
			FROM Contact
			WHERE Name LIKE :scrubbedName];
	}

	public void insertContact(Contact con) {
		insert con;
	}
}
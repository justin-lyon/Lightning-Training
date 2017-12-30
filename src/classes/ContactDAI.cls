public interface ContactDAI {

	List<Contact> queryContactsByAccount(Id accountId);
	List<Contact> queryContactsByName(String name);
	void insertContact(Contact con);
}
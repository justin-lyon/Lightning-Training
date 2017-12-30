public with sharing class HomeAccountAuraService {

	private static AccountDAI accountAccessor = new AccountDA();
	public static AccountDAI AccountDI {private get; set{
		accountAccessor = value;
	}}

	@AuraEnabled
	public static List<Account> getLimitedAccounts(Integer limitter) {
		limitter = Integer.valueOf(limitter);
		return accountAccessor.queryLimitedAccounts(limitter);
	}
}
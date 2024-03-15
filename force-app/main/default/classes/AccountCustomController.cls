public class AccountCustomController {
    private final Account account;
    public AccountCustomController(){
        account=[select id,name,Site from Account where Id=:ApexPages.currentPage().getParameters().get('id')];
    }
    public Account getAccount(){
        return account;
    }
    public PageReference saveTheRecord() {
        update account;
        return null;
    }
}
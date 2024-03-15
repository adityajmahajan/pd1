public class newAndExistingController {
    
    private Account account{get;private set;}
    public newAndExistingController(){
        Id id = ApexPages.currentPage().getParameters().get('id');
        if(id==null){
            account = new account();
        }
        else{
            account = [select name, phone, industry from Account where Id=:id];
        }
    }
    public Account getAccount(){
        
        return account;
    }
    public PageReference insertUpdateSave(){
        try{
        upsert(account);
        }
        catch(System.DMLException e){
            ApexPages.addMessages(e);
            return null;
        }
        PageReference redirectSuccess=new ApexPages.StandardController(Account).view();
        return redirectSuccess;
    }
}
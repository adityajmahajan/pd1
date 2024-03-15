public class accountListController {
    public ApexPages.StandardSetController accs{
    get{
        if(accs==null){
            accs= new ApexPages.StandardSetController(Database.getQueryLocator([select name, accountNumber from Account]));
        }
        return accs;
    }
    set;
    }
    public List<Account> getAccounts() {
        return (List<Account>)accs.getRecords();
    }

}
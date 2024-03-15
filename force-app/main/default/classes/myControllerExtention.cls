public class myControllerExtention {
    private final Account acct;
    public myControllerExtention(ApexPages.StandardController stdController) {
        this.acct=(Account)stdController.getRecord();
        
    }
    public String getGreeting(){
        return 'Hello '+acct.Name +' (' +acct.id +')';
    }   
}
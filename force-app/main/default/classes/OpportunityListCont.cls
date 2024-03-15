public class OpportunityListCont {

    public List<Opportunity> getOpportunities() {
    
        return (List<Opportunity>)opps.getRecords();
    }
    public ApexPages.StandardSetController opps{
        get{
            if(opps==null){
                opps = new ApexPages.StandardSetController(Database.getQueryLocator([select name, CloseDate, Amount from Opportunity]));
            }
        return opps; 
        }
        set{}
    }

}
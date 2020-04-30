public class TaskcalendarController {
    @AuraEnabled
    public static List<Tache__c> getTasks(String userN){
            List<Tache__c> result =  [Select Id,Name,Completed_Date__c,Description__c,Status__c,ConcernedRessource__r.username__c  from Tache__c where ConcernedRessource__r.username__c = :userN ] ;
        
        return result ; 
    } 
    
    @AuraEnabled
	public static Tache__c updateTache (Tache__c tache , String newStatus){
    

    tache.Status__c = newStatus; 

    update tache;
    return tache;
}
    @AuraEnabled
	public static Tache__c getTask (Id id ){
    Tache__c tacheRec = [SELECT Id,Name, Status__c,Completed_Date__c,Description__c FROM Tache__c WHERE (Id =:id)];
    return tacheRec;
}
    @AuraEnabled
    public static Ressource__c getR (String name) {
        return [Select username__c,Name from Ressource__c where Name = :name];
        
    }

}
public class LoginPageClass {
    
    @auraEnabled
    public static Ressource__c getcontact(String username,String userpassw ){
        
        List<Ressource__c> lcont = new List<Ressource__c>([select Username__c,Password__c from Ressource__c where Username__c=:username  Limit 1]);
        
        if(lcont.size()==0){
            return null ;
        }
        else{
            if(lcont[0].Password__c==userpassw ){
                
                return lcont[0]; 
            }
            
            else{
                
                return null ;
                
            }  
            
        }
        
    }
    
    
    
}
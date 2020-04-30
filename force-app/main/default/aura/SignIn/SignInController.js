({
    loginPage : function(component, event, helper) {
        var action = component.get("c.getcontact");
        
        var userid = component.get("v.Empiduser"); 
        var pass= component.get("v.Empidpwd");
        console.log(userid + "  " + pass);
        console.log(action);
        
        if($A.util.isEmpty(userid ) || $A.util.isUndefined(userid )){
            alert('Please Enter User Name!');
            return;
        }   
        if($A.util.isEmpty(pass) || $A.util.isUndefined(pass)){
            alert('Please Enter Password!');
            return;
        } 
        
        action.setParams({
            username:userid ,
            userpassw:pass
        });
        action.setCallback(this,function(a){
            var rtnValue = a.getReturnValue();
            if(rtnValue == null){
                alert ('Login failed');
            }
            else {
                //alert ("Login Successfully");
                var componentEvent = component.getEvent('connResource');
               // var componentEvent2 = component.getEvent('eventVar');
                componentEvent.setParams({
                    connectedResource : rtnValue
                });
                
                componentEvent.fire();
              //  componentEvent2.fire();
                
                
            }
       //     alert("you login successfully");
            
          //  console.log('The field list is :'+JSON.stringify(a.getReturnValue()));
        });
        $A.enqueueAction(action);
        //component.set("v.userid ",'');
       // component.set("v.pass",'');
        
        
    }
    
    
})
({
    scriptsLoaded : function(component, event, helper) {
        helper.getResponse(component);
    },
    
    
	onclick : function(component, event, helper) {
        var  c2 = component.find("ns");
       // console.log(component.get('v.selectedTask'));
		

      //  var  c2 = component.find("ns");
        console.log(c2.getElement().value);
        //console.log(c1.getName());
       // console.log(c3.get('v.value'));
        //console.log(c2.get("v.value"));
       // console.log(component.get("v.selectedTask.Description__c"));
       // component.set("v.desc","Hello there");

        var action = component.get("c.updateTache");
    	//console.log('component getted correctely');
    	var c1 = component.get("v.selectedTask");
       // console.log(c1);
       
        //var c2 = component.find("status");
        action.setParams({"tache":  c1 , "newStatus": c2.getElement().value});
       /* console.log($('#updateEventTitle').val());
        console.log($('#status').val());
        console.log($('#recordId').val());*/
        
		//console.log('parameters setted correctely');
        action.setCallback(this, function(response) {
            var state = response.getState();
           // console.log(state + '   msg');
           // console.log(response.getError());
           // console.log('Ok until there');
            if(component.isValid() && state === "SUCCESS"){
               var c = response.getReturnValue();
             //  console.log(c1);
              //  component.set("v.case", c);
              console.log('everything is working correctely');
              component.set("v.truthy",false);
              window.setTimeout(
                  $A.getCallback(function() {   
                      component.set("v.truthy",true);
                      console.log("I'm in setTimeOut function");
                      console.log(component.get('v.truthy'));
                  })
                  ,1000);
             // window.location.reload();
               // $("#calendar").load();
              // $('#calendar').fullCalendar('removeEventSource', events);
              // helper.loadCalendar(component);
              //$("#calendar").fullCalendar( "refetchEvents");

               // console.log(component.get('v.selectedTask'));
              // $('#calendar').fullCalendar( 'refetchEvents' );


                
            } else {
                console.log('There was a problem : '+response.getError());
            }
        });
        $A.enqueueAction(action);

},
    
    newPopup : function(component, event, helper){
        var action = component.get("c.getTask");
        action.setParams({"id":  $('#recordId').val() });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if(component.isValid() && state === "SUCCESS"){
               var c = response.getReturnValue();
                component.set('v.selectedTask',c);
               // console.log(c);
                console.log(component.get('v.selectedTask'));
                console.log('Great Job');
             // window.location.reload();
                
            } else {
                console.log('There was a problem : '+response.getError());
            }
        });
        $A.enqueueAction(action);
        var cmpTarget = component.find('Modalbox1');
        var cmpBack = component.find('Modalbackdrop');
        $A.util.addClass(cmpTarget, 'slds-fade-in-open');
        $A.util.addClass(cmpBack, 'slds-backdrop--open');
    },
    closeNewModal : function(component, event, helper){
        var cmpTarget = component.find('Modalbox1');
        var cmpBack = component.find('Modalbackdrop');
        $A.util.removeClass(cmpBack,'slds-backdrop--open');
        $A.util.removeClass(cmpTarget, 'slds-fade-in-open');
    },
    
    handleLoginEventt : function(component, event, helper) {
       
        console.log("Hi from Calend! I'm recieving the event")
		//console.log(event.getParam('connectedResource')); 
       // component.set("v.connR", event.getParam('connectedResource'));
	}
    
    
});
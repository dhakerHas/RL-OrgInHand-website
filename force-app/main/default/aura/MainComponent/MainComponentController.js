({
	handleLoginEvent : function(component, event, helper) {
		console.log('test'); 
        component.set("v.variable","True");
      
        component.set("v.login" , event.getParam('connectedResource').username__c);
        console.log(component.get("v.login"));
	}
})
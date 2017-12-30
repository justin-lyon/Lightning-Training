({
	navigateToRecord : function(cmp, event, helper) {

		var recordId = cmp.get("v.recordId");
		acumen.navigator.navigateToSObject(recordId);
	}
})
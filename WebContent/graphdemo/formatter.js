sap.ui.define([], function () {
	
	"use strict";
	
	return {
	
		formatMapUrl: function(sHouseNo, sStreet, sZip, sCity, sRegion, sCountry) {
			
			if ((sHouseNo!=null) && (sStreet!=null) && (sZip!=null) && (sCity!=null) && (sRegion!=null) && (sCountry!=null)) {	
				
				var sFrame="<iframe width='100%' height='100%' src='https://www.google.com/maps/embed/v1/place?key=AIzaSyBZmGvj3AIzVqCX_GueyePYPBzTFXKfb0g&zoom=17&q="
					+ jQuery.sap.encodeURL(sHouseNo + " " + sStreet + ", " + sZip + " " + sCity + ", " + sRegion + ", " + sCountry) +		
					"'/>";
				
				return sFrame;
			}
		}
	}
});	
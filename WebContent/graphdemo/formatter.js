sap.ui.define([], function () {
	
	"use strict";
	
	return {
	
		formatMapUrl: function(sHouseNo, sStreet, sZip, sCity, sRegion, sCountry) {
			
			if ((sHouseNo!=null) && (sStreet!=null) && (sZip!=null) && (sCity!=null) && (sRegion!=null) && (sCountry!=null)) {	
				
				var sFrame="<iframe width='100%' height='100%' src='https://www.google.com/maps/embed/v1/place?key=<maps_api_key>&zoom=17&q="
					+ jQuery.sap.encodeURL(sHouseNo + " " + sStreet + ", " + sZip + " " + sCity + ", " + sRegion + ", " + sCountry) +		
					"'/>";
				
				return sFrame;
			}
		}
	}
});	

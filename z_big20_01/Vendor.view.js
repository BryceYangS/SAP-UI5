sap.ui.jsview("z_big20_01.Vendor", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf z_big20_01.Vendor
	*/ 
	getControllerName : function() {
		return "z_big20_01.Vendor";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf z_big20_01.Vendor
	*/ 
	createContent : function(oController) {
		
		// Chart dataset
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
		    dimensions : [
		        { axis : 1, name : 'Vendor', value : "{Lifnr}" } // Analyze target
		    ],					//제목이기 때문에 아무거나 가능,   //Lifnr은 필드와 일치해야
		    measures : [ 
		        { name : 'Amount', value : '{Dmbtr}' }  // Analyze
		    ],
		    data : {
		        path : "/VendorCHartSet",
		        filters: [
//		               new sap.ui.model.Filter("Fldate",sap.ui.model.FilterOperator.EQ,"2010-03-10")
		        ]
		    }
		});
		
		var oChart = new sap.viz.ui5.Line({
		    width : "80%",
		    height : "400px",
		    title : {
		        visible : true,
		        text : 'AP open item Chart'
		    },
		});
		        		
		oChart.setDataset(oDataset);

		var ele = [oChart];
		return ele;
	}

});

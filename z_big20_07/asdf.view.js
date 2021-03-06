sap.ui.jsview("z_big20_07.asdf", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf z_big20_07.asdf
	*/ 
	getControllerName : function() {
		return "z_big20_07.asdf";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf z_big20_07.asdf
	*/ 
	createContent : function(oController) {

		// Chart dataset
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
		    dimensions : [
		        { axis : 1, name : 'Vendor', value : "{Lifnr}" } // Analyze target
		    ],					
		    measures : [ 
		        { name : 'Amount', value : '{Rwbtr}' }  // Analyze
		    ],
		    data : {
		        path : "/PayChartSet",
		        filters: [
//		               new sap.ui.model.Filter("Fldate",sap.ui.model.FilterOperator.EQ,"2010-03-10")
		        ]
		    }
		});
		
		var oChart = new sap.viz.ui5.Pie({
		    width : "80%",
		    height : "400px",
		    title : {
		        visible : true,
		        text : 'Pay Amount Chart'
		    },
		});
		        		
		oChart.setDataset(oDataset);

		var ele = [oChart];
		return ele;
	}

});

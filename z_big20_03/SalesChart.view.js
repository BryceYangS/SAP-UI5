sap.ui.jsview("z_big20_03.SalesChart", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf z_big20_03.SalesChart
	*/ 
	getControllerName : function() {
		return "z_big20_03.SalesChart";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf z_big20_03.SalesChart
	*/ 
	createContent : function(oController) {
		// Chart dataset
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
		    dimensions : [
		        { axis : 1, name : 'Gruop', value : "{Matkl}" } // Analyze target
		    ],					
		    measures : [ 
		        { name : 'NetValue', value : '{Netwr}' }  // Analyze
		    ],
		    data : {
		        path : "/SalesChartSet",
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
		        text : 'Material amount Chart'
		    },
		});
		        		
		oChart.setDataset(oDataset);

		var ele = [oChart];
		return ele;
	}

});

sap.ui.jsview("z_big20_08.BTS", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf z_big20_08.BTS
	*/ 
	getControllerName : function() {
		return "z_big20_08.BTS";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf z_big20_08.BTS
	*/ 
	createContent : function(oController) {

		// Chart dataset
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
		    dimensions : [
		        { axis : 1, name : 'Line', value : "{Line}" }, // Analyze target
		        { axis : 1, name : 'Name', value : "{Name}" } 
		    ],					
		    measures : [ 
		        { name : '경우수', value : '{Ncase}' }  // Analyze
		    ],
		    data : {
		        path : "/SubchartSet",
		        filters: [
//		               new sap.ui.model.Filter("Fldate",sap.ui.model.FilterOperator.EQ,"2010-03-10")
		        ]
		    }
		});
		
		var oChart = new sap.viz.ui5.Treemap({
		    width : "80%",
		    height : "400px",
		    title : {
		        visible : true,
		        text : 'BTS'
		    },
		});
		        		
		oChart.setDataset(oDataset);

		var ele = [oChart];
		return ele;
	}

});

Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch : function(){
        console.log('My first Rally App for Features Sudhir WOOT!!!');
        this._loadData();
    },
    //Get Data from Rally
    _loadData:function(){
       ///
        var myFeatureStore=Ext.create('Rally.data.wsapi.Store', {
            model: 'PortfolioItem/Feature',
            autoLoad: true,
            listeners: {
                load: function(myUStoryStore, myStorydata, success) {
                    //process data
                    console.log('!!Got User Feature Data',myUStoryStore,myStorydata,success);
                    // Add grid
                    this._loadGrid(myFeatureStore);
                    //Add Grid ends
                 //   console.log('My Feature grid',myUserStoryGrid);
                   // this.add(myUserStoryGrid);
                },
                scope:this
            },
            fetch: ['FormattedID','Name', 'LastUpdateDate']
        });

        ///
    },

    //Create and Show Grid of User Features
    _loadGrid :function(myFeatureStore){
        var myFeatureGrid=Ext.create('Rally.ui.grid.Grid', {
                store: myFeatureStore,
                columnCfgs: [
                    'FormattedID',
                    'Name', 'LastUpdateDate'
                ]
        });
        console.log('@@@@@@@@What is this?',this);
        this.add(myFeatureGrid);


    }

    /*
    launch: function() {
        //Write app code here
        console.log('My first Rally App for Features Sudhir WOOT!!!');
        var myUserStoryStore=Ext.create('Rally.data.wsapi.Store', {
            model: 'PortfolioItem/Feature',
            autoLoad: true,
            listeners: {
                load: function(myUStoryStore, myStorydata, success) {
                    //process data
                    console.log('!!Got User Feature Data',myUStoryStore,myStorydata,success);
                    // Add grid
                    var myUserStoryGrid=Ext.create('Ext.Container', {
                        items: [{
                            xtype: 'rallygrid',
                            columnCfgs: [
                                'FormattedID',
                                'Name','LastUpdateDate'
                            ],
                            storeConfig: {
                                model: 'PortfolioItem/Feature'
                            }
                        }],
                        renderTo: Ext.getBody()
                    });
                    //Add Grid ends
                    console.log('My Feature grid',myUserStoryGrid);
                    this.add(myUserStoryGrid);
                },
                scope:this
            },
            fetch: ['FormattedID','Name', 'LastUpdateDate']
        });
        //API Docs: https://help.rallydev.com/apps/2.0/doc/
    }
    */

});

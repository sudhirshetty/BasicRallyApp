Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
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
                                'Name'
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
});

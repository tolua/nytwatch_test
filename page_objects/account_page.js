module.exports = {
    url: function(){
        return this.api.launchUrl + '/home';
    },
    
    elements: {
        getComparison : {
            selector : '#getComparisonButton',
        }
    }
  };
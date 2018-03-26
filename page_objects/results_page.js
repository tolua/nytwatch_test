module.exports = {
  url: function(){
      return this.api.launchUrl + '/results';
  },
  
  elements: {
      hurrah : {
          selector : 'span[class*="can-save-header"]',
      }
  }
};
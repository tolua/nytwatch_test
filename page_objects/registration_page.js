module.exports = {
  url: function(){
      return this.api.launchUrl + '/register';
  },
  
  elements: {
      liteButton : {
          selector : 'span[class*="cec-switch-to-lite"]',
      }
      
  }
};
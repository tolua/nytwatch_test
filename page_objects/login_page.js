
 const loginCommand = {
     loginWith() {
        return this
        .waitForElementVisible('#email-address')
        .setValue('@email', 'vue@mailinator.com')
        .setValue('@password', 'vue@mailinator.com')
        .click('@submit')
    },
};

module.exports = {
    commands: [loginCommand],
    url: function(){
        return this.api.launchUrl + '/login';
    },

    elements: {
        email: { 
            selector: 'input[name="email"]', 
          },
          password: { 
            selector: 'input[name="password"]',  
          },
          submit: { 
            selector: '#submit', 
          }
    }
  };
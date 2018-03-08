module.exports = {
  'Demo test Login' : function (client) {
    client
      .url('https://clubs.sit1.gb.moneysavingexpert.com/cheapenergyclub/login')
      .waitForElementVisible('body', 3000)
      .waitForElementVisible('#email-address', 2000)
      .setValue('input[name=email]', 'vue@mailinator.com')
      .setValue('#loginPassword', 'vue@mailinator.com')
      .click('#submit')
      .pause(5000)
      .assert.urlEquals('https://clubs.sit1.gb.moneysavingexpert.com/cheapenergyclub/home')
      .click('#getComparisonButton')
      .pause(5000)
      .waitForElementVisible('span.can-save-header', 2000)
      .assert.containsText('span.can-save-header', 'Hurrah')
      .end();
  }
};




module.exports = {
  
  'Demo test Login' : function (client) {
    var loginPage = client.page.login_page();
    var accPage = client.page.account_page();
    var resultPage = client.page.results_page();

    loginPage.navigate()
      .waitForElementVisible('body')
      .loginWith()
      .waitForElementVisible('h1.account-welcome-back')
      .assert.urlEquals('https://clubs.sit1.gb.moneysavingexpert.com/cheapenergyclub/home');
      accPage
      .waitForElementVisible('#getComparisonButton')
      .click('@getComparison');
      resultPage
      .waitForElementVisible('span[class*="can-save-header"]')
      .assert.containsText('@hurrah', 'Hurrah');
      client.end();
  }
};




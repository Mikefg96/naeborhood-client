module.exports = {
    'View and create payments': function(browser) {
        browser
            .url('http://localhost:8080/dashboard')
            .waitForElementVisible('.nav', 1000)
            .click('#paymentsBtn')
            .pause(1500)
            .click('#showResidents option:nth-child(2)')
            .setValue('input[name="payQty"]', 10000)
            .pause(2000)
            .end();
    }
};
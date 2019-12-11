module.exports = {
    'Add visitor and see visitors': function(browser) {
        browser
            .url('http://localhost:8080/dashboard')
            .waitForElementVisible('.nav', 1000)
            .click('#visitsBtn')
            .pause(1500)
            .waitForElementVisible('.visits')
            .pause(1000)
            .click('#addVisit')
            .pause(1500)
            .setValue('input[name="visitName"]', 'Jane')
            .setValue('input[name="visitLastName"]', 'Doe')
            .setValue('input[name="visitPlate"]', 'G45-L0L')
            .click('#showResidents option:nth-child(2)')
            .pause(1000)
            .waitForElementVisible('.visits')
            .click('#registerBtn')
            .pause(1500)
            .click('#seeVisits')
            .pause(1500)
            .click('#toVisits')
            .waitForElementVisible('.visits')
            .end();

    }
};
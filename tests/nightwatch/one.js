module.exports = {
    'Create and show houses': function(browser) {
        browser
            .url('http://localhost:8080/dashboard')
            .waitForElementVisible('.nav', 1000)
            .click('#housesBtn')
            .pause(1500)
            .waitForElementVisible('.houses', 1000)
            .click('#registerHouse')
            .pause(1000)
            .setValue('input[name="houseStreet"]', 'Test Street')
            .setValue('input[name="houseNumber"]', 1234)
            .pause(1000)
            .click('#registerBtn')
            .pause(1000)
            .waitForElementVisible('.houses')
            .click('#showHouses')
            .pause(1500)
            .waitForElementVisible('#allHouses')
            .pause(1000)
            .click('#toHouses')
            .waitForElementVisible('.houses')
            .end();

    }
};
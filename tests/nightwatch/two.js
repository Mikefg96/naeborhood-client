module.exports = {
    'Show residents and create a new one': function(browser) {
        browser
            .url('http://localhost:8080/dashboard')
            .waitForElementVisible('.nav', 1000)
            .click('#residentsBtn')
            .pause(1500)
            .waitForElementVisible('.residents')
            .pause(1000)
            .setValue('input[name="residentName"]', 'John')
            .setValue('input[name="residentLastName"]', 'Doe')
            .setValue('input[name="residentCel"]', 1234567890)
            .click("#selectid option:nth-child(2)")
            .pause(1000)
            .click('#registerRes')
            .pause(1500)
            .end();

    }
};
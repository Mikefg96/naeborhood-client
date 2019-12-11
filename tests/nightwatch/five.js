module.exports = {
    'Register and login': function(browser) {
        browser
            .url('http://localhost:8080')
            .waitForElementVisible('.home', 1000)
            .setValue('input[name="userEmail"]', 'user@test.com')
            .setValue('input[name="userPass"]', '1234')
            .setValue('input[name="userPassC"]', '1234')
            .pause(1000)
            .click('#registerUser')
            .pause(1500)
            .waitForElementVisible('#loginForm')
            .setValue('input[name="loginEmail"]', 'user@test.com')
            .setValue('input[name="loginPass"]', '1234')
            .click('#loginBtn')
            .pause(1500)
            .waitForElementVisible('.nav', 1000)
            .end();
    }
};
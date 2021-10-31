Feature('login');

Scenario('login to swaglabs', ({ I, loginPage }) => {

    // locators
    let products = '//span[@class="title"]'


    I.amOnPage('/');
    loginPage.login();
    I.see('PRODUCTS', products);






    // without pom
    // // Locators
    // let username = '//input[@id="user-name"]'
    // let password = '//input[@id="password"]'
    // let login = '//input[@id="login-button"]'

    // // Data
    // let username_value = 'standard_user'
    // let password_value = 'secret_sauce'



    // I.amOnPage('/');
    // // I.fillField(username,username_value);
    // // I.fillField(password,password_value);
    // // I.click(login)
    // I.wait(5)
    

});

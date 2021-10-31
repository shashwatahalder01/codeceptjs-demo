Feature('category');
var assert = require('assert');

Scenario('change product category', async ({ I, loginPage, homePage }) => {


// data
    let category1 = 'Name (Z to A)';
    let category2 = 'Price (low to high)';
    let category3 = 'Price (high to low)';
    let category4 = 'Name (A to Z)';
    
// locators
    let activeCategory = '//span[@class="active_option"]';

    I.amOnPage('/');
    loginPage.login();
  
    homePage.chageCategory(category1)
    let activeCategoryValue1 = await I.grabTextFrom(activeCategory)
    assert.equal('NAME (Z TO A)', activeCategoryValue1)


    homePage.chageCategory(category2)
    let activeCategoryValue2 = await I.grabTextFrom(activeCategory)
    assert.equal('PRICE (LOW TO HIGH)', activeCategoryValue2)


    homePage.chageCategory(category3)
    let activeCategoryValue3 = await I.grabTextFrom(activeCategory)
    assert.equal('PRICE (HIGH TO LOW)', activeCategoryValue3)

    homePage.chageCategory(category4)
    let activeCategoryValue4 = await I.grabTextFrom(activeCategory)
    assert.equal('NAME (A TO Z)', activeCategoryValue4)
 



























// without pom
//     // Locators
//     let username = '//input[@id="user-name"]'
//     let password = '//input[@id="password"]'
//     let login = '//input[@id="login-button"]'
//     let category = '//select[@class="product_sort_container"]'

//     // Data
//     let username_value = 'standard_user'
//     let password_value = 'secret_sauce'



//     I.amOnPage('/');
//     I.fillField(username,username_value)
//     I.fillField(password,password_value)
//     I.click(login)
//     I.wait(5)
    
 
//     I.selectOption(category,'Name (Z to A)');
//     I.wait(2)
//     I.selectOption(category, 'Price (low to high)');
//     I.wait(2)
//     I.selectOption(category,'Price (high to low)');
//     I.wait(2)
//     I.selectOption(category,'Name (A to Z)');
//     I.wait(2)

//     I.wait(5)



});

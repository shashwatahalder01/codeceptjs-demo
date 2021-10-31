Feature('AddToCart');
var assert = require('assert');

Scenario('add product to cart', async ({ I, loginPage, homePage }) => {



    
// locators
    let backpack = '//button[@id="add-to-cart-sauce-labs-backpack"]';
    let backpackPriceInProducts = '//div[@class="inventory_item_price"]';
    let backpackPriceInCart = '//div[@class="inventory_item_price"]';

    I.amOnPage('/');
    loginPage.login();
    let backpackPriceProduct= await I.grabTextFrom(backpackPriceInProducts);
    I.click(backpack)
    homePage.goToCart();
    let backpackPriceCart = await I.grabTextFrom(backpackPriceInCart);
    assert.equal(backpackPriceProduct, backpackPriceCart);


  
 



























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

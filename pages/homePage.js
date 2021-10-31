
const { I } = inject();

module.exports = {

  // locators
  category: '//select[@class="product_sort_container"]',
  cart: '//a[@class="shopping_cart_link"]',
  yourCart: '//span[@class="title"]',

  // methods
  chageCategory(categoryType){
    I.selectOption(this.category, categoryType);
    I.wait(2)
  },

  goToCart(){
    I.click(this.cart);
    I.see('YOUR CART',this.yourCart)
  }



}

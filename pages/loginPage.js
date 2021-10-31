const { I } = inject();

module.exports = {

  // data
  username_value: 'standard_user',
  password_value: 'secret_sauce',

  // locators
  username: '//input[@id="user-name"]',
  password: '//input[@id="password"]',
  loginBtn: '//input[@id="login-button"]',

  // methods
  login(){
    I.fillField(this.username,this.username_value);
    I.fillField(this.password,this.password_value);
    I.click(this.loginBtn);
    I.wait(2);
  }


}

const { expect } = require('@playwright/test');

class LoginPage {

  constructor(page) {
    this.page = page;
    this.emailInput     = page.locator('input[name="email"]');
    this.passwordInput  = page.locator('input[type="password"]');
    this.loginButton    = page.locator('button.login-btn');
    this.registerButton = page.locator('button.register-btn');
    this.userMenuButton = page.locator('button[title="User Menu"]');
    this.logoutButton   = page.locator('button.dropdown-item.text-danger');
  }

  async goto() {
    await this.page.goto('https://uat-arsol.taction.in/login');
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(2000);
  }

  async login(email, password) {
    // Clear and fill email
    await this.emailInput.click();
    await this.emailInput.clear();
    await this.emailInput.fill(email);
    await this.page.waitForTimeout(500);

    // Clear and fill password
    await this.passwordInput.click();
    await this.passwordInput.clear();
    await this.passwordInput.fill(password);
    await this.page.waitForTimeout(500);

    // Wait for button to be enabled then click
    await expect(this.loginButton).toBeEnabled({ timeout: 10000 });
    
    // ✅ Click and listen for network response at same time
    const [response] = await Promise.all([
      this.page.waitForResponse(
        res => res.url().includes('/login') && res.request().method() === 'POST',
        { timeout: 15000 }
      ).catch(() => null),
      this.loginButton.click()
    ]);

    if (response) {
      console.log('🌐 Login API response status:', response.status());
      const body = await response.text().catch(() => 'could not read body');
      console.log('🌐 Login API response body:', body.substring(0, 200));
    }

    // Wait for redirect
    await this.page.waitForTimeout(3000);
    console.log('🔍 URL after login:', this.page.url());
  }

  async logout() {
    await this.userMenuButton.click();
    await this.page.waitForTimeout(500);
    await this.logoutButton.click();
    await this.page.waitForURL(url => url.includes('/login'), { timeout: 15000 });
  }

  async getTitle() {
    return await this.page.title();
  }

  async getCurrentURL() {
    return this.page.url();
  }
}

module.exports = { LoginPage };
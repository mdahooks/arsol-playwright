// ================================================
// tests/login.test.js
// ARSOL Login & Logout Tests
// ================================================

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

// ✅ Your real credentials
const VALID_EMAIL    = 'mohinidahooks@gmail.com';
const VALID_PASSWORD = 'hu0rx3qe';
const WRONG_EMAIL    = 'wronguser@gmail.com';
const WRONG_PASSWORD = 'wrongpassword123';

test.describe('🔐 ARSOL Login & Logout Tests', () => {

  // TEST 1: Login page should load
  test('Login page should load successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    const title = await loginPage.getTitle();
    expect(title.length).toBeGreaterThan(0);
    console.log(`✅ Login page loaded — Title: "${title}"`);
  });

  // TEST 2: Email field should be visible
  test('Email input field should be visible', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(loginPage.emailInput).toBeVisible();
    console.log('✅ Email field is visible');
  });

  // TEST 3: Password field should be visible
  test('Password input field should be visible', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(loginPage.passwordInput).toBeVisible();
    console.log('✅ Password field is visible');
  });

  // TEST 4: Login button should be visible
  test('Login button should be visible', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(loginPage.loginButton).toBeVisible();
    console.log('✅ Login button is visible');
  });

  // TEST 5: Registration button should be visible
  test('Registration button should be visible', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(loginPage.registerButton).toBeVisible();
    console.log('✅ Registration button is visible');
  });

  // TEST 6: Valid login should redirect to dashboard
  test('Valid credentials should login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(VALID_EMAIL, VALID_PASSWORD);
    await page.waitForLoadState('networkidle');
    const currentURL = await loginPage.getCurrentURL();
    expect(currentURL).not.toContain('/login');
    console.log(`✅ Login successful — Redirected to: ${currentURL}`);
  });

  // TEST 7: Wrong credentials should fail
  test('Invalid credentials should not login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(WRONG_EMAIL, WRONG_PASSWORD);
    await page.waitForLoadState('networkidle');
    expect(page.url()).toContain('login');
    console.log('✅ Invalid login correctly blocked');
  });

  // TEST 8: Empty fields should not login
  test('Empty fields should not allow login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginButton.click();
    await page.waitForLoadState('networkidle');
    expect(page.url()).toContain('login');
    console.log('✅ Empty login correctly blocked');
  });

  // TEST 9: Login then logout
  test('Should login and then logout successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(VALID_EMAIL, VALID_PASSWORD);
    await page.waitForLoadState('networkidle');
    const urlAfterLogin = await loginPage.getCurrentURL();
    expect(urlAfterLogin).not.toContain('/login');
    console.log(`✅ Logged in — URL: ${urlAfterLogin}`);

    await loginPage.logout();
    await page.waitForLoadState('networkidle');
    const urlAfterLogout = await loginPage.getCurrentURL();
    expect(urlAfterLogout).toContain('login');
    console.log(`✅ Logged out — URL: ${urlAfterLogout}`);
  });

  // TEST 10: Take screenshot of login page
  test('Take screenshot of login page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await page.screenshot({
      path: 'screenshots/arsol-login.png',
      fullPage: true
    });
    console.log('✅ Screenshot saved!');
  });

});
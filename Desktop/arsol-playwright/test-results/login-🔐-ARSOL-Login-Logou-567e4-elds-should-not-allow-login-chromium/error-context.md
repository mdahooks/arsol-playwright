# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.test.js >> 🔐 ARSOL Login & Logout Tests >> Empty fields should not allow login
- Location: tests\login.test.js:80:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('button.login-btn')
    - locator resolved to <button disabled class="login-btn">Login</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    108 × waiting for element to be visible, enabled and stable
        - element is not enabled
      - retrying click action
        - waiting 500ms

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic:
    - generic [ref=e5]:
      - heading "PLEASE LOGIN" [level=2] [ref=e6]
      - generic [ref=e7]:
        - generic [ref=e8]: Email
        - textbox "Email address" [ref=e9]
      - generic [ref=e10]:
        - generic [ref=e11]: Password
        - generic [ref=e12]:
          - textbox "******" [ref=e13]
          - generic [ref=e14] [cursor=pointer]: 👁️‍🗨️
      - generic [ref=e15]:
        - checkbox "Remember login" [ref=e16]
        - generic [ref=e17]: Remember login
      - paragraph [ref=e18]: (If this is a private computer)
      - button "Login" [disabled] [ref=e19] [cursor=pointer]
      - button "Registration >>" [ref=e20] [cursor=pointer]
      - paragraph [ref=e21] [cursor=pointer]: Forgot Password ?
    - region "Notifications Alt+T"
```

# Test source

```ts
  1   | // ================================================
  2   | // tests/login.test.js
  3   | // ARSOL Login & Logout Tests
  4   | // ================================================
  5   | 
  6   | const { test, expect } = require('@playwright/test');
  7   | const { LoginPage } = require('../pages/LoginPage');
  8   | 
  9   | // ✅ Your real credentials
  10  | const VALID_EMAIL    = 'mohinidahooks@gmail.com';
  11  | const VALID_PASSWORD = 'hu0rx3qe';
  12  | const WRONG_EMAIL    = 'wronguser@gmail.com';
  13  | const WRONG_PASSWORD = 'wrongpassword123';
  14  | 
  15  | test.describe('🔐 ARSOL Login & Logout Tests', () => {
  16  | 
  17  |   // TEST 1: Login page should load
  18  |   test('Login page should load successfully', async ({ page }) => {
  19  |     const loginPage = new LoginPage(page);
  20  |     await loginPage.goto();
  21  |     const title = await loginPage.getTitle();
  22  |     expect(title.length).toBeGreaterThan(0);
  23  |     console.log(`✅ Login page loaded — Title: "${title}"`);
  24  |   });
  25  | 
  26  |   // TEST 2: Email field should be visible
  27  |   test('Email input field should be visible', async ({ page }) => {
  28  |     const loginPage = new LoginPage(page);
  29  |     await loginPage.goto();
  30  |     await expect(loginPage.emailInput).toBeVisible();
  31  |     console.log('✅ Email field is visible');
  32  |   });
  33  | 
  34  |   // TEST 3: Password field should be visible
  35  |   test('Password input field should be visible', async ({ page }) => {
  36  |     const loginPage = new LoginPage(page);
  37  |     await loginPage.goto();
  38  |     await expect(loginPage.passwordInput).toBeVisible();
  39  |     console.log('✅ Password field is visible');
  40  |   });
  41  | 
  42  |   // TEST 4: Login button should be visible
  43  |   test('Login button should be visible', async ({ page }) => {
  44  |     const loginPage = new LoginPage(page);
  45  |     await loginPage.goto();
  46  |     await expect(loginPage.loginButton).toBeVisible();
  47  |     console.log('✅ Login button is visible');
  48  |   });
  49  | 
  50  |   // TEST 5: Registration button should be visible
  51  |   test('Registration button should be visible', async ({ page }) => {
  52  |     const loginPage = new LoginPage(page);
  53  |     await loginPage.goto();
  54  |     await expect(loginPage.registerButton).toBeVisible();
  55  |     console.log('✅ Registration button is visible');
  56  |   });
  57  | 
  58  |   // TEST 6: Valid login should redirect to dashboard
  59  |   test('Valid credentials should login successfully', async ({ page }) => {
  60  |     const loginPage = new LoginPage(page);
  61  |     await loginPage.goto();
  62  |     await loginPage.login(VALID_EMAIL, VALID_PASSWORD);
  63  |     await page.waitForLoadState('networkidle');
  64  |     const currentURL = await loginPage.getCurrentURL();
  65  |     expect(currentURL).not.toContain('/login');
  66  |     console.log(`✅ Login successful — Redirected to: ${currentURL}`);
  67  |   });
  68  | 
  69  |   // TEST 7: Wrong credentials should fail
  70  |   test('Invalid credentials should not login', async ({ page }) => {
  71  |     const loginPage = new LoginPage(page);
  72  |     await loginPage.goto();
  73  |     await loginPage.login(WRONG_EMAIL, WRONG_PASSWORD);
  74  |     await page.waitForLoadState('networkidle');
  75  |     expect(page.url()).toContain('login');
  76  |     console.log('✅ Invalid login correctly blocked');
  77  |   });
  78  | 
  79  |   // TEST 8: Empty fields should not login
  80  |   test('Empty fields should not allow login', async ({ page }) => {
  81  |     const loginPage = new LoginPage(page);
  82  |     await loginPage.goto();
> 83  |     await loginPage.loginButton.click();
      |                                 ^ Error: locator.click: Test timeout of 60000ms exceeded.
  84  |     await page.waitForLoadState('networkidle');
  85  |     expect(page.url()).toContain('login');
  86  |     console.log('✅ Empty login correctly blocked');
  87  |   });
  88  | 
  89  |   // TEST 9: Login then logout
  90  |   test('Should login and then logout successfully', async ({ page }) => {
  91  |     const loginPage = new LoginPage(page);
  92  |     await loginPage.goto();
  93  |     await loginPage.login(VALID_EMAIL, VALID_PASSWORD);
  94  |     await page.waitForLoadState('networkidle');
  95  |     const urlAfterLogin = await loginPage.getCurrentURL();
  96  |     expect(urlAfterLogin).not.toContain('/login');
  97  |     console.log(`✅ Logged in — URL: ${urlAfterLogin}`);
  98  | 
  99  |     await loginPage.logout();
  100 |     await page.waitForLoadState('networkidle');
  101 |     const urlAfterLogout = await loginPage.getCurrentURL();
  102 |     expect(urlAfterLogout).toContain('login');
  103 |     console.log(`✅ Logged out — URL: ${urlAfterLogout}`);
  104 |   });
  105 | 
  106 |   // TEST 10: Take screenshot of login page
  107 |   test('Take screenshot of login page', async ({ page }) => {
  108 |     const loginPage = new LoginPage(page);
  109 |     await loginPage.goto();
  110 |     await page.screenshot({
  111 |       path: 'screenshots/arsol-login.png',
  112 |       fullPage: true
  113 |     });
  114 |     console.log('✅ Screenshot saved!');
  115 |   });
  116 | 
  117 | });
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.test.js >> 🔐 ARSOL Login & Logout Tests >> Should login and then logout successfully
- Location: tests\login.test.js:90:3

# Error details

```
TypeError: url.includes is not a function
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - banner [ref=e4]:
      - generic [ref=e7]:
        - generic [ref=e8]:
          - img "ARSOL Logo" [ref=e10]
          - button "Menu" [ref=e12] [cursor=pointer]:
            - img "Menu" [ref=e13]
        - generic [ref=e14]:
          - generic [ref=e15]:
            - generic [ref=e16]:
              - img "User" [ref=e17]
              - generic [ref=e18]: Welcome mohini sharma
            - generic [ref=e19]:
              - img "Clock" [ref=e20]
              - generic [ref=e21]:
                - generic [ref=e22]: Thu 05/07/2026
                - generic [ref=e23]: "|"
                - generic [ref=e24]: 10.28 AM
            - generic [ref=e25]:
              - button "Menu" [ref=e26] [cursor=pointer]:
                - img "Menu" [ref=e27]
              - generic [ref=e28]:
                - button "Edit Company Details" [ref=e29] [cursor=pointer]
                - button "Change Password" [ref=e30] [cursor=pointer]
                - button "Bank Details" [ref=e31] [cursor=pointer]
                - button "Manage Subscription" [ref=e32] [cursor=pointer]
                - button "Logout" [active] [ref=e34] [cursor=pointer]
          - generic [ref=e36]:
            - generic [ref=e37]: "!"
            - heading "Are you sure ?" [level=3] [ref=e38]
            - paragraph [ref=e39]: You will be redirected to Login page!
            - generic [ref=e40]:
              - button "No, please!" [ref=e41] [cursor=pointer]
              - button "Yes, Logout!" [ref=e42] [cursor=pointer]
    - generic [ref=e43]:
      - list [ref=e46]:
        - listitem [ref=e47]:
          - link "DASHBOARD" [ref=e48] [cursor=pointer]:
            - /url: /
        - listitem [ref=e49]:
          - link "ITEM DETAILS" [ref=e50] [cursor=pointer]:
            - /url: /items
        - listitem [ref=e51]:
          - link "CUSTOMER DETAILS" [ref=e52] [cursor=pointer]:
            - /url: /customer
        - listitem [ref=e53]:
          - generic [ref=e54] [cursor=pointer]:
            - generic [ref=e55]: CREATE
            - generic [ref=e56]: <
        - listitem [ref=e57]:
          - generic [ref=e58] [cursor=pointer]:
            - generic [ref=e59]: LIST
            - generic [ref=e60]: <
        - listitem [ref=e61]:
          - generic [ref=e62] [cursor=pointer]:
            - generic [ref=e63]: REPORTS
            - generic [ref=e64]: <
        - listitem [ref=e65]:
          - link "USER DETAILS" [ref=e66] [cursor=pointer]:
            - /url: /users
        - listitem [ref=e67]:
          - link "USER ROLES" [ref=e68] [cursor=pointer]:
            - /url: /roles
        - listitem [ref=e69]:
          - link "INVOICE TEMPLATES" [ref=e70] [cursor=pointer]:
            - /url: /templates
        - listitem [ref=e71]:
          - link "SUPPORT" [ref=e72] [cursor=pointer]:
            - /url: /support
      - generic [ref=e74]:
        - generic [ref=e77]:
          - heading "Welcome to ARSOL" [level=2] [ref=e78]
          - paragraph [ref=e79]:
            - text: A Complete
            - strong [ref=e80]: AR Solution
            - text: .
        - generic [ref=e81]:
          - generic [ref=e84]:
            - img "All Invoices" [ref=e85]
            - link "All Invoices" [ref=e86] [cursor=pointer]:
              - /url: /list/invoice
              - heading "All Invoices" [level=3] [ref=e87]
            - 'heading "Total Invoice: 2" [level=4] [ref=e88]'
          - generic [ref=e91]:
            - img "All Estimates" [ref=e92]
            - link "All Estimates" [ref=e93] [cursor=pointer]:
              - /url: /list/estimate
              - heading "All Estimates" [level=3] [ref=e94]
            - 'heading "Total Estimate: 9" [level=4] [ref=e95]'
          - generic [ref=e98]:
            - img "All Credit Note" [ref=e99]
            - link "All Credit Note" [ref=e100] [cursor=pointer]:
              - /url: /list/credit-note
              - heading "All Credit Note" [level=3] [ref=e101]
            - 'heading "Total Credit Note: 2" [level=4] [ref=e102]'
          - generic [ref=e105]:
            - img "Total Sale" [ref=e106]
            - heading "Total Sale" [level=3] [ref=e107]
            - 'heading "(Current Month): ₹ 0.00" [level=4] [ref=e108]'
          - generic [ref=e111]:
            - img "All Items" [ref=e112]
            - link "All Items" [ref=e113] [cursor=pointer]:
              - /url: /items
              - heading "All Items" [level=3] [ref=e114]
            - 'heading "Item(s) Created: 4" [level=4] [ref=e115]'
          - generic [ref=e118]:
            - img "All Customers" [ref=e119]
            - link "All Customers" [ref=e120] [cursor=pointer]:
              - /url: /customer
              - heading "All Customers" [level=3] [ref=e121]
            - 'heading "Customer(s) Created: 3" [level=4] [ref=e122]'
          - generic [ref=e124]:
            - heading "Customer & Item" [level=3] [ref=e125]
            - generic [ref=e126]:
              - generic [ref=e127] [cursor=pointer]:
                - paragraph [ref=e128]: +
                - text: Add Customer
              - generic [ref=e129] [cursor=pointer]:
                - paragraph [ref=e130]: +
                - text: Add Item
        - generic [ref=e131]:
          - generic [ref=e132]:
            - generic [ref=e133]: Monthly Invoice Total
            - img [ref=e136]
          - generic [ref=e137]:
            - generic [ref=e138]: Download Links
            - generic [ref=e139]:
              - heading "Links" [level=4] [ref=e141]
              - generic [ref=e142]:
                - generic [ref=e143]: User Manual to synchronize data to Tally
                - generic [ref=e144]:
                  - text: "*"
                  - link "Click Here to Download User Manual" [ref=e145] [cursor=pointer]:
                    - /url: ../PDF/Procedure.pdf
              - generic [ref=e146]:
                - generic [ref=e147]: Application to synchronize data to Tally
                - generic [ref=e148]:
                  - text: "*"
                  - link "Click Here to Download Application" [ref=e149] [cursor=pointer]:
                    - /url: ../PDF/TallySyncSetup.zip
                - generic [ref=e150]: "(Note : Please Unzip the download. Install and run as an administrator)"
    - contentinfo [ref=e151]: © ARSOL, 2026-27
  - region "Notifications Alt+T"
```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | 
  3  | class LoginPage {
  4  | 
  5  |   constructor(page) {
  6  |     this.page = page;
  7  |     this.emailInput     = page.locator('input[name="email"]');
  8  |     this.passwordInput  = page.locator('input[type="password"]');
  9  |     this.loginButton    = page.locator('button.login-btn');
  10 |     this.registerButton = page.locator('button.register-btn');
  11 |     this.userMenuButton = page.locator('button[title="User Menu"]');
  12 |     this.logoutButton   = page.locator('button.dropdown-item.text-danger');
  13 |   }
  14 | 
  15 |   async goto() {
  16 |     await this.page.goto('https://uat-arsol.taction.in/login');
  17 |     await this.page.waitForLoadState('domcontentloaded');
  18 |     await this.page.waitForTimeout(2000);
  19 |   }
  20 | 
  21 |   async login(email, password) {
  22 |     // Clear and fill email
  23 |     await this.emailInput.click();
  24 |     await this.emailInput.clear();
  25 |     await this.emailInput.fill(email);
  26 |     await this.page.waitForTimeout(500);
  27 | 
  28 |     // Clear and fill password
  29 |     await this.passwordInput.click();
  30 |     await this.passwordInput.clear();
  31 |     await this.passwordInput.fill(password);
  32 |     await this.page.waitForTimeout(500);
  33 | 
  34 |     // Wait for button to be enabled then click
  35 |     await expect(this.loginButton).toBeEnabled({ timeout: 10000 });
  36 |     
  37 |     // ✅ Click and listen for network response at same time
  38 |     const [response] = await Promise.all([
  39 |       this.page.waitForResponse(
  40 |         res => res.url().includes('/login') && res.request().method() === 'POST',
  41 |         { timeout: 15000 }
  42 |       ).catch(() => null),
  43 |       this.loginButton.click()
  44 |     ]);
  45 | 
  46 |     if (response) {
  47 |       console.log('🌐 Login API response status:', response.status());
  48 |       const body = await response.text().catch(() => 'could not read body');
  49 |       console.log('🌐 Login API response body:', body.substring(0, 200));
  50 |     }
  51 | 
  52 |     // Wait for redirect
  53 |     await this.page.waitForTimeout(3000);
  54 |     console.log('🔍 URL after login:', this.page.url());
  55 |   }
  56 | 
  57 |   async logout() {
  58 |     await this.userMenuButton.click();
  59 |     await this.page.waitForTimeout(500);
  60 |     await this.logoutButton.click();
> 61 |     await this.page.waitForURL(url => url.includes('/login'), { timeout: 15000 });
     |                                           ^ TypeError: url.includes is not a function
  62 |   }
  63 | 
  64 |   async getTitle() {
  65 |     return await this.page.title();
  66 |   }
  67 | 
  68 |   async getCurrentURL() {
  69 |     return this.page.url();
  70 |   }
  71 | }
  72 | 
  73 | module.exports = { LoginPage };
```
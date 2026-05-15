// ================================================
// tests/Registration.test.js
// ARSOL Registration Form Tests
// ================================================

const { test, expect } = require('@playwright/test');

test.describe('📝 ARSOL Registration Form Tests', () => {

  // TEST 1: Registration page should open
  test('Registration page should open successfully', async ({ page }) => {

    await page.goto('https://uat-arsol.taction.in/login');

    await page.getByRole('button', { name: 'Registration >>' }).click();

    await expect(page.getByText('First Name *')).toBeVisible();

    console.log('✅ Registration page opened successfully');

  });

  // TEST 2: Validation messages should appear for empty fields
  test('Mandatory field validation should work', async ({ page }) => {

    await page.goto('https://uat-arsol.taction.in/login');

    await page.getByRole('button', { name: 'Registration >>' }).click();

    await page.getByRole('button', { name: 'Next' }).click();

    await expect(page.getByText('First name is required')).toBeVisible();

    await expect(page.getByText('Last name is required')).toBeVisible();

    await expect(page.getByText('Email is required')).toBeVisible();

    console.log('✅ Validation messages displayed successfully');

  });

  // TEST 3: User should enter personal details successfully
  test('User should fill personal details successfully', async ({ page }) => {

    await page.goto('https://uat-arsol.taction.in/login');

    await page.getByRole('button', { name: 'Registration >>' }).click();

    await page.getByRole('textbox', { name: 'John' }).fill('Mohini');

    await page.getByRole('textbox', { name: 'Doe' }).fill('Sharma');

    await page
      .getByRole('textbox', { name: 'example@domain.com' })
      .fill('mohini920123@gmail.com');

    console.log('✅ Personal details entered successfully');

  });

  // TEST 4: User should navigate to organization details section
  test('User should navigate to organization details section', async ({ page }) => {

    await page.goto('https://uat-arsol.taction.in/login');

    await page.getByRole('button', { name: 'Registration >>' }).click();

    await page.getByRole('textbox', { name: 'John' }).fill('Mohini');

    await page.getByRole('textbox', { name: 'Doe' }).fill('Sharma');

    await page
      .getByRole('textbox', { name: 'example@domain.com' })
      .fill('mohini920123@gmail.com');

    await page.getByRole('button', { name: 'Next' }).click();

    await expect(page.getByText('Pan Card No. *')).toBeVisible();

    console.log('✅ Navigated to organization details section');

  });

  // TEST 5: Organization fields should be visible
  test('Organization fields should be visible', async ({ page }) => {

    await page.goto('https://uat-arsol.taction.in/login');

    await page.getByRole('button', { name: 'Registration >>' }).click();

    await page.getByRole('textbox', { name: 'John' }).fill('Mohini');

    await page.getByRole('textbox', { name: 'Doe' }).fill('Sharma');

    await page
      .getByRole('textbox', { name: 'example@domain.com' })
      .fill('mohini920123@gmail.com');

    await page.getByRole('button', { name: 'Next' }).click();

    await expect(page.getByText('Pan Card No. *')).toBeVisible();

    await expect(page.getByText('GST Number (Optional)')).toBeVisible();

    await expect(page.getByText('Organization Name *')).toBeVisible();

    console.log('✅ Organization fields are visible');

  });

  // TEST 6: Constitution dropdown should work
  test('Constitution dropdown should select values successfully', async ({ page }) => {

    await page.goto('https://uat-arsol.taction.in/login');

    await page.getByRole('button', { name: 'Registration >>' }).click();

    await page.getByRole('textbox', { name: 'John' }).fill('Mohini');

    await page.getByRole('textbox', { name: 'Doe' }).fill('Sharma');

    await page
      .getByRole('textbox', { name: 'example@domain.com' })
      .fill('mohini920123@gmail.com');

    await page.getByRole('button', { name: 'Next' }).click();

    const constitutionDropdown = page.getByRole('combobox');

    await constitutionDropdown.selectOption('Proprietorship');

    await constitutionDropdown.selectOption('Partnership');

    await constitutionDropdown.selectOption('LLP');

    await constitutionDropdown.selectOption('Private Limited');

    await constitutionDropdown.selectOption('Public Limited');

    console.log('✅ Constitution dropdown working successfully');

  });

  // TEST 7: Bank detail fields should be editable
  test('Bank detail fields should be editable', async ({ page }) => {

    await page.goto('https://uat-arsol.taction.in/login');

    await page.getByRole('button', { name: 'Registration >>' }).click();

    await page.getByRole('textbox', { name: 'John' }).fill('Mohini');

    await page.getByRole('textbox', { name: 'Doe' }).fill('Sharma');

    await page
      .getByRole('textbox', { name: 'example@domain.com' })
      .fill('mohini920123@gmail.com');

    await page.getByRole('button', { name: 'Next' }).click();

    await page.getByRole('textbox', { name: 'Bank Name' }).click();

    await page.getByRole('textbox', { name: 'Account Name' }).click();

    await page.getByRole('textbox', { name: 'Account Number' }).click();

    await page.getByRole('textbox', { name: 'IFSC Code' }).click();

    console.log('✅ Bank detail fields are editable');

  });

  // TEST 8: PAN Card field should be editable
  test('PAN Card field should be editable', async ({ page }) => {

    await page.goto('https://uat-arsol.taction.in/login');

    await page.getByRole('button', { name: 'Registration >>' }).click();

    await page.getByRole('textbox', { name: 'John' }).fill('Mohini');

    await page.getByRole('textbox', { name: 'Doe' }).fill('Sharma');

    await page
      .getByRole('textbox', { name: 'example@domain.com' })
      .fill('mohini920123@gmail.com');

    await page.getByRole('button', { name: 'Next' }).click();

    await page
      .getByRole('textbox', { name: 'AAAAA0000A', exact: true })
      .click();

    console.log('✅ PAN Card field is editable');

    await page.waitForTimeout(5000);

  });

});
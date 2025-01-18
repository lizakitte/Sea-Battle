const { test, expect } = require('@playwright/test');

test('has link do login page', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  // Symulacja kliknięcia na link z tekstem login, przejście do strony logowania
  await page.click("text=Login");
  // Sprawdzenie, czy została otwarta strona ze ścieżką do formularza logowania
  await expect(page).toHaveURL('http://localhost:3000/user/signin');
  // Sprawdzenie, czy na stronie logowania jest nagłówek z tekstem Login to App
  await expect(page.locator('h2')).toContainText('Log into your account');
});
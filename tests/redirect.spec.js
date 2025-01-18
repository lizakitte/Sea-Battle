const { test, expect } = require('@playwright/test');

test('redirect to login', async ({ page }) => {
    await page.goto('http://localhost:3000');
    // Symulacja kliknięcia na link z tekstem login, przejście do strony logowania
    await page.click("text=Profile");
    // Sprawdzenie, czy została otwarta strona ze ścieżką do formularza logowania
    await expect(page).toHaveURL('http://localhost:3000/user/signin?returnUrl=/user/profile');
  });
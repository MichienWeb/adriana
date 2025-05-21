const { test, expect } = require('@playwright/test');

test('Envío válido do formulario', async ({ page }) => {
  await page.goto('http://localhost/adriana/index.php');

  await page.fill('input[name="nome"]', 'Ana');
  await page.fill('input[name="email"]', 'ana@example.com');
  await page.fill('textarea[name="mensaxe"]', 'Proba automatizada');

  await page.click('button[type="submit"]');

  await expect(page.locator('#confirmacion')).toContainText('Mensaxe enviada correctamente');
});


test('Envío baleiro do formulario', async ({ page }) => {
  // Abrir a páxina
  await page.goto('http://localhost/adriana/index.php');

  // Premer o botón de envío sen encher o formulario
  await page.click('button[type="submit"]');

  // Verificar que aparecen as mensaxes de erro de Bootstrap
  await expect(page.locator('#nome ~ .invalid-feedback')).toBeVisible();
  await expect(page.locator('#email ~ .invalid-feedback')).toBeVisible();
  await expect(page.locator('#mensaxe ~ .invalid-feedback')).toBeVisible();
});


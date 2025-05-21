const { test, expect } = require('@playwright/test');

test('Envío válido do formulario', async ({ page }) => {
  await page.goto('http://localhost/probas-despregue/index.php');

  await page.fill('input[name="nome"]', 'Ana');
  await page.fill('input[name="email"]', 'ana@example.com');
  await page.fill('textarea[name="mensaxe"]', 'Proba automatizada');

  await page.click('button[type="submit"]');

  await expect(page.locator('#confirmacion')).toContainText('Mensaxe enviada correctamente');
});

test('Envío baleiro do formulario', async ({ page }) => {
  await page.goto('http://localhost/probas-despregue/index.php');

  // Forzar a eliminación de validación no cliente
  await page.evaluate(() => {
    const form = document.querySelector('form');
    form.removeAttribute('novalidate');
    form.noValidate = true;
  });

  // Forzar envío aínda que os campos estean baleiros
  await page.$eval('form', form => form.submit());

  // Agardar polos erros xerados polo servidor
  await expect(page.locator('.erro')).toBeVisible();
});

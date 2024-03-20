import {test, expect} from '@playwright/test';

test('has title', async ({page}) => {
    await page.goto('http://127.0.0.1:3000');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Hexa Space App/);
});

test('get space ship link', async ({page}) => {
    await page.goto('http://127.0.0.1:3000');

    // Click the get started link.
    await page.getByRole('link', {name: 'space ships'}).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', {name: 'Space Ships'})).toBeVisible();
});

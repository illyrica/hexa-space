import {test, expect} from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('General', () => {
    test('Index page should not have any automatically detectable accessibility issues', async ({page}) => {
        await page.goto('/');

        const accessibilityScanResults = await new AxeBuilder({page}).analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('Ships Page should not have any automatically detectable accessibility issues', async ({page}) => {
        await page.goto('/ships');

        const accessibilityScanResults = await new AxeBuilder({page}).analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });
});

test.describe('Specific part', () => {
    test('Header should not have any automatically detectable accessibility issues', async ({page}) => {
        await page.goto('/ships');

        const accessibilityScanResults = await new AxeBuilder({page}).include('header').analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });
});



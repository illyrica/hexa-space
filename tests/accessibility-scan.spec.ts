import {test, expect} from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Index page', () => {
    test('should not have any automatically detectable accessibility issues', async ({page}) => {
        await page.goto('/');

        const accessibilityScanResults = await new AxeBuilder({page}).analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });
});

test.describe('Space ships page', () => {
    test('should not have any automatically detectable accessibility issues', async ({page}) => {
        await page.goto('/ships');

        const accessibilityScanResults = await new AxeBuilder({page}).analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });
});

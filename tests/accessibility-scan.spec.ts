import {test, expect} from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Accessibility Scan for', () => {
    test('Index page', async ({page}) => {
        await page.goto('/');

        const accessibilityScanResults = await new AxeBuilder({page}).analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('Ships Page', async ({page}) => {
        await page.goto('/ships');

        const accessibilityScanResults = await new AxeBuilder({page}).analyze();


        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('Header', async ({page}) => {
        await page.goto('/ships');

        const accessibilityScanResults = await new AxeBuilder({page}).include('header').analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });

    //https://github.com/dequelabs/axe-core/blob/master/doc/API.md#axe-core-tags
    test('Ships Page with Best Practices Tag', async ({page}) => {
        await page.goto('/ships');

        const accessibilityScanResults = await new AxeBuilder({page}).withTags(['best-practice']).analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });

    //https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md
    test('Ships Page disable color-contrast rule', async ({page}) => {
        await page.goto('/ships');

        const accessibilityScanResults = await new AxeBuilder({page}).disableRules(['color-contrast']).analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });
});





import { expect, test } from '@playwright/test';

test('Index Page', async ({ page }) => {
	await page.goto('/');

	const titleCount = await page.getByRole('heading', { name: 'Sanction Scan' }).count();
	expect(titleCount).toBeGreaterThan(0);

	const homeLinkCount = await page.getByRole('link', { name: 'Home' }).count();
	expect(homeLinkCount).toBeGreaterThan(0);

	await page.getByRole('link', { name: 'Home' }).click();
	await expect(page).toHaveURL('/');

	const getStartedButtonCount = await page.getByRole('link', { name: 'GET STARTED' }).count();
	expect(getStartedButtonCount).toBeGreaterThan(0);
});

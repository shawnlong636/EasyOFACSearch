import Header from './header.svelte';
import { render, screen, cleanup } from '@testing-library/svelte';
import { describe, test, expect, afterEach } from 'vitest';

/**
 * @vitest-environment jsdom
 */

describe('Logo Component', () => {
	afterEach(() => {
		cleanup();
	});

	test('contains Logo and Title', () => {
		render(Header);
		const title = screen.queryByText('Sanction Scan');
		expect(title).toBeTruthy();

		const svg = screen.queryAllByRole('svg');
		expect(svg).toBeTruthy();

		const links = screen.queryAllByRole('link');
		expect(links.length).toEqual(4);
	});
});

import Logo from './logo.svelte';
import { render, screen, cleanup } from '@testing-library/svelte';
import { describe, test, expect, afterEach } from 'vitest';

/**
 * @vitest-environment jsdom
 */

describe('Logo Component', () => {
	afterEach(() => {
		cleanup();
	});

	test('Shows text by default', () => {
		render(Logo);
		const title = screen.queryByText('Sanction Scan');
		expect(title).toBeTruthy();
	});

	test('Hidden text when specified', () => {
		render(Logo, { showText: false });

		const title = screen.queryByText('Sanction Scan');
		expect(title).toBeFalsy();
	});
});

<script lang="ts">
	import Logo from './logo.svelte';
	import type Link from '../lib/models/link';

	const headerLinks: Array<Link> = [
		{ name: 'Home', destination: '/' },
		{ name: 'About', destination: '/' },
		{ name: 'My Account', destination: '/' }
	];
</script>

<div class="grid grid-flow-col justify-items-start items-center">
	<Logo />

	{#each headerLinks as link}
		<a
			class="justify-self-center hover:text-sky-700 transition duration-150"
			href={link.destination}>{link.name}</a
		>
	{/each}

	<a
		href="/search"
		class="justify-self-end border-slate-400 border rounded text-sm font-bold uppercase px-4 py-1 text-slate-900 shadow-sm hover:bg-gray-100 active:bg-slate-200 transition duration-150 ease-in-out"
	>
		get started
	</a>
</div>

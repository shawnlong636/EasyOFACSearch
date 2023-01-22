<script>
	import '../app.postcss';
	import Header from './header.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
</svelte:head>

<div class="grid min-w-full min-h-full py-2 px-5">
	<Header />
	<slot />
</div>

<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	import "$lib/styles/Reset.css";

	let { children } = $props();
	const fontCrossorigin: '' = '';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<!-- Satoshi font -->
	<link rel="preconnect" href="https://api.fontshare.com">
	<link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap" rel="stylesheet">

	<!-- Inter font -->
	<link rel="preconnect" href="https://fonts.bunny.net/">
	<link rel="preconnect" href="https://fonts.bunny.net/" crossorigin={fontCrossorigin}>
	<link href="https://fonts.bunny.net//css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
</svelte:head>

{@render children()}

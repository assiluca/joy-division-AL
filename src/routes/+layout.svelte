<script lang="ts">
	import { env } from '$env/dynamic/public';
	import favicon from '$lib/assets/favicon.svg';

	import "$lib/styles/reset.css";
	import "$lib/styles/tokens.css";

	let { children } = $props();
	const fontCrossorigin: '' = '';
	const adobeKitId = env.PUBLIC_ADOBE_KIT_ID?.trim() || 'him7igw';
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

	<!-- Cormorant Garamond font -->
	<link rel="preconnect" href="https://fonts.bunny.net/">
	<link rel="preconnect" href="https://fonts.bunny.net/" crossorigin={fontCrossorigin}>
	<link href="https://fonts.bunny.net/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">

	{#if adobeKitId}
		<!-- Adobe Fonts kit for Trajan Pro 3 -->
		<link rel="stylesheet" href={`https://use.typekit.net/${adobeKitId}.css`}>
	{/if}
</svelte:head>

{@render children()}

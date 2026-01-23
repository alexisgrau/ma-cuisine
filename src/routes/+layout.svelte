<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	
	// AJOUT 1 : Importer les outils nécessaires
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { navigationState } from '$lib/stores/navigationState';

	let { children } = $props();
	
	onMount(() => {
		const saved = $navigationState;
		if (saved && saved.path && saved.path !== $page.url.pathname) {
			const heuresEcoulees = (Date.now() - saved.timestamp) / (1000 * 60 * 60);			
			if (heuresEcoulees < 24) {
				goto(saved.path); 
			} else {
				navigationState.clear();
			}
		}
	});

	let timeout:NodeJS.Timeout|null = null;

	$effect(() => {
		if(timeout){
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => {
			if ($page.url.pathname) {
				navigationState.saveRoute($page.url.pathname);
			}
		}, 500);
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
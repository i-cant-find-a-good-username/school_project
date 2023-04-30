<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import  { active_page } from '../store'

	import Global from  '../lib/icons/global.svelte';
	import Home from  '../lib/icons/home.svelte';
	import List from  '../lib/icons/list.svelte';
	import Profile from  '../lib/icons/profile.svelte';

</script>
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<!-- App Bar -->
		<AppRail selected={active_page}>
			<AppRailTile label="Home Page" value={0} on:click={() => {active_page.update(n => 0)}} >
				<Global/>
			</AppRailTile>
			<AppRailTile label="Notes" value={1} on:click={() => {active_page.update(n => 1)}} >
				<Home/>
			</AppRailTile>
			<AppRailTile label="Global" value={2} on:click={() => {active_page.update(n => 2)}} >
				<List/>
			</AppRailTile>
			<AppRailTile label="Profile" value={3} on:click={() => {active_page.update(n => 3)}}  slot='trail' >
				<Profile />
			</AppRailTile>
		</AppRail>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot/>
</AppShell>

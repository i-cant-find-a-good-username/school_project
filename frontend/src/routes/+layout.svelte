<script lang='ts'>
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import  { active_page } from '../store'
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import Global from  '../lib/icons/global.svelte';
	import Home from  '../lib/icons/home.svelte';
	import List from  '../lib/icons/list.svelte';
	import Profile from  '../lib/icons/profile.svelte';


	let popupSettings: PopupSettings = {
		event: 'click',
		target: 'examplePopup'
	};

</script>
<!-- App Shell -->
<AppShell>

	<div class="card variant-filled-secondary p-4" data-popup="examplePopup">
		Some text goes here.
		<!-- Append the arrow element -->
		<div class="arrow variant-filled-secondary" />
	</div>
	
	<svelte:fragment slot="sidebarLeft">
		<!-- App Bar -->
		<AppRail selected={active_page}>
			<AppRailTile label="Home Page" value={0}>
				<Global/>
			</AppRailTile>
			<AppRailTile label="Notes" value={1}>
				<Home/>
			</AppRailTile>
			<AppRailTile label="Global" value={2}>
				<List/>
			</AppRailTile>
			<AppRailTile label="Profile" slot='trail' value={3}>
				<Profile/>
			</AppRailTile>
		</AppRail>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot/>
</AppShell>

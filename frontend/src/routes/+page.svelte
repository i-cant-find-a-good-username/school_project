<script lang='ts'>
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import  { active_page } from '../store'
	import Global from  '../lib/icons/global.svelte';
	import Home from  '../lib/icons/home.svelte';
	import List from  '../lib/icons/list.svelte';
	import Profile from  '../lib/icons/profile.svelte';

	import Main from  './components/main.svelte';



</script>
<!-- App Shell -->
<AppShell>

	
	<svelte:fragment slot="sidebarLeft">
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
	<!-- authenticatio nhere -->
	<Main />
</AppShell>
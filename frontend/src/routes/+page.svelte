<script lang='ts'>



	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';

	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppRail, AppShell, AppRailTile, Modal, modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import { active_page } from '../stores/page_store'
    import {set_theme} from '../stores/theme_store'

	import Theme_modal from './modals/Theme.svelte';
	import Global from '../lib/icons/global.svelte';
	import Home from '../lib/icons/home.svelte';
	import List from '../lib/icons/list.svelte';
	import Profile from '../lib/icons/profile.svelte';
	import Theme from '../lib/icons/theme.svelte';
	import Main from './components/main.svelte';




	const modalComponentRegistry: Record<string, ModalComponent> = {

		// Custom Modal 1
		Theme_modal: {
			ref: Theme_modal,
			props: { background: 'bg-red-500' },
			slot: '<p>Skeleton</p>'
		},

	};

	const modal: ModalSettings = {
		type: 'component',
		component: 'Theme_modal',
	};




	let themes_modal = false
	const toggle_themes = () => {
		themes_modal = !themes_modal
		set_theme('crimson')
		modalStore.trigger(modal);
	}
	const ff = () => {
		themes_modal = false
	}
	let is_logged_in = false






</script>
<!-- App Shell -->
<!-- svelte-ignore a11y-click-events-have-key-events -->



<AppShell>
	<Modal components={modalComponentRegistry} on:backdrop={ff} />
	<svelte:fragment slot="sidebarLeft">
		<AppRail selected={active_page}>
			<AppRailTile label="Home Page" value={0}  >
				<Global/>
			</AppRailTile>
			<AppRailTile label="Notes" value={1}>
				<Home/>
			</AppRailTile>
			<AppRailTile label="Global" value={2}>
				<List/>
			</AppRailTile>
				<div class='w-full aspect-square flex flex-col items-center justify-center' on:click={toggle_themes}>
					{#if themes_modal}
						<button class="app-rail-tile unstyled grid place-content-center place-items-center w-full aspect-square space-y-1.5 cursor-pointer bg-primary-hover-token bg-primary-active-token ">
							<div class="app-rail-tile-icon ">
								<Theme/>
							</div>
							<div class="app-rail-tile-label font-bold text-xs text-center ">Themes</div>
						</button>
					{:else}
						<button class="app-rail-tile unstyled grid place-content-center place-items-center w-full aspect-square space-y-1.5 cursor-pointer bg-primary-hover-token  ">
							<div class="app-rail-tile-icon ">
								<Theme/>
							</div>
							<div class="app-rail-tile-label font-bold text-xs text-center ">Themes</div>
						</button>
					{/if}
				</div>
			<AppRailTile label="Profile" slot='trail' value={3}>
				<Profile/>
			</AppRailTile>
		</AppRail>
	</svelte:fragment>
	<Main />
</AppShell>




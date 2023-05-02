<script lang='ts'>



	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';

	import ModalComponentOne from  './test/ModalComponentOne.svelte';
	import ModalComponentTwo from  './test/ModalComponentTwo.svelte';

	const modalComponentRegistry: Record<string, ModalComponent> = {

		// Custom Modal 1
		modalComponentOne: {
			// Pass a reference to your custom component
			ref: ModalComponentOne,
			// Add the component properties as key/value pairs
			props: { background: 'bg-red-500' },
			// Provide a template literal for the default component slot
			slot: '<p>Skeleton</p>'
		},

		// Custom Modal 2
		modalComponentTwo: { ref: ModalComponentTwo },

		// ...
	};

	const d: ModalSettings = {
		type: 'component',
		// Pass the component registry key as a string:
		component: 'modalComponentOne',
	};
	const d2: ModalSettings = {
		type: 'component',
		// Pass the component registry key as a string:
		component: 'modalComponentOne',
	};
	const alert: ModalSettings = {
		type: 'alert',
		// Data
		title: 'Example Alert',
		body: 'This is an example modal.',
		image: 'https://i.imgur.com/WOgTG96.gif',
	};
	const prompt: ModalSettings = {
		type: 'prompt',
		// Data
		title: 'Enter Name',
		body: 'Provide your first name in the field below.',
		// Populates the input value and attributes
		value: 'Skeleton',
		valueAttr: { type: 'text', minlength: 3, maxlength: 10, required: true },
		// Returns the updated response value
		response: (r: string) => console.log('response:', r),
	};

	//if (true) {
	//	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	//} else if (false) {
	//	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	//} else if (false) {
	//	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	//} else if (false) {
	//	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	//} else if (false) {
	//	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	//} else if (false) {
	//	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	//} else if (false) {
	//	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	//} else if (false) {
	//	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	//}else{
	//	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	//}


	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import  { active_page } from '../page_store'
	import Global from  '../lib/icons/global.svelte';
	import Home from  '../lib/icons/home.svelte';
	import List from  '../lib/icons/list.svelte';
	import Profile from  '../lib/icons/profile.svelte';
	import Theme from  '../lib/icons/theme.svelte';

	import Main from  './components/main.svelte';
    import {set_theme} from '../theme_store'


	let themes_modal = false
	const toggle_themes = () => {
		themes_modal = !themes_modal
		set_theme('crimson')
		modalStore.trigger(d);
		themes_modal = false

	}
	const ff = () => {
		console.log('rfe')
	}
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
	<!-- authenticatio nhere -->
	<Main />
</AppShell>
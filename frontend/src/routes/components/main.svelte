<script lang='ts'>

	import Home from './home.svelte'
	import Notes from './notes.svelte'
	import Global from './global.svelte'
	import Teacher from './teacher.svelte'
	import { active_page } from '../../page_store'
	import { user, set_user } from '../../user_store'
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
	import type { Data } from '../../types';




	let page: number
	active_page.subscribe(value => {
		page = value;
	});

	let gg: Data
	user.subscribe(user => {
		gg = user;
	});

	onMount(() => {
		let user_data = localStorage.getItem('user_data')
		let token = localStorage.getItem('token')
		if (user_data && token){
			set_user({
				user_data: JSON.parse(user_data),
				token: token,
			})
		}
	})


</script>



<div class="h-screen p-4 flex flex-col">
	<div class='overflow-auto h-full m-4'>
			{#if page === 0}
				<Home/>
			{:else if  page === 1}
				<Notes/>
			{:else if  page === 2}
				<Global/>
			{:else if  page === 3}
				<Teacher/>
			{/if}
	</div>
</div>

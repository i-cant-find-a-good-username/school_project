<script lang='ts'>

	import Home from './home.svelte'
	import Notes from './notes.svelte'
	import Global from './global.svelte'
	import Teacher from './teacher.svelte'
	import Profile from './profile.svelte'
	import { active_page } from '../../stores/page_store'
	import { user, set_user } from '../../stores/user_store'
	import type { Data } from '../../types';




	let page: number
	active_page.subscribe(value => {
		page = value;
	});

	let user_data: Data
	user.subscribe(user => {
		user_data = user;
	});



</script>



<div class="h-screen p-4 flex flex-col">
	<div class='overflow-auto h-full m-4'>
			{#if page === 0}
				<Home/>
			{:else if  page === 1}
				{#if user_data.user_data.role === "student"}
					<Notes/>
				{:else}
					<Teacher/>
				{/if}
			{:else if  page === 2}
				<Global/>
			{:else if  page === 3}
				<Profile/>
			{/if}
	</div>
</div>

<script lang='ts'>

	import Home from './home.svelte'
	import Notes from './notes.svelte'
	import Global from './global.svelte'
	import Teacher from './teacher.svelte'
	import  { active_page } from '../../store'
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
	let page = 0
	active_page.subscribe(value => {
		page = value;
	});
	let mm: string | null

	onMount(() => {
		if (localStorage.getItem('token')){
			mm = localStorage.getItem('token')
		}else{
			goto(`/login`);
		}
	})

</script>

{mm}
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

<script lang='ts'>

	import Home from './components/home.svelte'
	import Notes from './components/notes.svelte'
	import Global from './components/global.svelte'
	import Teacher from './components/teacher.svelte'
	import  { active_page } from '../store'
	let page = 0
	active_page.subscribe(value => {
		page = value;
	});
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
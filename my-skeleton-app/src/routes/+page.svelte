<script lang='ts'>

	import Home from './home/+page.svelte'
	import Notes from './notes/+page.svelte'
	import  { active_page } from '../store'
	let page = 0
	active_page.subscribe(value => {
		page = value;
	});
</script>


<div class="h-full p-4">

	if here {page}
	{#if page === 0}
		<Home/>
	{:else if  page === 1}
		<Notes/>
	{:else if  page === 2}
		<Home/>
	{:else if  page === 3}
		<Home/>
	{/if}
	
</div>
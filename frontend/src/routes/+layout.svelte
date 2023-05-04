<script lang='ts'>
	let is_logged_in = false
	import { Toast } from '@skeletonlabs/skeleton';
	
	import { ConicGradient, type ConicStop } from '@skeletonlabs/skeleton';

	import { set_user } from '../stores/user_store'

	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';


	onMount(() => {
		let user_data = localStorage.getItem('user_data')
		let token = localStorage.getItem('token')
		if (user_data && token){
			set_user({
				user_data: JSON.parse(user_data),
				token: token,
			})
			is_logged_in = true
		}else{
			goto('/login')
		}
	})
	
	
	
	
	const conicStops: ConicStop[] = [
		{ color: 'transparent', start: 0, end: 25 },
		{ color: 'rgb(var(--color-primary-600))', start: 75, end: 100 }
	];
	
    
</script>







<Toast />

{#if is_logged_in}
	<slot/>

{:else}

	<div class='h-full w-full flex items-center justify-center bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone ' >
			<ConicGradient  stops={conicStops} spin>Loading</ConicGradient>
	</div>

{/if}
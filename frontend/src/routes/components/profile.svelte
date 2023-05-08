<script lang='ts'>
	import { active_page } from '../../stores/page_store'
    import type { Data } from '../../types';

    import { user } from '../../stores/user_store'
    import { goto } from '$app/navigation';

	let user_data: Data
	user.subscribe(user => {
		user_data = user;
	});
    const logout = () => {
        alert('f')
        localStorage.removeItem('user_data')
        localStorage.removeItem('token')
        alert('f')
        goto('/login')
    }
</script>



<div class="h-full flex flex-col items-center justify-center  ">
	<!--  -->
    <div class="card variant-ghost-primary p-4 capitalize mb-2 w-full text-center">
		<h2>not implemented</h2>
	</div>
	
    <div class="logo-cloud grid-cols-3 lg:!grid-cols-3 gap-1 w-full">
        <button class="logo-item hover:bg-surface-700" style='padding: 10px' on:click={() => {active_page.update(n => 1)}} >
            <span>my notes</span>
        </button>
        <button class="logo-item hover:bg-surface-700" style='padding: 10px' on:click={() => {active_page.update(n => 2)}} >
            <span>global notes</span>
        </button>
        <button class="logo-item hover:bg-surface-700" style='padding: 10px' on:click={logout} >
            <span>logout</span>
        </button>
        <!-- ... -->
    </div>
</div>
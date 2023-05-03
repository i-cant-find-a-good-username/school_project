<script lang='ts'>
	import { active_page } from '../../page_store'
    import type { Data } from '../../types';

    import { user } from '../../user_store'

	let user_data: Data
	user.subscribe(user => {
		user_data = user;
	});
</script>

<div class="h-full flex flex-col items-center justify-center  ">
	<!--  -->
    <div class="card variant-ghost-primary p-4 capitalize mb-2 w-full text-center">
		name: {user_data.user_data.username} <br>
		email: {user_data.user_data.email} <br>
		status: active <br>
		grade: {user_data.user_data.grade?.grade} {user_data.user_data.grade?.speciality} {user_data.user_data.grade?.simester} <br>
		current grade average: <strong>not implemented yet</strong> (incomplete)
	</div>
	
    <div class="logo-cloud grid-cols-2 lg:!grid-cols-2 gap-1 w-full">
        <button class="logo-item hover:bg-surface-700" style='padding: 10px' on:click={() => {active_page.update(n => 1)}} >
            <span>my notes</span>
        </button>
        <button class="logo-item hover:bg-surface-700" style='padding: 10px' on:click={() => {active_page.update(n => 2)}} >
            <span>global notes</span>
        </button>
        <!-- ... -->
    </div>
</div>
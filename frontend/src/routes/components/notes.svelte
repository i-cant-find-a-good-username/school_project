<script lang='ts'>
	import { onMount } from 'svelte';
    import { Table, tableMapperValues, toastStore, ConicGradient, type ConicStop } from '@skeletonlabs/skeleton';
    import type { TableSource } from '@skeletonlabs/skeleton';
	import { Accordion, AccordionItem, InputChip } from '@skeletonlabs/skeleton';
	import { user } from '../../user_store'
    import { PUBLIC_API_URL } from '$env/static/public';
	import { create_toast } from '../../toasts'
    import type { Note, NotesData, Complaint } from '../../types';


	let selected_grade_year: string
	let data_fetched = false
	let user_data: any
	let notes_data: NotesData[]
	let complaints: string[] = []
	let complaints_ids: string[] = []


	user.subscribe(user => {
		user_data = user;
	});




	const get_complaint = () => {
		fetch(PUBLIC_API_URL + '/student/complaints/', {
            method: 'GET',
            headers: {
				'Content-Type': 'application/json',
				'X-Authorization': localStorage.getItem('token') || ""
			},
        })
        .then((response) => {
			return response.json()
        })
        .then(data => {
			console.log(data)
			for (let i = 0; i < data.length; i++) {
				complaints.push(data[i].message)
				complaints_ids.push(data[i]._id)
			}
		})
	}

	const submit_complaint = (e: any, note_id: string) => {
		console.log(e.detail.chipIndex)
		console.log(e)
		complaints_ids.push('some')

		fetch(PUBLIC_API_URL + '/student/complaints/', {
            method: 'POST',
            headers: {
				'Content-Type': 'application/json',
				'X-Authorization': localStorage.getItem('token') || ""
			},
			bod
        })
        .then((response) => {
			return response.json()
        })
        .then(data => {
			console.log(data)
			for (let i = 0; i < data.length; i++) {
				complaints.push(data[i].message)
				complaints_ids.push(data[i]._id)
			}
		})
	}
	
	const delete_complaint = (e: any, note_id: string) => {
		console.log(e.detail.chipIndex)
	}






	
	const create_table = (i: number, data: Note[]): TableSource  => {
		return {
			head: ['TD', 'TP', 'Exam'],
			body: tableMapperValues(data, ['td', 'tp', 'exam']),
			meta: tableMapperValues(data, ['td', 'tp', 'exam']),
			foot: ['Average', '', '20.00']
		};
	}

	const fetch_data = () => {
		notes_data = []
		data_fetched = false
		fetch(PUBLIC_API_URL + '/student/notes/' + selected_grade_year.split(' ')[0] + "/" + selected_grade_year.split(' ')[1], {
            method: 'GET',
            headers: {
				'Content-Type': 'application/json',
				'X-Authorization': localStorage.getItem('token') || ""
			},
        })
        .then((response) => {
            console.log(response)
            if (response.status === 200){
				return response.json()
            }else if (response.status === 401){
                toastStore.trigger(create_toast('error', 'messagfe here'));
            }else if (response.status === 404){
                toastStore.trigger(create_toast('error', 'messagfe here'));
            }else{
                toastStore.trigger(create_toast('error', 'unknown error'));
			}
        })
        .then(data => {
			if (data.lenght > 0 || Object.keys(data).length > 0){
				notes_data = data
				data_fetched = true
			}else{
				toastStore.trigger(create_toast('warning', 'data set empty'));
				data_fetched = true
			}
		})
	}

	onMount(() => {
		fetch_data()
		get_complaint()
	})



    
	const conicStops: ConicStop[] = [
		{ color: 'transparent', start: 0, end: 25 },
		{ color: 'rgb(var(--color-primary-600))', start: 75, end: 100 }
	];

</script>

<div  class='space-y-4'>
	<!-- 
		filled ghost soft ringed glass
	-->	
	{JSON.stringify(complaints)}
	{JSON.stringify(complaints_ids)}

	<div class='flex space-x-2'>
		<select class="select" bind:value={selected_grade_year} on:change={fetch_data} >
			{#each user_data.user_data.previous as item, i}
				<option value={item.grade._id + " " + item.year}>{item.year} {item.grade.grade}</option>
			{/each}
			<option selected value={user_data.user_data.grade._id + " " + user_data.user_data.year}>{user_data.user_data.year} {user_data.user_data.grade.grade}</option>
		</select>
	</div>



	
	{#if data_fetched}
		<Accordion regionControl='variant-glass-surface' >
			{#each notes_data as note, i}
				<AccordionItem open={i==0}   >
					<svelte:fragment slot="lead">
						<p class='!text-2xl'>
							{note.subject.name} <strong>({note.subject.name.match(/\b(\w)/g).join('')})</strong>
						</p>
					</svelte:fragment>
					<svelte:fragment slot="summary">
						{note.teacher.username}
					</svelte:fragment>
					<svelte:fragment slot="content" >
						<div class="logo-cloud grid-cols-2 lg:!grid-cols-2 gap-1">
							<a class="logo-item" href="/">
								<span>Coeffeffecient:</span>
								<span>{note.subject.coefficient}</span>
							</a>
							<a class="logo-item" href="/">
								<span>Credits:</span>
								<span>{note.subject.credits}</span>
							</a>
							<!-- ... -->
						</div>
    			        <Table interactive={true} source={create_table(i, [note.notes])} regionCell='border-l border-surface-700 text-center w-1/3 align-bottom' regionHeadCell="text-center"   regionFootCell="text-center"   />               
						Last Update: {note.updatedAt.substring(0,10)} {note.updatedAt.substring(11,19)}     
						<InputChip on:add={(e) => {submit_complaint(e, note._id)}} on:remove={(e) => {delete_complaint(e, note._id)}} bind:value={complaints} name="chips" placeholder="Write a complaint..." />
					</svelte:fragment>
				</AccordionItem>
			{/each}
		</Accordion>
	{:else}
		<div class='h-full w-full flex items-center justify-center bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone ' >
			<ConicGradient  stops={conicStops} spin>Loading</ConicGradient>
		</div>
	{/if}







</div>
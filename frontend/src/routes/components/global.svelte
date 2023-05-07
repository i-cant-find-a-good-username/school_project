<script lang="ts">
	import { InputChip, toastStore } from "@skeletonlabs/skeleton";
    import { onMount } from "svelte";
	import { create_toast } from '../../toasts'
    import type { Grade, NotesData } from '../../types';
	import { grades } from '../../stores/grades_store'
    import { PUBLIC_API_URL } from '$env/static/public';

	let data_fetched = false
	let selected_grade: string
	let selected_year: string
	let notes_data: NotesData[]
	let complaints: string[] = []
	let grades_data: any
	let current_grade: any


	grades.subscribe((grades: any) => {
		grades_data = grades;
	});


	

	// val groupe name, len number of subjects
	let groups_head: {val: string, len: number}[] = []
	let head: {id: string, val: string}[] = [{id:"", val:'name'}]

	let rows: any = [
		//["dude", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"],
		//["lon gdudenam eusername dudenameuser namedudena meusername", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
	];

	


	const fetch_data = () => {
		notes_data = []
		data_fetched = false
		fetch(PUBLIC_API_URL + '/student/notes_global/' + selected_grade + "/" + selected_year, {
            method: 'GET',
            headers: {
				'Content-Type': 'application/json',
				'X-Authorization': localStorage.getItem('token') || ""
			},
        })
        .then((response) => {
            console.log(response)
            if (response.status === 200){
                toastStore.trigger(create_toast('success', 'data fetched'));
				return response.json()
            }else if (response.status === 401){
                toastStore.trigger(create_toast('error', 'messagfe here'));
            }else if (response.status === 404){
                toastStore.trigger(create_toast('error', 'messagfe here'));
            }else{
                toastStore.trigger(create_toast('error', 'unknown error '+response.status));
			}
        })
        .then(data => {
			console.log(data)
			if (data.lenght > 0 || Object.keys(data).length > 0){
				notes_data = data
				data_fetched = true


				//for (let i = 0; i < notes_data.length; i++) {
				//	let tempo_arr = []
				//	let new_obj: any = {}
				//	let subj = head.find((x: any) => x.id === notes_data[i].subject._id)
				//	console.log("******************")
				//	// @ts-ignore
				//	new_obj.username = notes_data[i].student.username
				//	new_obj.subject = notes_data[i].subject
				//	console.log(new_obj)
				//
				//	//notes_data[i]
				//}


				for (let i = 0; i < head.length; i++) {
					let tempo_arr = []
					let new_obj: any = {}
					let subj = notes_data.find((x: any) => x.subject._id === head[i].id)
					console.log("******************")
					console.log(subj?.student.username)


					new_obj.username = subj?.student.username
						


					if(subj === undefined){

					}else{
						""
					}
					//new_arr.push()
					//notes_data[i]
				}
				
			}else{
				toastStore.trigger(create_toast('warning', 'data set empty'));
				data_fetched = true
			}
		})
	}

	onMount(() => {
		current_grade = grades_data.find((x: Grade) => x._id === selected_grade);
		console.log(current_grade)


		const groups = current_grade.subjects.reduce((groups:any, item:any) => ({
		  ...groups,
		  [item.group]: [...(groups[item.group] || []), item]
		}), {});

		const heads: string[] = Object.keys(groups)
		for (let i = 0; i < heads.length; i++) {
			groups_head = [...groups_head, {val: heads[i], len: groups[heads[i]].length}]
			for (let j = 0; j < groups[heads[i]].length; j++) {
				head = [...head, {
					id: groups[heads[i]][j]._id,
					val: groups[heads[i]][j].name.match(/\b(\w)/g).join('')
				}]
			}
			head = [...head, {id: '', val: "avg"}, {id: '', val: 'cred'}]
		}
		head = [...head, {id: '', val: 'average'}]
		console.log(head)

		fetch_data()
		


	})

	
	
</script>

<div class="h-full flex flex-col  space-y-4  ">


	<div class='flex space-x-2'>

		<!-- all years -->
		<!-- all years 
		<select class="select" bind:value={selected_grade_year} on:change={fetch_data} >
			<option selected value={user_data.user_data.grade._id + " " + user_data.user_data.year}>{user_data.user_data.year} {user_data.user_data.grade.grade}</option>
		</select>
		-->

		<!-- all grades -->


		

		<select class="select" bind:value={selected_grade} on:change={fetch_data} >
			{#each grades_data as grade}
				<option class='capitalize'  value={grade._id}>{grade.grade} {grade.speciality} S{grade.simester}</option>
			{/each}
		</select>


		<select class="select" bind:value={selected_year} on:change={fetch_data} >
			<option value="2015">2015</option>
			<option value="2016">2016</option>
			<option value="2017">2017</option>
			<option value="2018">2018</option>
			<option value="2019">2019</option>
			<option value="2020">2020</option>
			<option value="2021">2021</option>
			<option selected value="2022">2022</option>
		</select>


	</div>

	<!--  -->


	<div class="rounded-md w-full grow overflow-auto space-y-8" >
		<div class="w-full space-y-4  ">
		
			<div class="table-container ">
				<!-- Native Table Element -->
				<table class="table table-hover">

					<thead>
						<tr>
							<th class='text-center !align-middle'  >-</th>
							{#each groups_head as head}
								<th class='text-center !align-middle border-l border-surface-600'  colspan={head.len+2} > {head.val} </th>
							{/each}
							<th class='text-center !align-middle border-l border-surface-600'  >-</th>
						</tr>
					</thead>
					<thead>
						<tr>
							{#each head as col, i}
								<th class='text-center border-surface-600  !align-middle { i !== 0 ? 'border-l' : ''}   '>{col.val}</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#if rows.length === 0}
							<tr class="">
								<td colspan="100" class='text-center !align-middle  overflow-hidden truncate '>
									<h3>no students</h3>
								</td>
							</tr>
						{/if}
						{#each rows as row, i}
							<tr class=''>
								{#each Object.values(row) as col, j}
									<td class='text-center  border-surface-700  !align-middle { j !== 0 ? 'border-l' : ''} ' style={ j===0 ? '' : 'width: calc( 100% / '+(Object.keys(row).length-1)+' ) ' } >{col}</td>
								{/each}
							</tr>
							{#if i === 0}
								<tr class="!variant-ghost-error">
									<td class='text-center !align-middle '>complaint</td>
									<td colspan="15" class='text-center !align-middle  overflow-hidden truncate '>variant-filled- error errorfilled- error errorfilled- error errorfilled- error errorfilled- error errorfilled- error errorfilled- error errorfilled- error errorfilled- error errorfilled- error error</td>
								</tr>
							{/if}
						{/each}
					</tbody>
				</table>
			</div>

		</div>
	</div>
	<InputChip bind:value={complaints} name="chips" placeholder="Write a complaint..." />

</div>


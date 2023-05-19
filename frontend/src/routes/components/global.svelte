<script lang="ts">
	import { InputChip, toastStore } from "@skeletonlabs/skeleton";
    import { onMount } from "svelte";
	import { create_toast } from '../../toasts'
    import type { Grade, NotesData } from '../../types';
	import { grades } from '../../stores/grades_store'
    import { PUBLIC_API_URL } from '$env/static/public';
    import { user } from "../../stores/user_store";

	let data_fetched = false
	let selected_grade: string
	let selected_year: string
	let notes_data: NotesData[]
	let complaints: string[] = []
	let grades_data: any
	let current_grade: any
	let user_data: any
	let groups_head: {val: string, len: number}[] = []
	let head: {id: string, val: string}[] = [{id:"", val:'name'}]
	let rows: string[][] = [];

	grades.subscribe((grades: any) => {
		grades_data = grades;
	});
	user.subscribe(( user : any) => {
		user_data = user.user_data;
	});

	const fetch_data = () => {
		notes_data = []
		data_fetched = false
		let url: string = ""
		if( user_data.role === 'student' ){
			url = PUBLIC_API_URL + '/student/notes_global/' + selected_grade + "/" + selected_year
		}else if ( user_data.role === 'teacher' ){
			url = PUBLIC_API_URL + '/teacher/notes_global/' + selected_grade + "/" + selected_year
		}
		fetch(url, {
            method: 'GET',
            headers: {
				'Content-Type': 'application/json',
				'X-Authorization': localStorage.getItem('token') || ""
			},
        })
        .then((response) => {
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
			if (data.lenght > 0 || Object.keys(data).length > 0){
				notes_data = data
				data_fetched = true
				const notes_groups = data.reduce((groups:any, item:any) => ({
				  ...groups,
				  [item.student._id]: [...(groups[item.student._id] || []), item]
				}), {});
				const subjects_groups = current_grade.subjects.reduce((groups:any, item:any) => ({
				  ...groups,
				  [item.group]: [...(groups[item.group] || []), item]
				}), {});
				let subjs: any = []
				for (let k = 0; k < Object.keys(subjects_groups).length; k++) {
					let new_ar: any = []
 					for (let m = 0; m < subjects_groups[Object.keys(subjects_groups)[k]].length; m++) {
						new_ar.push(subjects_groups[Object.keys(subjects_groups)[k]][m])
					}
					subjs.push(new_ar)
				}
				let total_avg: {coeff: number, avg: number}[] = []
				for (let i = 0; i < Object.keys(notes_groups).length; i++) {
					const group = Object.keys(notes_groups)[i]
					var arr: string[] = new Array(head.length).fill("")
					arr[0] = notes_groups[group][0].student.username
					let avg: {coeff: number, avg: number}[] = []
					for (let j = 1; j < head.length; j++) {
						if( head[j].id !== '' ){
							let obj = notes_groups[group].find((o: any) => o.subject._id === head[j].id)
							if( obj.notes === undefined ){
								arr[j] = "-"
								avg.push({ coeff: obj.subject.coefficient, avg: NaN })
							}else{
								const note = (obj.notes.td * obj.subject.notes_coefficient.td + obj.notes.tp * obj.subject.notes_coefficient.tp + obj.notes.exam * obj.subject.notes_coefficient.exam) / (obj.subject.notes_coefficient.exam + obj.subject.notes_coefficient.td + obj.subject.notes_coefficient.tp) 
								arr[j] = (note.toFixed(2))
								avg.push({ coeff: obj.subject.coefficient, avg: note })
							}
						}else if ( head[j].val === 'cred' ) {
							arr[j] = "/"
						}else if (head[j].val === 'avg'){
							let average: number = 0
							let coeffs: number = 0
							for (let k = 0; k < avg.length; k++) {
								average = avg.reduce((total, obj) => obj.avg*obj.coeff + total,0)
								coeffs = avg.reduce((total, obj) => obj.coeff + total,0)
							}
							let note = average / coeffs
							arr[j] = note.toFixed(2)
							total_avg.push(...avg)
							avg = []
						}
					}
					arr[head.length-1] = (total_avg.reduce((total, obj) => obj.avg*obj.coeff + total,0)/total_avg.reduce((total, obj) => obj.coeff + total,0)).toFixed(2)
					total_avg = []
					rows = [...rows, arr]
				}
			}else{
				toastStore.trigger(create_toast('warning', 'data set empty'));
				data_fetched = true
			}
		})
	}

	const get_complaints = () => {
		fetch(PUBLIC_API_URL + '/admin/complaints/' + selected_grade + '/' + selected_year, {
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
			complaints = data
		})
	}
	const init = () => {
		groups_head = []
		head = [{id:"", val:'name'}]
		rows = [];
		current_grade = grades_data.find((x: Grade) => x._id === selected_grade);
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
		fetch_data()
	}

	onMount(() => {
		init()
		if (user_data.role === 'teacher'){
			if(user_data.isAdmin){
				get_complaints()
			}
		}
	})
</script>

<div class="h-full flex flex-col  space-y-4  ">
	<div class='flex space-x-2'>
		<select class="select" bind:value={selected_grade} on:change={init} >
			{#each grades_data as grade}
				<option class='capitalize'  value={grade._id}>{grade.grade} {grade.speciality} S{grade.simester}</option>
			{/each}
		</select>

		<select class="select" bind:value={selected_year} on:change={init} >
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

	<div class="rounded-md w-full grow overflow-auto space-y-8" >
		<div class="w-full space-y-4  ">
			<div class="table-container ">
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
							<!--
								if there is a complaint with this id only teacher see it and student can see own complaints
							-->
							{#if false}
								<tr class="!variant-filled-error">
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
	{#if user_data.role == 'student'}
		<InputChip name="chips" placeholder="Write a complaint..." />
	{/if}
</div>


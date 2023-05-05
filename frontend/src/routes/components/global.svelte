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


	

	$: head = ['name', 'igr', 'cse', 'sri', 'AVG', 'CRED', 'aaw', 'mssc', 'gcc', 'AVG', 'CRED', 'ang2', 'mts', 'AVG', 'CRED', 'average']

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
			}else{
				toastStore.trigger(create_toast('warning', 'data set empty'));
				data_fetched = true
			}
		})
	}

	onMount(() => {
		current_grade = grades_data.find((x: Grade) => x._id === selected_grade);
		console.log(current_grade)
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
				<option class='capitalize'  value={grade._id}>{grade.grade} {grade.speciality} {grade.simester}</option>
			{/each}
		</select>



		<select class="select" bind:value={selected_year} on:change={fetch_data} >
			<option value="2000">2000</option>
			<option value="2001">2001</option>
			<option value="2002">2002</option>
			<option value="2003">2003</option>
			<option value="2004">2004</option>
			<option value="2005">2005</option>
			<option value="2006">2006</option>
			<option value="2007">2007</option>
			<option value="2008">2008</option>
			<option value="2009">2009</option>
			<option value="2010">2010</option>
			<option value="2011">2011</option>
			<option value="2012">2012</option>
			<option value="2013">2013</option>
			<option value="2014">2014</option>
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
							<th class='text-center !align-middle border-l border-surface-600' colspan="5" >UEF1</th>
							<th class='text-center !align-middle border-l border-surface-600' colspan="5" >UEF2</th>
							<th class='text-center !align-middle border-l border-surface-600' colspan="4" >UEM1</th>
							<th class='text-center !align-middle border-l border-surface-600'  >-</th>
						</tr>
					</thead>
					<thead>
						<tr>
							{#each head as col, i}
								<th class='text-center border-surface-600  !align-middle { i !== 0 ? 'border-l' : ''}   '>{col}</th>
							{/each}
						</tr>
					</thead>
					<tbody>
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








	<!--
					let page = {
						offset: 0,
						limit: 5,
						size: source.length,
						amounts: [1, 2, 5, 10],
					};
					let tableSimple: TableSource = {
    					head:  [
							'name', 'igr', 'cse', 'sri', 'AVG UEF1', 'CRED UEF1',
							'aaw', 'mssc', 'gcc', 'AVG UEF2', 'CRED UEF2',
							'ang2', 'mts', 'AVG UEM1', 'CRED UEM1', 'average']
						,
    					body: tableMapperValues(source, ['name', 'igr', 'cse', 'sri', 'AVG_UEF1', 'CRED_UEF1', 'aaw', 'mssc', 'gcc', 'AVG_UEF2', 'CRED_UEF2', 'ang2', 'mts', 'AVG_UEM1', 'CRED_UEM1', 'average']),
    					meta: tableMapperValues(source, ['name', 'igr', 'cse', 'sri', 'AVG_UEF1', 'CRED_UEF1', 'aaw', 'mssc', 'gcc', 'AVG_UEF2', 'CRED_UEF2', 'ang2', 'mts', 'AVG_UEM1', 'CRED_UEM1', 'average']),
    					foot: ['Total', '', '20.00']
    				};
					$: paginatedSource = source.slice(
						page.offset * page.limit,
						page.offset * page.limit + page.limit
					);
					$: data = paginatedSource.map(function (obj) {
						return Object.keys(obj)
							.sort()
							.map(function (key) {
								//@ts-ignore
								return obj[key];
							});
					});
				<Table source={tableSimple} regionHeadCell="text-center " regionCell="text-center !align-middle" regionFootCell="text-center "  />
				<Paginator bind:settings={page} />
			-->
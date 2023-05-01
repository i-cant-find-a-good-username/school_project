<script lang="ts">
	import { Table, tableMapperValues, type TableSource, InputChip} from "@skeletonlabs/skeleton";
	import { Paginator } from "@skeletonlabs/skeleton";
	const rows = [
		{
			name: "dude",
			igr: "20",
			cse: "20",
			sri: "20",
			AVG_UEF1: "20",
			CRED_UEF1: "20",
			aaw: "20",
			mssc: "20",
			gcc: "20",
			AVG_UEF2: "20",
			CRED_UEF2: "20",
			ang2: "20",
			mts: "20",
			AVG_UEM1: "20",
			CRED_UEM1: "20",
			average: "20",
		},
		{
			name: "lon gdudenam eusername dudenameuser namedudena meusername",
			igr: "20",
			cse: "20",
			sri: "20",
			AVG_UEF1: "20",
			CRED_UEF1: "20",
			aaw: "20",
			mssc: "20",
			gcc: "20",
			AVG_UEF2: "20",
			CRED_UEF2: "20",
			ang2: "20",
			mts: "20",
			AVG_UEM1: "20",
			CRED_UEM1: "20",
			average: "20",
		},

	

	];
	let head = Object.keys(rows[0])

	console.log(head)

	let complaints = ['add here']




</script>

<div class="h-full flex flex-col  space-y-4  ">


	<div class='flex space-x-2'>

			<select class="select">
				<option value="1">2020</option>
				<option value="2">2021</option>
				<option value="3">2022</option>
				<option value="4">2023</option>
				<option value="5">2024</option>
			</select>

			<select class="select ">
				<option value="1">Master1 STIC S1</option>
				<option value="2">Master1 RSD S1</option>
				<option value="3">Master1  S1</option>
				<option value="4">License3 TI S1</option>
				<option value="5">Master1 STIW S1</option>
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
							{#each head as col}
								<th class='text-center !align-middle '>{col}</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each rows as row, i}
							<tr class=''>
								{#each Object.values(row) as col, j}
									<td class='text-center border-l border-surface-700  !align-middle' style={ j===0 ? '' : 'width: calc( 100% / '+(Object.keys(row).length-1)+' ) ' } >{col}</td>
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
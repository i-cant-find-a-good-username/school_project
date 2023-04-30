<script lang="ts">
	import { Accordion, AccordionItem, ListBox, ListBoxItem, Table, popup, type PopupSettings, tableMapperValues, type TableSource, InputChip } from "@skeletonlabs/skeleton";
	import { Paginator } from "@skeletonlabs/skeleton";
	const source = [
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
			name: "long dude name username",
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

	let page = {
		offset: 0,
		limit: 5,
		size: source.length,
		amounts: [1, 2, 5, 10, 20],
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
	let complaints = ['add here']


</script>

<div class="h-full ">

	


	<!--  -->
	<div class="rounded-md h-full w-full ">
		<div class="w-full space-y-2 ">
			<Table source={tableSimple} regionHeadCell="text-center" regionCell="text-center  align-bottom" regionFootCell="text-center"  />
			<Paginator bind:settings={page} />
			<InputChip bind:value={complaints} name="chips" placeholder="Write a complaint..." />

		</div>
	</div>
</div>






<script lang='ts'>
	import { Accordion, AccordionItem, Table } from '@skeletonlabs/skeleton';
	import { Paginator } from '@skeletonlabs/skeleton';
	const source = [ 
		
	{
			element0: "fzef",
			element1: "fzef",
			element2: "fzef",
			element3: "fzef",
			element4: "fzef"
		},
		
		{
			element0: "fzef",
			element1: "fzef",
			element2: "fzef",
			element3: "fzef",
			element4: "fzef"
		},
		
		{
			element0: "fzef",
			element1: "fzef",
			element2: "fzef",
			element3: "fzef",
			element4: "fzef"
		},
		
		{
			element0: "fzef",
			element1: "fzef",
			element2: "fzef",
			element3: "fzef",
			element4: "fzef"
		},	
		{
			element0: "fzef",
			element1: "fzef",
			element2: "fzef",
			element3: "fzef",
			element4: "fzef"
		},
		
		{
			element0: "fzef",
			element1: "fzef",
			element2: "fzef",
			element3: "fzef",
			element4: "fzef"
		},
		
		{
			element0: "fzef",
			element1: "fzef",
			element2: "fzef",
			element3: "fzef",
			element4: "fzef"
		},	
		{
			element0: "fzef",
			element1: "fzef",
			element2: "fzef",
			element3: "fzef",
			element4: "fzef"
		},
		
		{
			element0: "fzef",
			element1: "fzef",
			element2: "fzef",
			element3: "fzef",
			element4: "fzef"
		},
		
		{
			element0: "fzef",
			element1: "fzef",
			element2: "fzef",
			element3: "fzef",
			element4: "fzef"
		},	
		{
			element0: "fzef",
			element1: "fzef",
			element2: "fzef",
			element3: "fzef",
			element4: "fzef"
		},
		
		{
			element0: "fzef",
			element1: "fzef",
			element2: "fzef",
			element3: "fzef",
			element4: "fzef"
		},
		
		{
			element0: "fzef",
			element1: "fzef",
			element2: "fzef",
			element3: "fzef",
			element4: "fzef"
		},	
		{
			element0: "fzef",
			element1: "fzef",
			element2: "fzef",
			element3: "fzef",
			element4: "fzef"
		},
		
		{
			element0: "fzef",
			element1: "fzef",
			element2: "fzef",
			element3: "fzef",
			element4: "fzef"
		},
		
		{
			element0: "fzef",
			element1: "fzef",
			element2: "fzef",
			element3: "fzef",
			element4: "fzef"
		},	
		{
			element0: "fzef",
			element1: "fzef",
			element2: "fzef",
			element3: "fzef",
			element4: "fzef"
		},
		
		{
			element0: "fzef",
			element1: "fzef",
			element2: "fzef",
			element3: "fzef",
			element4: "fzef"
		},
		
		{
			element0: "fzef",
			element1: "fzef",
			element2: "fzef",
			element3: "fzef",
			element4: "fzef"
		},
	];

	let page = {
		offset: 0,
		limit: 5,
		size: source.length,
		amounts: [1,2,5,10, 20],
	};
	let tableHeaders = ['Positions', 'Name', 'Weight', 'Symbol', 'dude'];
	$: paginatedSource = source.slice(
		page.offset * page.limit,
		page.offset * page.limit + page.limit
	);
	$: data = paginatedSource.map(function(obj) {
		return Object.keys(obj).sort().map(function(key) {
			//@ts-ignore
		    return obj[key];
		});
	});

</script>


<div class="h-full p-4">
	<!--  -->
	<div class='rounded-md p-4 h-full w-full flex flex-col justify-center items-center '>
		<div class='w-full  space-y-2'>
			<Table source={{ head: tableHeaders, body: data }} />
			<Paginator bind:settings={page} ></Paginator>
		</div>
	</div>
</div>
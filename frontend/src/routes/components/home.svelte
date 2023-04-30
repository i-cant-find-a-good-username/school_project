<script lang='ts'>
    import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
    import type { TableSource } from '@skeletonlabs/skeleton';
	import  { active_page } from '../../store'
	let tableArr = [
        {
            td: 5,
            tp: 12,
            exam: 10,
        },
    ]
    let totalWeight = 500
	let complaints = ['list']
    const sourceData = [
    	{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    ];
    const tableSimple: TableSource = {
    	// A list of heading labels.
    	head: ['Name', 'Symbol', 'Weight'],
    	// The data visibly shown in your table body UI.
    	body: tableMapperValues(sourceData, ['name', 'symbol', 'weight']),
    	// Optional: The data returned when interactive is enabled and a row is clicked.
    	meta: tableMapperValues(sourceData, ['position', 'name', 'symbol', 'weight']),
    	// Optional: A list of footer labels.
    	foot: ['Total', '', '<code>31.7747</code>']
    };

</script>

<div class="h-full flex flex-col items-center justify-center  ">
	<!--  -->
    <div class="card variant-ghost-primary p-4 capitalize mb-2 w-full text-center">
		name: ilyes <br>
		email: ilyes@gmail.com <br>
		status: active <br>
		grade: master1 stic s2 <br>
		current grade average: <strong>10.01</strong> (incomplete)
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
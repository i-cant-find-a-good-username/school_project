<script lang='ts'>
    import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
    import type { TableSource } from '@skeletonlabs/skeleton';
	import { Accordion, AccordionItem, InputChip } from '@skeletonlabs/skeleton';
	let tableArr = [
        {
            subject: "igr",
            teacher: "dude",
            td: 5,
            tp: 12,
            exam: 10,
        },
    ]
	let complaints = ['add here']
    const tableSimple: TableSource = {
    	head: ['TD', 'TP', 'Exam'],
    	body: tableMapperValues(tableArr, ['td', 'tp', 'exam']),
    	meta: tableMapperValues(tableArr, ['td', 'tp', 'exam']),
    	foot: ['Average', '', '20.00']
    };










</script>

<div >
	<!-- 
		filled ghost soft ringed glass
	-->
	<Accordion regionControl='variant-glass-surface' >
		{#each Array(4) as item, i}
			<AccordionItem open={i==0}   >
				<svelte:fragment slot="lead">
					<p class='!text-2xl'>
						web applications archetecture <strong>(AAW)</strong>
					</p>
				</svelte:fragment>
				<svelte:fragment slot="summary">user user</svelte:fragment>
				<svelte:fragment slot="content" >
					<div class="logo-cloud grid-cols-2 lg:!grid-cols-2 gap-1">
						<a class="logo-item" href="/">
							<span>coeffeffecient:</span>
							<span>3</span>
						</a>
						<a class="logo-item" href="/">
							<span>credits:</span>
							<span>3</span>
						</a>
						<!-- ... -->
					</div>
    		        <Table interactive={true} source={tableSimple} regionCell='border-l border-surface-700 text-center w-1/3 align-bottom' regionHeadCell="text-center"   regionFootCell="text-center"   />                    
					<InputChip bind:value={complaints} name="chips" placeholder="Write a complaint..." />
				</svelte:fragment>
			</AccordionItem>
		{/each}

	</Accordion>


</div>
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
    let totalWeight = 500
	let complaints = ['add here']
    const tableSimple: TableSource = {
    	head: ['TD', 'TP', 'Exam'],
    	body: tableMapperValues(tableArr, ['td', 'tp', 'exam']),
    	meta: tableMapperValues(tableArr, ['td', 'tp', 'exam']),
    	foot: ['Total', '', '20.00']
    };






    const tableSimple2: TableSource = {
    	head: ['subject', 'teacher', 'TD', 'TP', 'Exam'],
    	body: tableMapperValues(tableArr, ['subject', 'teacher', 'td', 'tp', 'exam']),
    	meta: tableMapperValues(tableArr, ['subject', 'teacher', 'td', 'tp', 'exam']),
    	foot: ['Total', '',  '',  '', '20.00']
    };



</script>

<div >
	<!--  -->
	<Accordion>
		<AccordionItem open>
			<svelte:fragment slot="lead">lorem lorem name <strong>(abrv)</strong></svelte:fragment>
			<svelte:fragment slot="summary">teachername</svelte:fragment>
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
		<AccordionItem>
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			<svelte:fragment slot="summary">(summary)</svelte:fragment>
			<svelte:fragment slot="content">(content)</svelte:fragment>
		</AccordionItem>
	</Accordion>

	<Table interactive={true} source={tableSimple2} regionCell='border-l border-surface-700 text-center  align-bottom' regionHeadCell="text-center w-1/5"   regionFootCell="text-center"   />                    

</div>
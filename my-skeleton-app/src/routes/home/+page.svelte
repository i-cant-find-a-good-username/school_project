<script lang='ts'>
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { Accordion, AccordionItem, InputChip } from '@skeletonlabs/skeleton';
	let tableArr = [
        {
            td: 5,
            tp: 12,
            exam: 10,
        },
    ]
    let totalWeight = 500
	let complaints = ['list']


</script>


<div class="h-full p-4">

	<!--  -->
	<div class='rounded-md p-4 h-full'>
		
		<Accordion>
			<AccordionItem open>
				<svelte:fragment slot="lead">lorem lorem name (abrv)</svelte:fragment>
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
					<div class="table-container">
                        <!-- Native Table Element -->
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Td</th>
                                    <th>Tp</th>
                                    <th>Exam</th>
                                </tr>
                            </thead>
                            <tbody>
                                {#each tableArr as row, i}
                                    <tr>
                                        <td>{row.td}</td>
                                        <td>{row.tp}</td>
                                        <td>{row.exam}</td>
                                    </tr>
                                {/each}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colspan="2">Calculated Total Weight</th>
                                    <td>thet average here</td>
                                </tr>
                            </tfoot>
                        </table>
						<div class='p-2'></div>
						<InputChip bind:value={complaints} name="chips" placeholder="Write a complaint..." />
                    </div>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<svelte:fragment slot="summary">(summary)</svelte:fragment>
				<svelte:fragment slot="content">(content)</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</div>
</div>
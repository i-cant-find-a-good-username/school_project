<script>
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

</script>


<div class="h-full p-4">

	<!--  -->
	<div class='rounded-md p-4 bg-[rgba(0,0,0,0.4)] h-full'>
        login page
		<Accordion>
			<AccordionItem open>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<svelte:fragment slot="summary">(summary)</svelte:fragment>
				<svelte:fragment slot="content">
					d
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
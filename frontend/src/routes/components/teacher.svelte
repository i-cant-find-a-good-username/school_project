<script lang='ts'>
    import type { TableSource } from '@skeletonlabs/skeleton';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import Trash from '../../lib/icons/trash.svelte';
	import Pen from '../../lib/icons/pen.svelte';
	let tableArr = [
        {
            subject: "duude duude",
            td: 5,
            tp: 12,
            exam: 10,
        },
    ]




  

</script>

<div >
	<!--  -->
	<Accordion>
		<AccordionItem open>
			<svelte:fragment slot="lead">IGR Master 1 Stic S2 <strong>(abrv)</strong></svelte:fragment>
			<svelte:fragment slot="summary">teachername</svelte:fragment>
			<svelte:fragment slot="content" >
		

            <div data-popup="hello">(popup)</div>
                <div class="table-container">
                    <!-- Native Table Element -->
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th class='text-center '>number</th>
                                <th class='text-center w-1/6 '>student</th>
                                <th class='text-center w-1/6 '>td</th>
                                <th class='text-center w-1/6 '>tp</th>
                                <th class='text-center w-1/6 '>exam</th>
                                <th class='text-center w-1/6 '>average</th>
                                <th class='text-center w-1/6 '>actions</th>
                            </tr>
                        </thead>
                        <tbody class=' w-full '>
                            {#each tableArr as row, i}
                                <tr class=" " >
                                    <td class='text-center !align-middle '>{i+1}</td>
                                    <td class='text-center w-1/6 !align-middle '>{row.subject}</td>
                                    <td class='text-center w-1/6 !align-middle '>{row.td}</td>
                                    <td class='text-center w-1/6 !align-middle '>{row.tp}</td>
                                    <td class='text-center w-1/6 !align-middle '>{row.exam}</td>
                                    <td class='text-center w-1/6 !align-middle '>{ (row.td + row.tp + row.exam)/3 }</td>
                                    <td class='text-center w-1/6 !p-2 space-x-8 '> 
                                        <button type="button" class="btn-icon variant-filled-primary"> <Pen/> </button>
                                        <button type="button" class="btn-icon variant-filled-error"> <Trash/> </button>
                                        <button type="button" class="btn variant-filled-primary hidden">confirm</button>
                                    </td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
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
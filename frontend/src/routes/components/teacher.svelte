<script lang='ts'>
    import type { TableSource } from '@skeletonlabs/skeleton';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import Trash from '../../lib/icons/trash.svelte';
	import Pen from '../../lib/icons/pen.svelte';
	import Cancel from '../../lib/icons/cancel.svelte';
	import Check from '../../lib/icons/check.svelte';
	let tableArr = [
        {
            subject: "duude duude",
            td: 5,
            tp: 12,
            exam: 10,
        },
    ]

    
    // change 1 with lenght or elements
    let editable: boolean[] = [ false ]

    const toggle_editable = (n: number) => {
        console.log('fefef')
        editable[n] = !editable[n]
    }

</script>

<div >
	<!--  -->
    <Accordion class="" regionControl='variant-glass-surface'>
		{#each Array(4) as item, i}
			<AccordionItem open={i==0} >
		    	<svelte:fragment slot="lead">
                    <p class='!text-2xl'>
                        IGR Master 1 Stic S2 
					</p>
                </svelte:fragment>
		    	<svelte:fragment slot="summary"> &nbsp; </svelte:fragment>
		    	<svelte:fragment slot="content" >
                <div data-popup="hello">(popup)</div>
                    <div class="table-container">
                        <!-- Native Table Element -->
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th class='text-center  border-l border-surface-700 '>number</th>
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
                                        <td class='text-center  border-l border-surface-700 w-1/6 !align-middle '>{row.subject}</td>
                                        <td class='text-center  border-l border-surface-700 w-1/6 !align-middle ' >
                                            <p class={editable[i] ? 'hidden' : ""}>
                                                {row.td}
                                            </p>
                                            <input max='20' min='0' type="number" name="" value={row.td} class={editable[i] ? 'input text-center p-2' : "hidden"}>
                                        </td>
                                        <td class='text-center  border-l border-surface-700 w-1/6 !align-middle ' >
                                            <p class={editable[i] ? 'hidden' : ""}>
                                                {row.tp}
                                            </p>
                                            <input max='20' min='0' type="number" name="" value={row.tp} class={editable[i] ? 'input text-center p-2' : "hidden"}>
                                        </td>
                                        <td class='text-center  border-l border-surface-700 w-1/6 !align-middle ' >
                                            <p class={editable[i] ? 'hidden' : ""}>
                                                {row.exam}
                                            </p>
                                            <input max='20' min='0' type="number" name="" value={row.exam} class={editable[i] ? 'input text-center p-2' : "hidden"}>
                                        </td>
                                        <td class='text-center  border-l border-surface-700 w-1/6 !align-middle '>{ (row.td + row.tp + row.exam)/3 }</td>
                                        {#if !editable[i]}
                                            <td class='text-center  border-l border-surface-700 w-1/6 !p-2 space-x-8 !align-middle'> 
                                                <button type="button" class="btn-icon variant-filled-primary" on:click={()=>{toggle_editable(i)}}> <Pen/> </button>
                                                <button type="button" class="btn-icon variant-filled-error"> <Trash/> </button>
                                            </td>
                                        {:else}
                                            <td class='text-center  border-l border-surface-700 w-1/6 !p-2 space-x-8 !align-middle '> 
                                                <button type="button" class="btn-icon variant-filled-primary" on:click={()=>{toggle_editable(i)}}><Check/></button>
                                                <button type="button" class="btn-icon variant-filled-error"> <Cancel/></button>
                                            </td>
                                        {/if}
                                    </tr>
                                    {#if true}
                                        <tr class="!variant-filled-error">
                                            <td class='text-center !align-middle '>complaint</td>
                                            <td colspan="5" class='text-center !align-middle overflow-hidden truncate '>variant-filled- error errorfilled- error errorfilled- error errorfilled- error errorfilled- error errorfilled- error errorfilled- error errorfilled- error errorfilled- error errorfilled- error error</td>
                                            <td class='text-center !align-middle overflow-hidden truncate '> <button type="button" class="btn variant-filled-primary">responde</button> </td>
                                        </tr>
                                    {/if}
                                {/each}
                            </tbody>
                        </table>
                    </div>
		    	</svelte:fragment>
		    </AccordionItem>
		{/each}
	</Accordion>


</div>
<script lang='ts'>
    import { toastStore, type TableSource } from '@skeletonlabs/skeleton';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import Trash from '../../lib/icons/trash.svelte';
	import Pen from '../../lib/icons/pen.svelte';
	import Cancel from '../../lib/icons/cancel.svelte';
	import Check from '../../lib/icons/check.svelte';
    import type { NotesData } from '../../types';
    import { PUBLIC_API_URL } from '$env/static/public';
    import { create_toast } from '../../toasts';
    import { onMount } from 'svelte';
	let tableArr: any[] = []

    
    // change 1 with lenght or elements
    let editable: boolean[] = [ false ]

    const toggle_editable = (n: number) => {
        console.log('fefef')
        editable[n] = !editable[n]
    }







	let selected_grade_year: string
	let data_fetched = false
	let notes_data: NotesData[]


	const fetch_data = () => {
		notes_data = []
		data_fetched = false
		fetch(PUBLIC_API_URL + '/teacher/notes/', {
            method: 'GET',
            headers: {
				'Content-Type': 'application/json',
				'X-Authorization': localStorage.getItem('token') || ""
			},
        })
        .then((response) => {
            console.log(response)
            if (response.status === 200){
                toastStore.trigger(create_toast('success', 'data fetched'));
				return response.json()
            }else if (response.status === 401){
                toastStore.trigger(create_toast('error', 'message here'));
            }else if (response.status === 404){
                toastStore.trigger(create_toast('error', 'message here'));
            }else{
                toastStore.trigger(create_toast('error', 'unknown error'));
			}
        })
        .then(data => {
			if (data.lenght > 0 || Object.keys(data).length > 0){
                data_fetched = true
                const notes_data = data.reduce((groups:any, item:any) => ({
                    ...groups,
                    [item.grade._id]: [...(groups[item.grade._id] || []), item]
				}), {});
                console.log(notes_data)
                for (let i = 0; i < notes_data.length; i++) {
                    let arra: any = []
                    console.log(notes_data[i])

                    for (let k = 0; k < notes_data[i].length; k++) {
                        console.log(notes_data[i][k])
                        const new_obj = {
                            username: "dcadz",
                            td: 458,
                            tp: 458,
                            exam: 458,
                            average: 458,
                        } 
                        arra.push(new_obj)
                    }                     
                    tableArr = [...tableArr, arra]
                }
                console.log(tableArr)

			}else{
				toastStore.trigger(create_toast('warning', 'data set empty'));
				data_fetched = true
			}
		})
	}

	onMount(() => {
		fetch_data()
		//get_complaint()
	})






</script>

<div >
	<!--  -->
    <Accordion class="" regionControl='variant-glass-surface'>
		{#each tableArr as table, i}
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
                                {#each table as row, i}
                                    <tr class=" " >
                                        <td class='text-center !align-middle '>{i+1}</td>
                                        <td class='text-center  border-l border-surface-700 w-1/6 !align-middle '>{row.username}</td>
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
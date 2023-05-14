<script lang="ts">
    import { toastStore, type TableSource } from "@skeletonlabs/skeleton";
    import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";
    import Trash from "../../lib/icons/trash.svelte";
    import Pen from "../../lib/icons/pen.svelte";
    import Cancel from "../../lib/icons/cancel.svelte";
    import Check from "../../lib/icons/check.svelte";
    import type { NotesData } from "../../types";
    import { PUBLIC_API_URL } from "$env/static/public";
    import { create_toast } from "../../toasts";
    import { onMount } from "svelte";
    import { user } from "../../stores/user_store";

    let tableArr: any[] = [];
    let inputs_state: {td?: number, tp?: number, exam?: number}[][] = [];
    let selected_year: string;
    let editable: boolean[][] = [[]];
	let complaints: any[] = []
	let user_data: any
    let data_fetched = false;
    let notes_data: NotesData[];

    const toggle_editable = (n: number, m: number) => {
        console.log(n, m);
        editable[n][m] = !editable[n][m];
        console.log(editable);
    };

    user.subscribe(user => {
		user_data = user;
	});

    const submit_notes = (note: string, td: number, tp: number, exam: number) => {
		fetch(PUBLIC_API_URL + '/teacher/notes/' + note, {
            method: 'PUT',
            headers: {
				'Content-Type': 'application/json',
				'X-Authorization': localStorage.getItem('token') || ""
			},
            body: JSON.stringify({
                td: td,
                tp: tp,
                exam: exam
            })
        })
        .then((response) => {
            if (response.status === 200) {
                    toastStore.trigger(create_toast("success", "updated successfully"));
                    return response.json();
                } else if (response.status === 401) {
                    toastStore.trigger(create_toast("error", "no auth"));
                } else if (response.status === 404) {
                    toastStore.trigger(create_toast("error", "note doesnt exist"));
                } else {
                    toastStore.trigger(create_toast("error", "server error"));
                }
        })
        .then(data => {
			console.log(data)
			complaints = data
		})
	}

    const get_complaints = () => {
		fetch(PUBLIC_API_URL + '/teacher/complaints/', {
            method: 'GET',
            headers: {
				'Content-Type': 'application/json',
				'X-Authorization': localStorage.getItem('token') || ""
			},
        })
        .then((response) => {
			return response.json()
        })
        .then(data => {
			console.log(data)
			complaints = data
		})
	}

    const fetch_data = () => {
        notes_data = [];
        data_fetched = false;
        fetch(PUBLIC_API_URL + "/teacher/notes/" + selected_year, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": localStorage.getItem("token") || "",
            },
        })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    toastStore.trigger(create_toast("success", "data fetched"));
                    return response.json();
                } else if (response.status === 401) {
                    toastStore.trigger(create_toast("error", "message here"));
                } else if (response.status === 404) {
                    toastStore.trigger(create_toast("error", "message here"));
                } else {
                    toastStore.trigger(create_toast("error", "unknown error"));
                }
            })
            .then((data) => {
                if (data.lenght > 0 || Object.keys(data).length > 0) {
                    data_fetched = true;
                    const notes_data = data.reduce(
                        (groups: any, item: any) => ({
                            ...groups,
                            [item.grade._id]: [
                                ...(groups[item.grade._id] || []),
                                item,
                            ],
                        }),
                        {}
                    );
                    const keys = Object.keys(notes_data);
                    for (let j = 0; j < keys.length; j++) {
                        console.log(notes_data[keys[j]])
                        tableArr = [...tableArr, notes_data[keys[j]]];
                    }
                    editable = new Array(tableArr.length).fill([]);
                    for (let h = 0; h < tableArr.length; h++) {
                        editable[h] = new Array(tableArr[h].length).fill(false);
                    }
                } else {
                    toastStore.trigger(
                        create_toast("warning", "data set empty")
                    );
                    data_fetched = true;
                }
            });
    };


    const init = () => {
        tableArr = [];
        editable = [[]];
    	complaints = []

        get_complaints()

        fetch_data();
    }

    onMount(() => {
        init()
    });
</script>




<div class="h-full flex flex-col  space-y-4  ">
    
	<div class='flex space-x-2'>
		<select class="select" bind:value={selected_year} on:change={init} >
			<option value="2015">2015</option>
			<option value="2016">2016</option>
			<option value="2017">2017</option>
			<option value="2018">2018</option>
			<option value="2019">2019</option>
			<option value="2020">2020</option>
			<option value="2021">2021</option>
			<option selected value="2022">2022</option>
		</select>
	</div>

    <Accordion class="" regionControl='variant-glass-surface'>
		{#each tableArr as table, i}
            <AccordionItem open={i==0} >
                <svelte:fragment slot="lead">
                    <p class='!text-2xl'>
                        {table[0].grade.grade} {table[0].grade.speciality} S{table[0].grade.simester}
                    </p>
                    <p> {table[0].subject.name}  <strong>({table[0].subject.name.match(/\b(\w)/g).join('').toUpperCase()})</strong></p>
                </svelte:fragment>
                <svelte:fragment slot="summary"> &nbsp; </svelte:fragment>
                <svelte:fragment slot="content" >
                <div data-popup="hello">(popup)</div>
                    <div class="table-container">
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
                                {#each table as row, j}
                                    <tr class=" " >
                                        <td class='text-center !align-middle '>{j+1}</td>
                                        <td class='text-center  border-l border-surface-700 w-1/6 !align-middle '>{row.student.username} </td>
                                        <td class='text-center  border-l border-surface-700 w-1/6 !align-middle ' >
                                            {#if row.notes}
                                                {#if row.notes.td}
                                                    <p class={editable[i][j] ? 'hidden' : ""}>
                                                        {row.notes.td}
                                                    </p>   
                                                    <input max='20' min='0' type="number" name="" value={row.notes.td} class={editable[i][j] ? 'input text-center p-2' : "hidden"}>
                                                {:else}
                                                <p class={editable[i][j] ? 'hidden' : " "}>
                                                    -
                                                </p>
                                                    <input max='20' min='0' type="number" name="" value='0' class={editable[i][j] ? 'input text-center p-2' : "hidden"}>
                                                {/if}    
                                            {:else}
                                            <p class={editable[i][j] ? 'hidden' : " "}>
                                                -
                                                </p>
                                                <input max='20' min='0' type="number" name="" value='0' class={editable[i][j] ? 'input text-center p-2' : "hidden"}>
                                            {/if}
                                        </td>
                                        <td class='text-center  border-l border-surface-700 w-1/6 !align-middle ' >
                                            {#if row.notes}
                                                {#if row.notes.tp}  
                                                    <p class={editable[i][j] ? 'hidden' : " "}>
                                                        {row.notes.tp}
                                                    </p>
                                                    <input max='20' min='0' type="number" name="" value={row.notes.tp} class={editable[i][j] ? 'input text-center p-2' : "hidden"}>
                                                {:else}
                                                    <p class={editable[i][j] ? 'hidden' : " "}>
                                                        -
                                                    </p>
                                                    <input max='20' min='0' type="number" name="" value='0' class={editable[i][j] ? 'input text-center p-2' : "hidden"}>
                                                {/if}    
                                            {:else}
                                                <p class={editable[i][j] ? 'hidden' : " "}>
                                                    -
                                                </p>
                                                <input max='20' min='0' type="number" name="" value='0' class={editable[i][j] ? 'input text-center p-2' : "hidden"}>
                                            {/if}
                                        </td>
                                        <td class='text-center  border-l border-surface-700 w-1/6 !align-middle ' >
                                            {#if row.notes}
                                                {#if row.notes.exam}    
                                                    <p class={editable[i][j] ? 'hidden' : " "}>
                                                        {row.notes.exam}
                                                    </p>
                                                    <input max='20' min='0' type="number" name="" value={row.notes.exam} class={editable[i][j] ? 'input text-center p-2' : "hidden"}>
                                                {:else}
                                                    <p class={editable[i][j] ? 'hidden' : " "}>
                                                        -
                                                    </p>
                                                    <input max='20' min='0' type="number" name="" value='0' class={editable[i][j] ? 'input text-center p-2' : "hidden"}>
                                                {/if}    
                                            {:else}
                                                <p class={editable[i][j] ? 'hidden' : " "}>
                                                    -
                                                </p>
                                                <input max='20' min='0' type="number" name="" value='0' class={editable[i][j] ? 'input text-center p-2' : "hidden"}>
                                            {/if}
                                        </td>
                                        <td class='text-center  border-l border-surface-700 w-1/6 !align-middle '>
                                            {#if row.notes}
                                                {(row.notes.td * row.subject.notes_coefficient.td + row.notes.tp * row.subject.notes_coefficient.tp + row.notes.exam * row.subject.notes_coefficient.exam)/ (row.subject.notes_coefficient.exam + row.subject.notes_coefficient.td + row.subject.notes_coefficient.tp)}
                                            {:else}
                                                -
                                            {/if}
                                        </td>
                                        {#if !editable[i][j]}
                                            <td class='text-center  border-l border-surface-700 w-1/6 !p-2 space-x-8 !align-middle'> 
                                                <button type="button" class="btn-icon variant-filled-primary" on:click={()=>{toggle_editable(i, j)}}> <Pen/> </button>
                                                <button type="button" class="btn-icon variant-filled-error"> <Trash/> </button>
                                            </td>
                                        {:else}
                                            <td class='text-center  border-l border-surface-700 w-1/6 !p-2 space-x-8 !align-middle '> 
                                                <button type="button" class="btn-icon variant-filled-primary" on:click={()=>{toggle_editable(i, j); submit_notes(row._id, 0, 20 ,5) }}><Check/></button>
                                                <button type="button" class="btn-icon variant-filled-error" on:click={()=>{toggle_editable(i, j)}}> <Cancel/></button>
                                            </td>
                                        {/if}
                                    </tr>
                                    {@const tempo_comps = complaints.filter(o => o.student === row.student._id)}
                                    {#if tempo_comps }
                                        {#each tempo_comps as complaint}
                                            <tr class="!variant-filled-error">
                                                <td class='text-center !align-middle '>complaint</td>
                                                <td colspan="5" class='text-center !align-middle overflow-hidden truncate '> {complaint.message} </td>
                                                <td class='text-center !align-middle overflow-hidden truncate '> <button type="button" class="btn variant-filled-primary">responde</button> </td>
                                            </tr>
                                        {/each}
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
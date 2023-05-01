import { writable, type Writable } from 'svelte/store';


const active_page: Writable<number> = writable(2);



export {
    active_page,
}
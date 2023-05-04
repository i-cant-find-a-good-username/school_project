import { writable, type Writable } from 'svelte/store';
import type { Data } from '../types';






const user: Writable<Data> = writable();
const user_notes: Writable<Data> = writable();
const global_notes: Writable<Data> = writable();
 



const set_user = (data: Data) => {

    //fetch data here

    user.set(data)
}









export {
    user,
    set_user
}
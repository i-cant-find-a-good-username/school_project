import { writable, type Writable } from 'svelte/store';
import type { Data } from './types';






const user: Writable<Data> = writable();
 



const set_user = (data: Data) => user.set(data)









export {
    user,
    set_user
}
import { writable, type Writable } from 'svelte/store';
import type { Grade } from '../types';
import { PUBLIC_API_URL } from '$env/static/public';







fetch(PUBLIC_API_URL + '/grades',  {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
.then((response) => {
    return response.json()

})
.then(data => {
    grades.set(data)
})






const grades: Writable<Grade[]> = writable([]);
const years: Writable<number[]> = writable([]);



export {
    grades,
    years
}
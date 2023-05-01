import { writable, type Writable } from 'svelte/store';

const active_theme: Writable<string> = writable('gold-nouveau');


const set_theme = (new_theme: string) => active_theme.set(new_theme)


export {
    active_theme,
    set_theme,
}
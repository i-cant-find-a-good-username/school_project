<script lang='ts'>


    import { Toast, toastStore } from '@skeletonlabs/skeleton';
    import type { ToastSettings } from '@skeletonlabs/skeleton';
    import { create_toast } from '../../toasts'

    let email: HTMLInputElement
    let password: HTMLInputElement
    let is_teacher = false


    let error0: HTMLElement
    let error1: HTMLElement
    let valid_input = false


    let ff: RegExpMatchArray | null
    const email_input = () => {
        ff = email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        if(ff == null){
            email.classList.add('input-warning')
            error0.classList.remove('hidden')
            valid_input = false
        }else{
            email.classList.remove('input-warning')
            error0.classList.add('hidden')
            valid_input = true
        }
    }


    import {
		PUBLIC_API_URL,
	} from '$env/static/public';
    import { goto } from '$app/navigation';

    $: url =  is_teacher ? '/teacher' : '/student'


    const login_enter = (e: KeyboardEvent) => {
        if (e.keyCode === 13){
            if (valid_input){
                login()
            }
        }
    }
    const login = () => {
        if(valid_input){
            fetch(PUBLIC_API_URL + url + '/login' , {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({email: email.value, password: password.value, type: is_teacher ? 'teacher' : 'student'})
            })
            .then((response) => {
                console.log(response)
                if (response.status === 200){
                    toastStore.trigger(create_toast('success', 'data fetched'));
                    return response.json()
                }else if (response.status === 401){
                    toastStore.trigger(create_toast('error', 'Wrong credentials'));
                }else if (response.status === 404){
                    toastStore.trigger(create_toast('error', 'Email not found'));
                }
            })
            .then(data => {
                let user_data = data.user_data
                user_data.role = data.role
                localStorage.setItem('user_data', JSON.stringify(user_data))
                localStorage.setItem('token', data.token)
			    goto(`/`);
            })
        }else{
            toastStore.trigger(create_toast('error', 'both fields are required'));
        }
    }

                    


    




</script>

<div class='flex items-center justify-center h-full '>
    <div class="variant-ghost-surface card p-8 space-y-4 ">

        <label class="label">
            <span>Email</span>
            <input on:keydown={login_enter} bind:this={email} on:input={email_input} class="input p-2 variant-form-material" type="text" placeholder="Email" />
            <span bind:this={error0} class='text-warning-600 flex justify-end hidden'>
                Invalid email
            </span>
        </label>



        <label class="label">
            <span>Password</span>
            <input on:keydown={login_enter} bind:this={password} class="input p-2 variant-form-material" type="password" placeholder="Password" />
        </label>



        <div class='w-full flex justify-between'>
            <label class="flex items-center space-x-2">
                <input bind:checked={is_teacher} class="checkbox" type="checkbox" />
                <p>Login as teacher</p>
            </label>
            <button on:click={login} type="button" class="btn variant-filled-surface"  disabled={!valid_input}>Submit</button>
        </div>
   
    
    </div>

</div>

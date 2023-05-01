<script lang='ts'>


    import { Toast, toastStore } from '@skeletonlabs/skeleton';
    import type { ToastSettings } from '@skeletonlabs/skeleton';

    let email: HTMLInputElement
    let password: HTMLInputElement
    let is_teacher = false


    const email_input = () => {

    }

    const password_input = () => {

    }

    import {
		PUBLIC_API_URL,
	} from '$env/static/public';
    import { goto } from '$app/navigation';

    $: url =  is_teacher ? '/teacher' : '/student'


    const login_enter = (e: KeyboardEvent) => {
        if (e.keyCode === 13){
            login()
        }
    }
    const login = () => {
        console.log(email.value)
        console.log(password.value)
        console.log(is_teacher)

            fetch(PUBLIC_API_URL + url + '/login' , {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({email: email.value, password: password.value, type: is_teacher ? 'teacher' : 'student'})
            })
            .then((response) => {
                console.log()
                if (response.status === 200){
                    toastStore.trigger(res_200);
                }else if (response.status === 401){
                    toastStore.trigger(err_401);
                }else if (response.status === 404){
                    toastStore.trigger(err_404);
                }
                return response.json()
            })
            .then(data => {
                localStorage.setItem('role', data.role)
                localStorage.setItem('token', data.token)
                console.log(data)
			    goto(`/`);
            })

    }

    
    const err_401: ToastSettings = {
        message: 'Wrong credentials',
	    background: 'variant-filled-error',
    };
    const err_404: ToastSettings = {
        message: 'Email not found',
	    background: 'variant-filled-error',
    };
    const res_200: ToastSettings = {
        message: 'logged in',
	    background: 'variant-filled-success',
    };



//input-success
//input-error

</script>

<Toast />
<div class='flex items-center justify-center h-full '>

    <div class="variant-ghost-surface card p-8 space-y-4 ">
        {PUBLIC_API_URL + url + '/login'}

        <label class="label">
            <span>Email</span>
            <input on:keydown={login_enter} bind:this={email} on:input={email_input} class="input p-2 variant-form-material" type="text" placeholder="Email" />
        </label>

        <label class="label">
            <span>Password</span>
            <input on:keydown={login_enter} bind:this={password} on:input={password_input} class="input p-2 variant-form-material" type="password" placeholder="Password" />
        </label>


        <label class="flex items-center space-x-2">
            <input bind:checked={is_teacher} class="checkbox" type="checkbox" />
            <p>Login as teacher</p>
        </label>


        <div class='w-full flex justify-end'>
            <button on:click={login} type="button" class="btn variant-filled-surface">Submit</button>
        </div>
   
    
    </div>

</div>

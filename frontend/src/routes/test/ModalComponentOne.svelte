<script lang='ts'>
    	import { LightSwitch } from '@skeletonlabs/skeleton';
    </script>

<div class='variant-glass-surface variant-ringed-surface rounded p-4 w-64 w-modal space-y-4'>


    <h2>Select Theme</h2>
    <label class="label">
        <span>Theme</span>
        <select class='select modal-prompt-input ' name="" id="">
            <option value="Skeleton">💀 Skeleton</option>
            <option value="Modern">🤖 Modern</option>
            <option value="Rocket">🚀 Rocket</option>
            <option value="Seafoam">🧜‍♀️ Seafoam</option>
            <option value="Vintage">📺 Vintage</option>
            <option value="Sahara">🏜️ Sahara</option>
            <option value="Hamlindigo">👔 Hamlindigo</option>
            <option value="Gold Nouveau">💫 Gold Nouveau</option>
            <option value="Crimson">⭕ Crimson</option>
        </select>
    </label>

    <!-- svelte-ignore a11y-label-has-associated-control -->
    <div class="flex space-x-6">
        <span>Dark Theme:</span>
        <LightSwitch />
    </div>

    <div class=" space-y-2">
        <span>Color Pallet:</span>
        <div class='grid grid-cols-7 gap-4'>
            <div class='p-8 rounded aspect-square bg-primary-200'></div>
            <div class='p-8 rounded aspect-square bg-secondary-200'></div>
            <div class='p-8 rounded aspect-square bg-tertiary-200'></div>
            <div class='p-8 rounded aspect-square bg-success-200'></div>
            <div class='p-8 rounded aspect-square bg-warning-200'></div>
            <div class='p-8 rounded aspect-square bg-error-200'></div>
            <div class='p-8 rounded aspect-square bg-surface-200'></div>
        </div>
        <div class='grid grid-cols-7 gap-4'>
            <div class='p-8 rounded aspect-square bg-primary-400'></div>
            <div class='p-8 rounded aspect-square bg-secondary-400'></div>
            <div class='p-8 rounded aspect-square bg-tertiary-400'></div>
            <div class='p-8 rounded aspect-square bg-success-400'></div>
            <div class='p-8 rounded aspect-square bg-warning-400'></div>
            <div class='p-8 rounded aspect-square bg-error-400'></div>
            <div class='p-8 rounded aspect-square bg-surface-400'></div>
        </div>
        <div class='grid grid-cols-7 gap-4'>
            <div class='p-8 rounded aspect-square bg-primary-600'></div>
            <div class='p-8 rounded aspect-square bg-secondary-600'></div>
            <div class='p-8 rounded aspect-square bg-tertiary-600'></div>
            <div class='p-8 rounded aspect-square bg-success-600'></div>
            <div class='p-8 rounded aspect-square bg-warning-600'></div>
            <div class='p-8 rounded aspect-square bg-error-600'></div>
            <div class='p-8 rounded aspect-square bg-surface-600'></div>
        </div>
        <div class='grid grid-cols-7 gap-4'>
            <div class='p-8 rounded aspect-square bg-primary-600'></div>
            <div class='p-8 rounded aspect-square bg-secondary-600'></div>
            <div class='p-8 rounded aspect-square bg-tertiary-600'></div>
            <div class='p-8 rounded aspect-square bg-success-600'></div>
            <div class='p-8 rounded aspect-square bg-warning-600'></div>
            <div class='p-8 rounded aspect-square bg-error-600'></div>
            <div class='p-8 rounded aspect-square bg-surface-600'></div>
        </div>
        <div class='grid grid-cols-7 gap-4'>
            <div class='p-8 rounded aspect-square bg-primary-800'></div>
            <div class='p-8 rounded aspect-square bg-secondary-800'></div>
            <div class='p-8 rounded aspect-square bg-tertiary-800'></div>
            <div class='p-8 rounded aspect-square bg-success-800'></div>
            <div class='p-8 rounded aspect-square bg-warning-800'></div>
            <div class='p-8 rounded aspect-square bg-error-800'></div>
            <div class='p-8 rounded aspect-square bg-surface-800'></div>
        </div>
        <div class='grid grid-cols-7 gap-4'>
            <div class='p-8 rounded aspect-square bg-primary-900'></div>
            <div class='p-8 rounded aspect-square bg-secondary-900'></div>
            <div class='p-8 rounded aspect-square bg-tertiary-900'></div>
            <div class='p-8 rounded aspect-square bg-success-900'></div>
            <div class='p-8 rounded aspect-square bg-warning-900'></div>
            <div class='p-8 rounded aspect-square bg-error-900'></div>
            <div class='p-8 rounded aspect-square bg-surface-900'></div>
        </div>
    </div>

   
</div>


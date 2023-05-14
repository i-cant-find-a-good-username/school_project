<script lang='ts'>
    	import { LightSwitch } from '@skeletonlabs/skeleton';
    </script>

<div class='variant-glass-surface variant-ringed-surface rounded p-4 w-64 w-modal space-y-4'>


    <h2>Select Theme (doesnt work)</h2>
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
        <div class='grid grid-cols-7 gap-8'>
            <div class='rounded aspect-square variant-filled-primary '></div>
            <div class='rounded aspect-square variant-filled-secondary '></div>
            <div class='rounded aspect-square variant-filled-tertiary '></div>
            <div class='rounded aspect-square variant-filled-success '></div>
            <div class='rounded aspect-square variant-filled-warning '></div>
            <div class='rounded aspect-square variant-filled-error '></div>
            <div class='rounded aspect-square variant-filled-success '></div>
        </div>
        <div class='grid grid-cols-7 gap-8'>
            <div class='rounded aspect-square variant-glass-primary '></div>
            <div class='rounded aspect-square variant-glass-secondary '></div>
            <div class='rounded aspect-square variant-glass-tertiary '></div>
            <div class='rounded aspect-square variant-glass-success '></div>
            <div class='rounded aspect-square variant-glass-warning '></div>
            <div class='rounded aspect-square variant-glass-error '></div>
            <div class='rounded aspect-square variant-glass-success '></div>
        </div>
        <div class='grid grid-cols-7 gap-8'>
            <div class='rounded aspect-square variant-soft-primary '></div>
            <div class='rounded aspect-square variant-soft-secondary '></div>
            <div class='rounded aspect-square variant-soft-tertiary '></div>
            <div class='rounded aspect-square variant-soft-success '></div>
            <div class='rounded aspect-square variant-soft-warning '></div>
            <div class='rounded aspect-square variant-soft-error '></div>
            <div class='rounded aspect-square variant-soft-success '></div>
        </div>
        <div class='grid grid-cols-7 gap-8'>
            <div class='rounded aspect-square variant-ringed-primary '></div>
            <div class='rounded aspect-square variant-ringed-secondary '></div>
            <div class='rounded aspect-square variant-ringed-tertiary '></div>
            <div class='rounded aspect-square variant-ringed-success '></div>
            <div class='rounded aspect-square variant-ringed-warning '></div>
            <div class='rounded aspect-square variant-ringed-error '></div>
            <div class='rounded aspect-square variant-ringed-success '></div>
        </div>
        <div class='grid grid-cols-7 gap-8'>
            <div class='rounded aspect-square variant-ghost-primary '></div>
            <div class='rounded aspect-square variant-ghost-secondary '></div>
            <div class='rounded aspect-square variant-ghost-tertiary '></div>
            <div class='rounded aspect-square variant-ghost-success '></div>
            <div class='rounded aspect-square variant-ghost-warning '></div>
            <div class='rounded aspect-square variant-ghost-error '></div>
            <div class='rounded aspect-square variant-ghost-success '></div>
        </div>
    </div>
</div>


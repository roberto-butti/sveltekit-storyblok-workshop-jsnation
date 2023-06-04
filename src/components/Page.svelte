{#key blok}
    <div use:storyblokEditable="{blok}" class="px-6">
        {#each blok.body as blok}
            <StoryblokComponent blok="{blok}" />
        {/each}
    </div>
{/key}

<script>
import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';

export let blok;
</script>

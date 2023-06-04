import { useStoryblokApi } from '@storyblok/svelte';
import { useStoryblok } from '../storyblok';

// export const csr=false
// export const ssr = false

/** @type {import('./$types').LayoutLoad} */
export async function load() {
    await useStoryblok();

    let storyblokApi = await useStoryblokApi();

    const dataSpace = await storyblokApi.get('cdn/spaces/me', {
        version: 'draft'
    });

    return {
        space: dataSpace.data.space
    };
}

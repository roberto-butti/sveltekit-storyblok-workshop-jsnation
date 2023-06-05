<main>
    <h1>{data.space.name} ( {data.space.id})</h1>
    <slot />
</main>
<svelte:head>
    <title>{data.space.name} ( {data.space.id})</title>
    <meta name="robots" content="noindex nofollow" />
</svelte:head>

<script>
import '../app.css';
export let data;
</script>

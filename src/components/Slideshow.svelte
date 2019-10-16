<script>
  import { scale, fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { quintOut } from "svelte/easing";

  export let delay = 4000;
  export let showcase = [];

  $: images = showcase.map((x, i) => {
    return { src: "carrousel/" + x, index: i };
  });
  let index = 0;

  onMount(() => {
    const interval = setInterval(() => {
      if (index >= showcase.length - 1) index = 0;
      else index++;
    }, delay);

    return () => clearInterval(interval);
  });
</script>

<style>
  .slideshow {
    width: 40em;
    max-width: 100vw;
    max-height: 30em;
    height: calc(50vw);
    background: transparent;
    margin: 1em;
    flex: 1 1 30em;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    background: transparent;
  }

  img {
    position: absolute;
    margin-left: auto;
    margin-top: auto;

    height: auto;
    max-width: 100%;
  }
</style>

<div class="slideshow">
  {#each images as image}
    {#if index == image.index}
      <img
        transition:scale|local={{ duration: 600, easing: quintOut }}
        src={image.src}
        alt={image.src} />
    {/if}
  {/each}
</div>

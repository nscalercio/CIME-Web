<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    width: 100%;
    padding: 0em;
    margin: 0 0;
    box-sizing: border-box;
    height: 100%;
    color: var(--color-themeContraste);
  }
</style>

<Nav {segment} />
<main>
  <slot {segment} />
</main>

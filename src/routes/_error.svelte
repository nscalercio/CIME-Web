<script>
  export let status;
  export let error;
  const dev = process.env.NODE_ENV === "development";
</script>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    padding: 1em;
  }
  h1,
  p {
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }
  a {
    background-color: var(--color-acento);
    padding: 1em 2em;
    color: var(--color-acentoContraste);
    text-decoration: none;
    font-weight: bold;
    border-radius: 2em;
    margin: 1em;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>{'CIME Metrovias - ' + status}</title>
</svelte:head>

<div>
  <h1>{status}</h1>

  <p>{error.message}</p>
  <a href="/">VOLVER A INICIO</a>
  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</div>

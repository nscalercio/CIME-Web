<script>
  export let segment;
  console.log(segment);
</script>

<style>
  nav {
    background-color: var(--color-theme);
    border-bottom: 0.2em solid var(--color-acento);
    font-weight: 300;
    padding: 0 1em;
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em 1.5em;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;
  }

  .fondo {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    z-index: 0;
  }
  .button {
    background-color: var(--color-acento);
    padding: 0.4em 1.8em;
    color: var(--color-acentoContraste);
    text-decoration: none;
    font-weight: bold;
    border-radius: 0.9em;
    margin: 0em 1em;
    font-size: 1.2em;
    z-index: 20;
    border: 0.1em solid white;
    position: absolute;
    right: 0;
    top: 0.8em;
  }
  .logoCIME img {
    height: 90%;
    width: auto;
  }
  .logoCIME {
    z-index: 20;
    height: 100%;
    max-height: 90%;
  }
  .gradient {
    background: var(--color-theme);
    background: linear-gradient(
      90deg,
      rgba(32, 31, 34, 0) 0%,
      rgba(32, 31, 34, 0.8) 20%,
      rgba(32, 31, 34, 0.8) 80%,
      rgba(32, 31, 34, 0) 100%
    );
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    z-index: 1;
  }
</style>

<nav>
  <div class="fondo circuit" />
  <div class="gradient" />
  <a class="logoCIME" href="/">
    <img alt="Logo CIME" src="cimeWhite.svg" />
  </a>
  {#if false}
    <a class="button" href="/">INICIO</a>
  {/if}
</nav>

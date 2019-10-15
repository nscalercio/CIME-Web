<script>
  export let segment;
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
    justify-content: space-between;
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
      rgba(32, 31, 34, 0.9) 20%,
      rgba(32, 31, 34, 0) 100%
    );
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    z-index: 1;
  }
  .links {
    z-index: 10;
    background: rgba(0, 0, 0, 0.9);
    padding: 0.5em 0.2em;
    border-radius: 1em;
    border: 0.1em solid var(--color-acento);
  }
  .button {
    color: var(--color-themeContraste);
    text-decoration: none;
    font-weight: bold;
    margin: 0em 0.9em;
    display: flex;
    justify-content: center;
    align-items: space-evenly;
  }
  .button img {
    margin-right: 0.5em;
  }
</style>

<nav>
  <div class="fondo circuit" />
  <div class="gradient" />
  <a class="logoCIME" href="/">
    <img alt="Logo CIME" src="cimeWhite.svg" />
  </a>
  <div class="links">
    {#if segment}
      <a class="button" href="/">
        <img src="icons/home-24px.svg" alt="Home" />
        HOME
      </a>
    {/if}
  </div>
</nav>

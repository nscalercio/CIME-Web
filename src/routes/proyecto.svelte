<script context="module">
  import proyectos from "./_proyectos.js";
  export async function preload(page, session) {
    let proyecto = proyectos.find(x => x.id == page.query.id);
    return { proyecto };
  }
</script>

<script>
  import Slideshow from "../components/Slideshow.svelte";
  export let proyecto;
  let { logo, descripcion, nombre, caracteristicas } = proyecto;
</script>

<style>
  .principal {
    display: flex;
    width: 100%;
    overflow-x: hidden;
    justify-content: center;
    flex-wrap: wrap;
  }
  ul {
    flex: 1 1 10em;
    font-size: 1.3em;
    list-style: none;
    display:flex;
    flex-direction:column;
    align-items: space-evenly;
    justify-content: space-evenly;
    
  }

  ul li::before {
    content: "\2022";
    color: var(--color-acento);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
 
  .proyectos {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  hr {
    width: 100%;
    border-color: var(--color-acento);
    background-color: var(--color-acento);
    margin: 1em ;
  }
  h1 {
    width: 100%;
    padding: 0em 1em;
    color: var(--color-themeContraste);
  }
  .logo {
    height: 7em;
    width: auto;
    max-width: 90%;
  }
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4em 3em;
    max-width: 90%;
    background-color: var(--color-theme);
  }
  .descripcion {
    width: 40em;
    max-width: 90%;
    text-align: center;
    font-size: 1.4em;
  }
  .caracteristicas {
    display: flex;
    padding: 2em 1em;
    width: 100%;
    justify-content: center;
    align-items:stretch;
    flex-wrap: wrap;
  }
</style>

<svelte:head>
  <title>CIME Metrovias</title>
</svelte:head>

<div class="principal">
  <div class="hero">
    <img class="logo" src={`logos/${logo}`} alt={logo} />
    <p class="descripcion">{@html descripcion}</p>
  </div>
  <hr />
  <h1>CARACTERISTICAS</h1>
  <div class="caracteristicas">
    <Slideshow />
    {#if caracteristicas.length > 0}
      <ul class="listadoCaracteristicas">
        {#each caracteristicas as caracteristica}
          <li>{caracteristica}</li>
        {/each}
      </ul>
    {/if}

  </div>
  <hr />
  <h1>TECNOLOGIAS UTILIZADAS</h1>
  <div class="tecnologias" />
</div>

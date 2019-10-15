<script context="module">
  import proyectos from "./_proyectos.js";
  export async function preload(page, session) {
    let proyecto = proyectos.find(x => x.id == page.query.id);
    return { proyecto };
  }
</script>

<script>
  import PastillaEstado from "../components/PastillaEstado.svelte";
  import Slideshow from "../components/Slideshow.svelte";
  import Tecnologia from "../components/Tecnologia.svelte";
  export let proyecto;
  let {
    logo,
    estado,
    link,
    descripcion,
    tecnologias,
    nombre,
    caracteristicas,
    showcase
  } = proyecto;
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
    display: flex;
    flex-direction: column;
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
  .break {
    flex: 1 0 100%;
  }
  h1 {
    padding: 0em 0em 0.5em 0em;
    color: var(--color-themeContraste);
    border-bottom: 0.1em solid var(--color-acento);
    max-width: 70%;
    word-break: normal;
    word-wrap: break-word;
    text-align: center;
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
    width: 100%;
  }
  .descripcion {
    width: 40em;
    max-width: 90%;

    font-size: 1.4em;
    text-align: justify;
  }
  .caracteristicas {
    display: flex;
    padding: 2em 1em;
    width: 100%;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    background-color: var(--color-themeAlt);
  }
  .tecnologias {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 1em;
  }
</style>

<svelte:head>
  <title>{`CIME Metrovias - ${nombre}`}</title>
</svelte:head>

<div class="principal">
  <div class="hero">
    <img class="logo" src={`logos/${logo}`} alt={logo} />
    <p class="descripcion">
      {@html descripcion}
    </p>
    {#if estado!=undefined}
      <PastillaEstado {estado} {link} />
    {/if}
  </div>

  <div class="caracteristicas">
    <h1>CARACTERISTICAS</h1>
    <div class="break" />
    <Slideshow {showcase} />
    {#if caracteristicas.length > 0}
      <ul class="listadoCaracteristicas">
        {#each caracteristicas as caracteristica}
          <li>{caracteristica}</li>
        {/each}
      </ul>
    {/if}
  </div>
  {#if tecnologias.length > 0}
    <div class="tecnologias">
      <h1>TECNOLOGIAS UTILIZADAS</h1>
      <div class="break" />
      {#each tecnologias as tecnologia}
        <Tecnologia {tecnologia} />
      {/each}
    </div>
  {/if}
</div>

<script context="module">
  import proyectos from "./_proyectos.js";
</script>

<script>
  import Proyecto from "../components/Proyecto.svelte";

</script>

<style>
  .principal {
    display: flex;
    width: 100%;
    overflow-x: hidden;
    justify-content: center;
    flex-wrap: wrap;
  }
  img {
    flex: 1 1 40em;
    width: 2em;
    min-width: 2em;
    padding: 1em;
    border-radius: 2em;
    height: auto;
    max-width: 90%;
  }
  p {
    flex: 1 1 20em;
    padding: 0em 1em;
    font-size: 1.4em;
  }
  span {
    color: var(--color-acento);
    font-weight: 500;
  }
  .proyectos {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  hr{
	  width:100%;
	  border-color:var(--color-acento);
	  background-color: var(--color-acento);
	  margin: 1em;
  }
  h1{
	  width: 100%;
	  padding:0em 1em;
	  color: var(--color-themeContraste);
  }
</style>

<svelte:head>
  <title>CIME Metrovias</title>
</svelte:head>

<div class="principal">
<h1>
   Quienes Somos
  </h1>
  <img src="labo.jpg" alt="Laboratorio" />
  <p>
    El Centro Integral de Mantenimiento Electrónico
    <span>(CIME)</span>
    fue abierto en el 2007 con la finalidad de atender las necesidades del
    <span>sistema ATP</span>
    (Automatic Train Protection), como de la electrónica de las distintas flotas
    del subte y premetro. Aparte del mantenimiento y la reparación de los
    equipos electrónicos, el CIME se dedica al
    <span>I+D</span>
    y al
    <span>desarrollo de soluciones tecnológicas</span>
    que tengan como finalidad directa o indirecta, la mejora en el servicio que
    brinda la empresa.
  </p>
  <hr>
  <h1>
   Proyectos
  </h1>
  <div class="proyectos">
    {#each proyectos as proyecto}
      <Proyecto {...proyecto} />     
    {/each}
  </div>
</div>

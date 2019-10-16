<script>
  export let estado = 0;
  export let link = "";
  $: textoEstado = estado == 0 ? "En Desarrollo" : "Prototipo en Pruebas";
</script>

<style>
  .pastilla {
    padding: 1em 2em;
    background: var(--color-acento);
    margin: 1em;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 10em;
    text-decoration: none;
    color: white;
    display:flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  a {
    cursor: pointer;
  }
</style>

{#if estado < 2}
  <div class="pastilla">{textoEstado}</div>
{:else if estado == 2 && link != ''}
  <a class="pastilla" href={link}>Web del Proyecto</a>
{/if}

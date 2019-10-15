<script>
  export let tecnologia = "";
  $: icon = `icons/${tecnologia.toLowerCase()}.svg`;
</script>

<style>
  .tecnologia {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2em 2em;
  }
  span {
    font-size: 1.2em;
  }
  .pastilla {
    height: 5em;
    width: 5em;
    margin-bottom: 1em;
    border-radius: 5em;
    background: var(--color-acento);
    justify-content: center;
    align-items: center;
    display: flex;
  }
  img {
    width: 3em;
    height: 3em;
  }
</style>

<div class="tecnologia">
  <div class="pastilla">
    <img src={icon} alt={tecnologia} />
  </div>
  <span>{tecnologia}</span>
</div>

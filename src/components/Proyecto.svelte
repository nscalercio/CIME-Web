<script>
  export let nombre;
  export let breve;
  export let logo;
  export let id;
</script>

<style>
  .proyecto {
    margin: 1em;
    padding: 1.5em;
    height: 15em;
    width: 25em;
    border: 0.1em solid var(--color-acento);
    background: var(--color-theme);
    border-radius: 1em;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition: all linear 0.5s;
    color: var(--color-blanco);
    text-decoration: none;
  }
  .proyecto:hover {
    background: var(--color-acento);
  }
  img {
    width: auto;
    height: 4em;
  }
  p {
    font-size: 1.2em;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: justify;
  }
</style>

<a class="proyecto" href={`/proyecto?id=${id}`}>
  <img src={`logos/${logo}`} alt={logo} />
  <p>{breve}</p>
</a>

<script>
    let someText = `Backend developer`
    let count = 0
    let styles = {
        darkMode: false
    }

    function handleClick() {
        count += 1
    }

    function toogle() {
        styles.darkMode = !styles.darkMode
        window.document.body.classList.toggle('dark-mode');
    }
</script>

<style>
    p {
        color: var(--them-color);
    }
</style>

<div class="about">
    {#if styles.darkMode}
        <p>{someText}</p>
    {:else}
        <p><span>Hola dark mode</span></p>
    {/if}
    <button on:click={handleClick}>Click {count}</button>
    <button on:click={toogle}>Dark mode</button>
</div>
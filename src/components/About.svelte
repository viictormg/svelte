<script>
    let someText = `Backend developer`
    let count = 0

    function handleClick() {
        count += 1
    }
</script>

<style>
    p {
        color: var(--them-color);
    }
</style>

<div class="about">
    <p>{someText}</p>
    <button on:click={handleClick}>Click {count}</button>
</div>
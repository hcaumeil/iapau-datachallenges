<script lang="ts">
    import "iapau-components/css/default-theme.css"
</script>


<style global>
    :global(html) {
        height: 100%;
        margin: 0;
    }

    :global(body) {
        height: 100%;
        margin: 0;
        font-family: "Montserrat";
    }

    :global(.column-center) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
</style>


<slot/>

<script lang="ts">
    export let showMenu: boolean = true;

    export let src: string = "/me"





</script>


<iapau-link href={src}>
    <div class="icon" style=" display: inline-block; vertical-align: middle">
        <slot name="icon" />
    </div>

    {#if showMenu}
        <div class="title" style=" display: inline-block; vertical-align: middle">
            <slot name="title" />
        </div>
    {/if}

</iapau-link>


<style>
</style>
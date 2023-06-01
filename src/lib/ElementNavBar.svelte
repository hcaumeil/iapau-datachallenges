<script lang="ts">
    export let showMenu: boolean = true;






</script>


<div class="element">

    <div class="icon" style=" display: inline-block; vertical-align: middle">
        <slot name="icon" />
    </div>

    {#if showMenu}
        <div class="title" style=" display: inline-block; vertical-align: middle">
            <slot name="title" />
        </div>
    {/if}

</div>


<style>

    .element:hover{
        color: grey;
    }
</style>
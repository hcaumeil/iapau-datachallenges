<script lang="ts">
    export let title: string = "";
</script>

<iapau-card
        style="display: block; overflow: hidden; width: 25%; padding: 3% 0 3% 0 ; margin: 2.5%"
        hoverUpAnimation="true" hoverBorder="true"

>

        <div style="text-align: center;" class="column-center">
            <h3>{title}</h3>
            <slot name="content" />
            <div style="font-size: x-small; right: 0;bottom: 0">
            <slot name="date" ></slot>
            </div>
        </div>
</iapau-card>

<style>
</style>

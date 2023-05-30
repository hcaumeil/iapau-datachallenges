<script lang="ts">
    export let title: string = "";
    export let href: string = ".";
    export let hoverUpAnimation = true;
    export let height = "auto";
</script>

<iapau-card
        style="display: block; overflow: hidden; width: 25%; padding: 5% 0 5% 0 ; margin: 2.5%"
        hoverUpAnimation="true" hoverBorder="true"

>
        <div style="text-align: center;" class="column-center">
            <h3>{title}</h3>
            <slot name="content" />
        </div>
</iapau-card>

<style>
</style>

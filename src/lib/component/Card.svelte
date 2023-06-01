<script lang="ts">
    export let title: string = "";
    import iapau_api from "../../routes/+layout.svelte"

</script>

<iapau-card
        style="display: block; overflow: hidden; width: 25%; padding: 2% 0 2% 0 ; margin: 2.5%"
        hoverUpAnimation="true" hoverBorder="true"

>
    <!-- user == admin -->
    <div style="text-align: center;" class="column-center">
        <slot/>
        <h3>{title}</h3>

        <slot name="description"/>
        <div style="font-size: x-small; display: flex; justify-content: space-around; width: 100%; margin-top: 5%">
            <slot name="datebegin"></slot>
            <slot name="dateend"></slot>
        </div>
    </div>

    <iapau-button hoverColors size="sm" style="float: right; margin-right: 2%">Participer
    </iapau-button>
    <iapau-button mode="secondary" hoverColors size="sm" style="float: right; margin-right: 2%">Info</iapau-button>
</iapau-card>

<style>
</style>

<script lang="ts">
    import "iapau-components/iapau-card";
    import "iapau-components/iapau-input";
    import "iapau-components/iapau-button";
    import "iapau-components/iapau-select";
    import "iapau-components/iapau-link";
    import ElementNavBar from "$lib/ElementNavBar.svelte";
    import buttonMenu from "remixicon/icons/System/menu-line.svg"
    import settings from "remixicon/icons/System/settings-3-line.svg"
    import message from "remixicon/icons/Communication/message-3-line.svg"
    import home from "remixicon/icons/Buildings/home-wifi-line.svg"
    import dataP from "remixicon/icons/Development/code-s-slash-fill.svg"
    import dataC from "remixicon/icons/Business/stack-line.svg"

    let showMenu = true

    function menu() {
        showMenu = !showMenu
    }
</script>


<div class="navbar" style="display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;">

    <img src="{buttonMenu}" on:click={menu} style="width:20px; left: 0;cursor: pointer; " alt="test">

    <div class="column-center">




        <ElementNavBar showMenu={showMenu}>
            <img src="{home}"
                 slot="icon"
                 style="width: 1vw"
                 alt="Icon"/>


            <span slot="title" style="width: 1vw">
               Accueil
           </span>

        </ElementNavBar>

        <ElementNavBar showMenu={showMenu}>
            <img src="{dataC}"
                 slot="icon"
                 style="width: 1vw"
                 alt="Icon"/>


            <span slot="title" style="width: 1vw">
               Data Challenge
           </span>

        </ElementNavBar>

        <ElementNavBar showMenu={showMenu}>
            <img src="{dataP}"
                 slot="icon"
                 style="width: 1vw"
                 alt="Icon"/>


            <span slot="title" style="width: 1vw">
               Data project
           </span>

        </ElementNavBar>

        <ElementNavBar showMenu={showMenu}>
            <img src="{message}"
                 slot="icon"
                 style="width: 1vw"
                 alt="Icon"/>


            <span slot="title" style="width: 1vw">
               Messagerie
           </span>

        </ElementNavBar>

    </div>




    <img src="{settings}" alt="" style="width:24px">
</div>


<style>

    .navbar {
        position: absolute;
        top: 0;
        box-shadow: 0px 10px 40px 0px rgba(0,0,0,0.32);
        height: 100%;
        width: fit-content;
        padding: 0 2.5% 0 2.5%;
    }

</style>

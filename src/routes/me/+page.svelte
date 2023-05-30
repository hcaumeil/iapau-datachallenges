<script lang="ts" xmlns="http://www.w3.org/1999/html">
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
    import disconnect from "remixicon/icons/Arrows/contract-left-line.svg"
    import DataProject from "$lib/DataProject.svelte";
    import DataChallenge from "$lib/DataChallenge.svelte";
    import Tchat from "$lib/Tchat.svelte";


    let showMenu = true

    function menu() {
        showMenu = !showMenu
    }

    let selectedButton = '';

    function selectButton(buttonName) {
        selectedButton = buttonName;
    }

</script>

<div style="display: flex;height: 100%">
    <div class="navbar" style="display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 5%">

        <img src="{buttonMenu}" on:click={menu} style="width:20px; left: 0;cursor: pointer; " alt="test">

        <div style="
    display: flex;
    flex-direction: column"
        >


            <button on:click={() => selectButton('')}>
                <ElementNavBar showMenu={showMenu}>
                    <img src="{home}"
                         slot="icon"
                         style="width: 1.5vw"
                         alt="Icon"/>


                    <span slot="title" style="width: 1.5vw">
               Accueil
           </span>

                </ElementNavBar>
            </button>


            <button on:click={() => selectButton('dataChallenge')}>
                <ElementNavBar showMenu={showMenu}>
                    <img src="{dataC}"
                         slot="icon"
                         style="width: 1.5vw"
                         alt="Icon"/>


                    <span slot="title" style="width: 1.5vw">
               Data Challenge
           </span>

                </ElementNavBar>
            </button>

            <button on:click={() => selectButton('dataProject')}>
                <ElementNavBar showMenu={showMenu} on:click={() => selectButton('dataProject')}>
                    <img src="{dataP}"
                         slot="icon"
                         style="width: 1.5vw"
                         alt="Icon"/>


                    <span slot="title" style="width: 1.5vw">
               Data project
           </span>

                </ElementNavBar>
            </button>


            <button on:click={() => selectButton('tchat')}>
                <ElementNavBar showMenu={showMenu} on:click={() => selectButton('dataProject')}>
                    <img src="{message}"
                         slot="icon"
                         style="width: 1.5vw"
                         alt="Icon"/>


                    <span slot="title" style="width: 1.5vw">
               Messagerie
           </span>

                </ElementNavBar>
            </button>

        </div>
        <div>
            <a href=".">
            <img src="{settings}" alt="" style="width:24px"></a>

            <a href=".">
            <img src="{disconnect}" alt="" style="width:24px; float: right"></a>


        </div>
    </div>


    {#if selectedButton === 'dataProject'}
        <DataProject/>
    {:else if selectedButton === 'dataChallenge'}
        <DataChallenge/>
    {:else if selectedButton === 'tchat'}
        <Tchat/>
    {/if}


</div>


<style>

    .navbar {
        top: 0;
        box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.32);
        width: fit-content;
        padding: 0 2.5% 0 2.5%;
    }

    button {
        border: none;
        background: none;
        padding: 0;
        text-align: left;
    }

</style>

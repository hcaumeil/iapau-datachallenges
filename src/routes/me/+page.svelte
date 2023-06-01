<script lang="ts" xmlns="http://www.w3.org/1999/html">
  import "iapau-components/iapau-card";
  import "iapau-components/iapau-input";
  import "iapau-components/iapau-button";
  import "iapau-components/iapau-select";
  import "iapau-components/iapau-link";
  import "iapau-components/iapau-textarea";
  import "iapau-components/iapau-modal"
  import buttonMenu from "remixicon/icons/System/menu-line.svg";
  import settings from "remixicon/icons/System/settings-3-line.svg";
  import message from "remixicon/icons/Communication/message-3-line.svg";
  import home from "remixicon/icons/Buildings/home-wifi-line.svg";
  import dataP from "remixicon/icons/Development/code-s-slash-fill.svg";
  import dataC from "remixicon/icons/Business/stack-line.svg";
  import team from "remixicon/icons/User & Faces/team-line.svg";
  import disconnect from "remixicon/icons/Arrows/contract-left-line.svg";
  import analyse from "remixicon/icons/Editor/link.svg";
  import close from "remixicon/icons/System/close-line.svg";
  import ElementNavBar from "$lib/ElementNavBar.svelte";
  import DataB from "remixicon/icons/Communication/questionnaire-line.svg";
  import MyDataB from "remixicon/icons/Communication/questionnaire-fill.svg";
  import DataProject from "$lib/DataProject.svelte";
  import DataChallenge from "$lib/DataChallenge.svelte";
  import Tchat from "$lib/Tchat.svelte";
  import Team from "$lib/Team.svelte";
  import DataBattle from "$lib/DataBattle.svelte";
  import MyDataBattle from "$lib/MyDataBattle.svelte";
  import Acceuil from "$lib/Acceuil.svelte";
  import CodeAnalyse from "$lib/CodeAnalyse.svelte";
  import TableUsers from "$lib/TableUsers.svelte";

  let showMenu = false;

  function menu() {
    showMenu = !showMenu;
  }

  let selectedButton = "accueil";

  function selectButton(buttonName) {
    selectedButton = buttonName;
  }
</script>

<div style="display: flex;height: 100%">
  <div
    class="navbar"
    style="display: flex;
    flex-direction: column;
    justify-content: space-around; align-items: start;"
  >
    {#if showMenu}
      <div style="width: 100%; display: flex; justify-content: end;">
        <img
          src={close}
          on:click={menu}
          style="width: 1.5vw; left: 0;cursor: pointer; "
        />
      </div>
    {:else}
      <img
        src={buttonMenu}
        on:click={menu}
        style="width: 1.5vw; left: 0;cursor: pointer;"
      />
    {/if}

    <div
      style="
    display: flex;
    flex-direction: column; gap: 5px;"
    >
      <button on:click={() => selectButton("accueil")}>
        <ElementNavBar {showMenu}>
          <img src={home} slot="icon" style="width: 1.5vw" alt="Icon" />

          <span slot="title" style="width: 1.5vw"> Accueil </span>
        </ElementNavBar>
      </button>

      <button on:click={() => selectButton("dataChallenge")}>
        <ElementNavBar {showMenu}>
          <img src={dataC} slot="icon" style="width: 1.5vw" alt="Icon" />

          <span slot="title" style="width: 1.5vw"> Data Challenge </span>
        </ElementNavBar>
      </button>

      <button on:click={() => selectButton("dataProject")}>
        <ElementNavBar {showMenu}>
          <img src={dataP} slot="icon" style="width: 1.5vw" alt="Icon" />

          <span slot="title" style="width: 1.5vw"> Data project </span>
        </ElementNavBar>
      </button>

      <button on:click={() => selectButton("tchat")}>
        <ElementNavBar {showMenu}>
          <img src={message} slot="icon" style="width: 1.5vw" alt="Icon" />

          <span slot="title" style="width: 1.5vw"> Messagerie </span>
        </ElementNavBar>
      </button>

      <button on:click={() => selectButton("team")}>
        <ElementNavBar {showMenu}>
          <img src={team} slot="icon" style="width: 1.5vw" alt="Icon" />

          <span slot="title" style="width: 1.5vw"> Mes equipes </span>
        </ElementNavBar>
      </button>

      <button on:click={() => selectButton("dataBattle")}>
        <ElementNavBar {showMenu}>
          <img src={DataB} slot="icon" style="width: 1.5vw" alt="Icon" />

          <span slot="title" style="width: 1.5vw"> Data Battle </span>
        </ElementNavBar>
      </button>

      <button on:click={() => selectButton("mydatabattle")}>
        <ElementNavBar {showMenu}>
          <img src={MyDataB} slot="icon" style="width: 1.5vw" alt="Icon" />

          <span slot="title" style="width: 1.5vw"> Mes Data Battle </span>
        </ElementNavBar>
      </button>

      <button on:click={() => selectButton("codeanalyse")}>
        <ElementNavBar {showMenu}>
          <img src={analyse} slot="icon" style="width: 1.5vw" alt="Icon" />

          <span slot="title" style="width: 1.5vw"> Code Analyseur </span>
        </ElementNavBar>
      </button>

      <button on:click={() => selectButton("users")}>
        <ElementNavBar {showMenu}>
          <img src={dataP} slot="icon" style="width: 1.5vw" alt="Icon" />

          <span slot="title" style="width: 1.5vw"> Utilisateur </span>
        </ElementNavBar>
      </button>
    </div>
    <div style="gap: 0.875rem;display: flex;flex-direction: column">
      <button on:click={() => selectButton("codeanalyse")}>
        <ElementNavBar {showMenu}>
          <img src={settings} slot="icon" style="width: 1.5vw" alt="Icon" />

          <span slot="title" style="width: 1.5vw"> Paramètres </span>
        </ElementNavBar>
      </button>

      <button on:click={() => selectButton("users")}>
        <ElementNavBar {showMenu}>
          <img src={disconnect} slot="icon" style="width: 1.5vw" alt="Icon" />

          <span slot="title" style="width: 1.5vw"> Deconnexion </span>
        </ElementNavBar>
      </button>
    </div>
  </div>

  <div
    style="
    width: 100%"
  >
    {#if selectedButton === "dataProject"}
      <DataProject />
    {:else if selectedButton === "dataChallenge"}
      <DataChallenge />
    {:else if selectedButton === "team"}
      <Team />
    {:else if selectedButton === "tchat"}
      <Tchat />
    {:else if selectedButton === "dataBattle"}
      <DataBattle />
    {:else if selectedButton === "mydatabattle"}
      <MyDataBattle />
    {:else if selectedButton === "accueil"}
      <Acceuil />
    {:else if selectedButton === "codeanalyse"}
      <CodeAnalyse />
    {:else if selectedButton === "users"}
      <TableUsers />
    {/if}
  </div>
</div>

<style>
  .navbar {
    top: 0;
    box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.32);
    width: fit-content;
    padding: 0 2rem;
    min-height: 100%;
    height: fit-content;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    text-align: left;
  }
</style>

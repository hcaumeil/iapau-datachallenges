<script lang="ts">
  import "iapau-components/css/default-theme.css";
  import { page } from "$app/stores";

  const pages = [
    ["Accueil", "/me"],
    ["Register", "/register"],
    ["Settings", "/settings"],
    ["DataChallenge", "/dataChallenge"],
    ["DataProject", "/dataProject"],
    ["tchat", "/tchat"],
  ];

  let current_page: string;
  $: current_page = $page.url.pathname;
</script>

<slot />

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
  }

  :global(.link) {
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
  }

  :global(.parallax) {
    min-height: 6rem;

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("/fonts/Montserrat-Medium.ttf");
  }

  @font-face {
    font-family: "Montserrat";
    src: url("/fonts/Montserrat-Light.ttf");
    font-weight: 300;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("/fonts/Montserrat-Bold.ttf");
    font-weight: bold;
  }
</style>

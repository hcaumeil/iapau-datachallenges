<script lang="ts">
  import "iapau-components/css/default-theme.css";
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

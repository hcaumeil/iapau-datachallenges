<script lang="ts">
  import "iapau-components/iapau-card";
  import "iapau-components/iapau-input";
  import "iapau-components/iapau-button";
  import "iapau-components/iapau-select";
  import "iapau-components/iapau-link";
</script>

<div class="column-center" style="height: 100%">
  <iapau-card class="column-center card">
    <p style="font-size: 1.5vw">Inscription</p>

    <form class="column-center card">
      <iapau-input
        name="user"
        typeInput="text"
        placeholder="E-mail"
        style="margin:5%"
      />
      <iapau-input
        name="password"
        typeInput="password"
        placeholder="password"
        style="margin:5%"
      />
      <iapau-input typeInput="text" placeholder="Pseudo" style="margin:5%" />
      <iapau-select id="mySelect" style="margin:5%" />
      <iapau-input typeInput="text" placeholder="Ecole" style="margin:5%" />
    </form>

    <iapau-button mode="primary" hoverColors="true" style="margin:5%"
      ><a class="link" href="/me">Continuer</a></iapau-button
    >
  </iapau-card>

  <script>
    const selectElement = document.querySelector("#mySelect");
    const options = ["Bac+1", "Bac+2", "Bac+3", "Bac+4", "Bac+5"];
    selectElement.options = options;
  </script>
</div>

<style>
  .card {
    height: fit-content;
    width: fit-content;
    padding: 2% 15%;
  }
</style>

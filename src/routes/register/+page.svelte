<script lang="ts">
  import "iapau-components/iapau-card";
  import "iapau-components/iapau-input";
  import "iapau-components/iapau-button";
  import "iapau-components/iapau-select";
  import "iapau-components/iapau-link";

  const options = ["Bac+1", "Bac+2", "Bac+3", "Bac+4", "Bac+5"];

  let email;

  function email_check(e) {
    if (e == "dd") {
      console.log("dd")
    }
  }
</script>

<div
  class="column-center"
  style="height: 100%; background-image: url(/img/ossau.jpg);background-size: cover;"
>
  <iapau-card class="column-center card">
    <p style="font-size: 2rem; margin-top: 1rem;">Inscription</p>
    <p style="font-size: 1rem; font-weight: 300;">
      Vous êtes sur le point de créer un compte IA Pau
    </p>
    <iapau-input typeInput="email" placeholder="E-mail" oninput={(e) => email = e}/>
    <iapau-input typeInput="password" placeholder="password" />
    <iapau-input typeInput="text" placeholder="Pseudo" />
    <iapau-select id="mySelect" {options} />
    <iapau-input typeInput="text" placeholder="Ecole" />

    <iapau-button mode="primary" hoverColors="true" style="margin:5%"
      ><a class="link" href="/me">Continuer</a></iapau-button
    >
  </iapau-card>
</div>

<style>
  .card {
    height: fit-content;
    width: fit-content;
    padding: 1rem;
    margin: 1rem;
  }

  p {
    margin: 0.5rem;
    text-align: center;
  }

  iapau-select {
    margin-top: 0.875rem;
    width: 75%;
    min-width: 350px;
    display: flex;
  }

  iapau-input {
    width: 75%;
    min-width: 350px;
    margin-top: 0.875rem;
    display: flex;
  }
</style>

<script lang="ts">
  import "iapau-components/iapau-card";
  import "iapau-components/iapau-input";
  import "iapau-components/iapau-button";
  import { iapau_api } from "./const";
  import {token} from "../token"



  let email = "";
  let password = "";
  let error: boolean = false;

  const handleLogin = async () => {
    const response = await fetch(iapau_api + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: email,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      $token = data.token
      console.log(data);

      const res = await fetch(iapau_api + "/api/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + data.token,
        },
      });

      console.log(await res.json());
      window.location.href = "me";
      console.log(data.token)

    } else {
      const errorData = await response.json();
      if (response.status == 401) {
        error = true;
      }
      console.error(errorData.error);
    }
  };
</script>

<div
  class="column-center paralax"
  style="min-height: 100%; background-image: url(img/ossau.jpg);background-size: cover;"
>
  <iapau-card class="column-center card">
    <img
      src="img/iapau_round.png"
      alt="logo"
      style="height: 15vh; margin: 1rem;"
    />
    <p style="font-size: 2rem;">Bienvenue</p>
    <p style="font-size: 1rem; font-weight: 300;">
      Connectez vous à l'aide de votre compte IA Pau
    </p>
    {#if error}
      <p
        style="font-size: 0.875rem; font-weight: 300; margin-top: 0.5rem; color:red"
      >
        Mauvais login ou mot de passe
      </p>
    {/if}
    <iapau-input
      oninput={(e) => (email = e)}
      typeInput="text"
      placeholder="E-mail"
    />
    <iapau-input
      oninput={(e) => (password = e)}
      typeInput="password"
      placeholder="Mot de passe"
    />

    <div
      style="display: flex; margin-top: 2rem; justify-content: space-evenly; width: 100%;"
    >
      <iapau-button on:click={handleLogin} mode="primary"
        >Connexion</iapau-button
      >
      <iapau-button mode="secondary" hoverColors="true"
        ><a class="link" href="register">Inscription</a></iapau-button
      >
    </div>
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
    margin: 0;
    text-align: center;
  }

  iapau-input {
    width: 75%;
    min-width: 350px;
    margin-top: 0.875rem;
    display: flex;
  }
</style>

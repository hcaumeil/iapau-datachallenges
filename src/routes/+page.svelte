<script lang="ts">
  import "iapau-components/iapau-card";
  import "iapau-components/iapau-input";
  import "iapau-components/iapau-button";

  let email = "";
  let password = "";

  const handleEmailInput = (event) => {
    email = event.target.value;
  };

  const handlePasswordInput = (event) => {
    password = event.target.value;
  };
  const handleLogin = async () => {
    const response = await fetch("/api/login", {
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
      console.log(data);
    } else {
      alert("test");
      const errorData = await response.json();
      console.error(errorData.error);
    }
  };
</script>

<div
  class="column-center"
  style="height: 100%; background-image: url(/img/ossau.jpg);background-size: cover;"
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

    <div style="display: flex; margin-top: 2rem; gap: 2rem;">
      <iapau-button on:click={handleLogin} mode="primary" hoverColors="true"
        >Connexion</iapau-button
      >
      <iapau-button mode="secondary" hoverColors="true"
        ><a class="link" href="/register">Inscription</a></iapau-button
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

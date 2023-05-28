<script lang="ts">
  import "iapau-components/iapau-card";
  import "iapau-components/iapau-input";
  import "iapau-components/iapau-button";
  import "iapau-components/iapau-select";
  import "iapau-components/iapau-link";
  import ElementNavBar from "$lib/ElementNavBar.svelte";

  const options = ["Bac+1", "Bac+2", "Bac+3", "Bac+4", "Bac+5"];

  let email;
  let password;

  let name;
  let surname;
  let town;

  let school = "";
  let study_level = "";

  let email_error = false;
  let fields_error = false;

  let cursor = 0;

  function prev() {
    const items = document.querySelector("#slider")?.children;
    if (cursor != 0) {
      items[cursor].classList.remove("current");
      cursor--;
      items[cursor].classList.add("current");

      fields_error = false;
    }
  }

  async function next() {
    const items = document.querySelector("#slider")?.children;

    if (cursor == 0) {
      if (email) {
        const e_check = await email_check();
        if (!e_check) {
          email_error = true;
          return;
        }

        email_error = false;
      }

      if (!email || !password) {
        fields_error = true;
        return;
      }
    }

    if (cursor == 1) {
      if (!name || !surname || !town) {
        fields_error = true;
        return;
      }
    }

    fields_error = false;

    if (cursor + 1 == items?.length) {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password,
          surname,
          name,
          town,
          school,
          study_level,
        }),
      });

      if (response.ok) {
        window.location.href = "/me";
      }
    } else {
      items[cursor].classList.remove("current");
      cursor++;
      items[cursor].classList.add("current");
    }
  }

  async function email_check(): boolean {
    const response = await fetch("/api/users", {
      headers: {
        email: email,
      },
    });

    return response.status == 200;
  }
</script>

<div
  class="column-center"
  style="min-height: 100%; background-image: url(/img/ossau.jpg);background-size: cover;"
>
  <iapau-card class="column-center card">
    <p style="font-size: 2rem; margin-top: 1rem;">Inscription</p>
    <p style="font-size: 1rem; font-weight: 300;">
      Vous êtes sur le point de créer un compte IA Pau
    </p>
    {#if fields_error}
      <p style="font-size: 0.875rem; font-weight: 300; color: red">
        Veuillez remplir tous les champs
      </p>
    {/if}
    {#if email_error}
      <p style="font-size: 0.875rem; font-weight: 300; color: red">
        Ce mail est deja pris
      </p>
    {/if}
    <div id="slider" style="transition: inherit;">
      <div class="element current">
        <iapau-input
          typeInput="email"
          placeholder="E-mail"
          oninput={(e) => (email = e)}
        />
        <iapau-input
          typeInput="password"
          placeholder="Mot de passe"
          oninput={(e) => (password = e)}
        />
      </div>
      <div class="element">
        <iapau-input
          typeInput="text"
          placeholder="Nom"
          oninput={(e) => (surname = e)}
        />
        <iapau-input
          typeInput="text"
          placeholder="Prénom"
          oninput={(e) => (name = e)}
        />
        <iapau-input
          typeInput="text"
          placeholder="Ville"
          oninput={(e) => (town = e)}
        />
      </div>
      <div class="element">
        <iapau-input
          typeInput="text"
          placeholder="École"
          oninput={(e) => (school = e)}
        />
        <iapau-select
          label="Niveau d'étude"
          oninput={(e) => (study_level = e)}
          {options}
        />
      </div>
    </div>
    <div
      style="display: flex; justify-content: space-evenly; margin-top: 1rem;"
    >
      {#if cursor != 0}
        <iapau-button mode="primary" style="margin:5%" onClick={prev}>
          Retour</iapau-button
        >
      {/if}
      <iapau-button mode="primary" style="margin:5%" onClick={next}>
        Continuer</iapau-button
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
    transition: all 2s ease;
  }

  .element {
    display: none;
  }

  .current {
    display: flex;
    flex-direction: column;
    animation: fade 1s;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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

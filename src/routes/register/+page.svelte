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

  let email_error = false;
  let fields_error = false;

  // surname,name,password,study_level,town,school

  let cursor = 0;

  function prev() {
    if (cursor != 0) {
      items[cursor].classList.remove("current");
      cursor--;
      items[cursor].classList.add("current");
    }
  }

  function next() {
    const items = document.querySelector("#slider")?.children;

    if (cursor == 0) {
      if (email) {
        const e_check = email_check();
        if (!e_check) {
          email_error = true;
          return;
        }
      }

      if (!email || !password) {
        fields_error = true;
        return;
      }
    }

    fields_error = false;

    if (cursor + 1 == items?.length) {
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
        <iapau-input typeInput="text" placeholder="Pseudo" />
        <iapau-select id="mySelect" {options} />
        <iapau-input typeInput="text" placeholder="Ecole" />
      </div>
    </div>
    <iapau-button mode="primary" style="margin:5%" onClick={next}>
      Continuer</iapau-button
    >
  </iapau-card>
</div>

<style>
  .card {
    height: fit-content;
    width: fit-content;
    padding: 1rem;
    margin: 1rem;
    transition: all 1s ease;
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

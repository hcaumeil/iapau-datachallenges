<script>
  import { analitycs_api } from "../routes/const.js";

  let code = "";
  let res = "";

  async function handleButton() {
    const data = {
      code: code,
    };

    code.split(" ").forEach(e => data[e] = e)

    try {
      const response = await fetch(analitycs_api + "/raw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Code ajouté avec succès");
        res = await response.json()
      } else {
        console.error("Erreur lors de l'ajout du Code");
      }
    } catch (error) {
      console.error("Erreur lors de la requête POST", error);
    }
  }
</script>

<div style="height: 100%" class="column-center">
  <h2>Analyse code</h2>

  <iapau-textarea
    cols="50"
    rows="15"
    oninput={(e) => (code = e)}
    style="margin: 5rem;"
  />

  <iapau-button
    on:click={() => {
      handleButton();
    }}>Valider</iapau-button
  >

  <p>{res}</p>
  <p />
</div>

<style>
</style>

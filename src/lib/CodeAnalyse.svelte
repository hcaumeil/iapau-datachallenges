<script>

    import {analitycs_api} from "../routes/const.js";

    let code= ""

    async function handleButton(){
        const data = {
            code:code
        }

        try {
            const response = await fetch(analitycs_api +'/raw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log('Code ajouté avec succès');
            } else {
                console.error("Erreur lors de l'ajout du Code");
            }
        } catch (error) {
            console.error('Erreur lors de la requête POST', error);
        }


    }


</script>


<div style="height: 100%">

    <h2> Analyse code</h2>

    <iapau-textarea cols="200" rows="50" oninput={(e) => (code = e)}>

    </iapau-textarea>

    <iapau-button on:click={() => {
                handleButton();
              }} >Valider</iapau-button>




</div>



<style>


</style>
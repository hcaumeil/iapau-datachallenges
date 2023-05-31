<script>
    import { iapau_api } from "../routes/const.js";


    let name = '';
    let beginDate = '';
    let endDate = '';
    async function handleAddButtonClick() {
        const data = {
            name: name,
            begin_date: beginDate,
            end_date: endDate
        };

        try {
            const response = await fetch(iapau_api +'api/data_challenge', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                // La requête POST a réussi
                console.log('Data challenge ajouté avec succès');
            } else {
                // La requête POST a échoué
                console.error('Erreur lors de l\'ajout du data challenge');
            }
        } catch (error) {
            console.error('Erreur lors de la requête POST', error);
        }
    }
</script>


<div>
    <iapau-card class="column-center card">
        <h2> Ajouter un data challenge</h2>
        <iapau-input oninput={(e) => (name = e)} placeholder="nom du projet"/>
        <iapau-input oninput={(e) => (beginDate = e)}  label="Date de debut :" typeInput="date" ></iapau-input>
        <iapau-input oninput={(e) => (endDate = e)} label="Date de fin :" typeInput="date" ></iapau-input>
        <iapau-input placeholder ="ressources"/>



        <div
                style="display: flex; margin-top: 2rem; justify-content: space-evenly; width: 100%;"
        >
            <iapau-button mode="primary" hoverColors="true" on:click={handleAddButtonClick}
            >Ajouter</iapau-button
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
</style>
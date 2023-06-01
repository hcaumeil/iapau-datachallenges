<script>
    import { iapau_api } from "../routes/const.js";
    import "iapau-components/iapau-input";
    import "iapau-components/iapau-textarea";


    let name = '';
    let beginDate = '';
    let endDate = '';
    let description ='';

    function reverseDate(date){
        let dateParts = date.split("-");
        let year = dateParts[0];
        let month = dateParts[1];
        let day = dateParts[2];

        let formattedDate = day + "-" + month + "-" + year;
        return (formattedDate);
    }
    async function handleAddButtonClick() {
        const data = {
            name: name,
            begin_date: reverseDate(beginDate),
            end_date: reverseDate(endDate),
            description:  description,
        };

        try {
            const response = await fetch(iapau_api +'/api/data_challenge', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log('Data challenge ajouté avec succès');
            } else {
                console.error("Erreur lors de l'ajout du data challenge");
            }
        } catch (error) {
            console.error('Erreur lors de la requête POST', error);
        }
    }
</script>


<div style="text-align: center;
    justify-content: center;
    display: flex;">
    <iapau-card class="column-center card">
        <h2> Ajouter un data challenge</h2>

        <iapau-input oninput={(e) => (name = e)}  typeInput="text"  placeholder="nom du projet"/>
        <iapau-input oninput={(e) => (beginDate = e)}  label="Date de debut :" typeInput="date" />
        <iapau-input oninput={(e) => (endDate = e)} label="Date de fin :" typeInput="date" />
        <iapau-textarea cols="70" placeholder ="description" rows="6" style="margin-top: 3%" oninput={(e) => (description = e)} />



        <div
                style="display: flex; margin-top: 2rem; justify-content: space-evenly; width: 100%;"
        >

            <iapau-button mode="primary" hoverColors="true" on:click={handleAddButtonClick}
            >Ajouter</iapau-button>
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
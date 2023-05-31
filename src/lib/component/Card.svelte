<script lang="ts">
    export let title: string = "";
    import deleteD from "remixicon/icons/System/delete-bin-line.svg"
    import edit from "remixicon/icons/Design/edit-box-line.svg"
    import iapau_api from "../../routes/+layout.svelte"
    export let userId;

    async function handleParticipateButtonClick() {
        const data = {
            userId: userId,
        };

        try {
            const response = await fetch(iapau_api + '/data_challenge', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                // La requête POST a réussi
                console.log('Data challenge ajouté avec succès à l\'utilisateur');
            } else {
                // La requête POST a échoué
                console.error('Erreur lors de l\'ajout du data challenge à l\'utilisateur');
            }
        } catch (error) {
            console.error('Erreur lors de la requête POST', error);
        }
    }
</script>

<iapau-card
        style="display: block; overflow: hidden; width: 25%; padding: 3% 0 3% 0 ; margin: 2.5%"
        hoverUpAnimation="true" hoverBorder="true"

>
    <!-- user == admin -->
    <div style="margin-left: 2%">
        <img src="{edit}"
             style="width: 1vw"
             alt="Icon"/>
        <img src="{deleteD}"
             style="width: 1vw"
             alt="Icon"/>
    </div>

    <div style="text-align: center;" class="column-center">
        <h3>{title}</h3>
        <slot name="content"/>
        <div style="font-size: x-small;">
            <slot name="date"></slot>
        </div>
    </div>

    <iapau-button hoverColors size="sm" style="float: right; margin-right: 2%" on:click={handleParticipateButtonClick}
    >Participer</iapau-button>
    <iapau-button mode="secondary" hoverColors size="sm" style="float: right; margin-right: 2%">Info</iapau-button>
</iapau-card>

<style>
</style>

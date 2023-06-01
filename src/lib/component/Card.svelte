<script lang="ts">
    export let title: string = "";
    import {iapau_api} from "../../routes/const.js"

    export let dataCid: string ="";

    let isOpenSubject =false;
    let subjects =[]
    let filteredSubjects = []

    async function getSubject(dataChallengeId) {
        try {
            const response = await fetch(iapau_api + "/api/subject?data_challenge_id=" + dataChallengeId, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                subjects = await response.json();
                filteredSubjects = subjects.filter((subject) => subject.id_data_challenge === dataChallengeId);
            } else {
                console.error("Erreur lors de la récupération des utilisateurs");
            }
        } catch (error) {
            console.error("Erreur lors de la requête GET", error);
        }
    }


    async function getTeam(subjectId) {
        try {
            const response = await fetch(iapau_api + "/api/team?data_challenge_id=" + subjectId, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                subjects = await response.json();
                filteredSubjects = subjects.filter((subject) => subject.id_data_challenge === dataChallengeId);
            } else {
                console.error("Erreur lors de la récupération des utilisateurs");
            }
        } catch (error) {
            console.error("Erreur lors de la requête GET", error);
        }
    }

</script>

<iapau-card
        style="display: block; overflow: hidden; width: 25%; padding: 2% 0 2% 0 ; margin: 2.5%"
        hoverUpAnimation="true" hoverBorder="true"

>


    <div style="text-align: center;" class="column-center">
        <slot/>
        <h3>{title}</h3>

        <slot name="description"/>
        <div style="font-size: x-small; display: flex; justify-content: space-around; width: 100%; margin-top: 5%">
            <slot name="datebegin"></slot>
            <slot name="dateend"></slot>
        </div>
    </div>

    <iapau-button hoverColors size="sm" style="float: right; margin-right: 2%" on:click={() => {getSubject(dataCid); isOpenSubject=true}}>Participer
    </iapau-button>

    <iapau-button mode="secondary" hoverColors size="sm" style="float: right; margin-right: 2%">Info</iapau-button>
</iapau-card>

<iapau-modal modalB={isOpenSubject || null} title="Sujets">
    <div style="text-align: center; justify-content: center; display: flex">

        {#each filteredSubjects as filteredSubject}

        <iapau-card class="column-center card">

            <h2> {filteredSubject.name}</h2>

            <iapau-button> Ajouter </iapau-button>
            <iapau-button mode="secondary"> Voir Equipe </iapau-button>


        </iapau-card>

            {/each}

        <div style="display: flex; margin-top: 2rem; justify-content: space-evenly; width: 100%;">
            <iapau-button mode="secondary" class="close-button" on:click={() => (isOpenSubject = false)}>
                Close
            </iapau-button>
        </div>
    </div>

    <style>
        .card {
            height: fit-content;
            width: fit-content;
            padding: 1rem;
            margin: 1rem;
        }
    </style>
</iapau-modal>


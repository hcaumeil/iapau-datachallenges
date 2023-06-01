<script lang="ts">
    export let title: string = "";
    import {iapau_api} from "../../routes/const.js"
    import {token} from  "../../token"
    export let dataCid: string ="";

    let isOpenSubject =false;
    let isOpenAddTeam = false
    let subjects =[]
    let filteredSubjects = []
    let teams = []
    let filteredTeams = []
    let AddUsersTeam  = []
    let nameTeam =""
    let subjectId = ""
    let selectedSubjectId = null;
    let User1 =""
    let User2 =""
    let User3 =""

    let tokenValue;

    token.subscribe( value => {
        tokenValue = value;
    })


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
            const response = await fetch(iapau_api + "/api/team", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + tokenValue,
                },
            });

            if (response.ok) {
                teams = await response.json();
                filteredTeams = teams.filter((team) => team.id_subject === subjectId);

                console.log(filteredTeams)
                console.log(subjectId)
            } else {
                console.error("Erreur lors de la récupération des utilisateurs");
            }
        } catch (error) {
            console.error("Erreur lors de la requête GET", error);
        }
    }

    async function handleButtonClick(){
        const data = {
            name: nameTeam,
            id_subject: selectedSubjectId,
            id_users: AddUsersTeam
        }

        try {
            const response = await fetch(iapau_api +'/api/team', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + tokenValue,
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log('Team ajouté avec succès');
            } else {
                console.error("Erreur lors de l'ajout de Team");
            }
        } catch (error) {
            console.error('Erreur lors de la requête POST', error);
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

<iapau-modal modalB={isOpenAddTeam || null} title="Create Team">
    <iapau-input oninput={(e) => (nameTeam = e)} typeInput="text" placeholder="nom de l'équipe" > </iapau-input>
    <iapau-input oninput={(e) =>(User1 = e)} typeInput="text" placeholder="User1" > </iapau-input>
    <iapau-input oninput={(e) =>(User2 = e)} typeInput="text" placeholder="User2" > </iapau-input>
    <iapau-input oninput={(e) =>(User3 = e)} typeInput="text" placeholder="User3" > </iapau-input>

    <iapau-button mode="secondary" class="close-button" on:click={() => (isOpenAddTeam = false)}>
        Close
    </iapau-button>

    <iapau-button
            mode="primary"
            hoverColors="true"
            on:click={() => {
                AddUsersTeam.push(User1,User2,User3);
                handleButtonClick();
                isOpenAddTeam = false;
              }}>Ajouter
    </iapau-button>

</iapau-modal>


<iapau-modal modalB={isOpenSubject || null} title="Sujets">
    <div style="text-align: center; justify-content: center; display: flex">

        {#each filteredSubjects as filteredSubject}

            <iapau-card class="column-center card">

                <h2> {filteredSubject.name}</h2>

                <iapau-button on:click={() => {isOpenAddTeam=true; selectedSubjectId=filteredSubject.id; isOpenSubject=false }} > Ajouter </iapau-button>
                <iapau-button mode="secondary" on:click={() => {getTeam(filteredSubject.id)}}> Voir Equipe </iapau-button>


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


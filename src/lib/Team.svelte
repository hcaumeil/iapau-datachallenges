<script>
    import TeamMember from "$lib/component/TeamMember.svelte";
    import {iapau_api} from "../routes/const.js";
    import {token} from "../token.js";
    import {onMount} from "svelte";

    let tokenValue;
    let teams = []
    let filteredTeams = []

    token.subscribe(value => {
        tokenValue = value;
    })

    onMount(() => {
        getTeam();
    });

    async function getTeam(userId) {
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
                filteredTeams = teams.filter((team) => team.id_users.forEach((id) => {
                    id === userId
                }));

            } else {
                console.error("Erreur lors de la récupération des utilisateurs");
            }
        } catch (error) {
            console.error("Erreur lors de la requête GET", error);
        }
    }
</script>
<h2 style="text-align: center"> Mes Equipes</h2>

<div style="display: inline-flex; width: 100%">


    {#each filteredTeams as filteredTeam}
        <iapau-card
                style="display: block; overflow: hidden; width: 40%; padding: 5% 0 5% 0 ; margin: 2.5%; height: fit-content"
        >
            <h2 style="text-align: center"> {filteredTeam.name} </h2>

            {#each filteredTeam.id_users as member}

                <TeamMember><p slot="nom"> member </p></TeamMember>

            {/each}

            <iapau-button style="float: right;margin-right: 2%">Ajouter un membre</iapau-button>
        </iapau-card>
    {/each}


    <!-- A supprimer pour tester -->
    <iapau-card
            style="display: block; overflow: hidden; width: 40%; padding: 5% 0 5% 0 ; margin: 2.5%; height: fit-content"
    >
        <h2 style="text-align: center"> Les Nuages Blanc</h2>


        <TeamMember><p slot="nom"> Valentin </p></TeamMember>
        <TeamMember><p slot="nom"> Axel </p></TeamMember>


        <iapau-button style="float: right;margin-right: 2%">Ajouter un membre</iapau-button>
    </iapau-card>
    <iapau-card
            style="display: block; overflow: hidden; width: 40%; padding: 5% 0 5% 0 ; margin: 2.5%; height: fit-content"
    >
        <h2 style="text-align: center"> Nom Equipe</h2>


        <TeamMember><p slot="nom"> member1 </p></TeamMember>
        <TeamMember><p slot="nom"> member2 </p></TeamMember>


        <iapau-button style="float: right;margin-right: 2%">Ajouter un membre</iapau-button>
    </iapau-card>
</div>
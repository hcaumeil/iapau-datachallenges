<script>
import TeamMember from "$lib/component/TeamMember.svelte";
</script>

<iapau-card
        style="display: block; overflow: hidden; width: 82%; padding: 5% 0 5% 0 ; margin: 2.5%; height: fit-content"
>
    <h2 style="text-align: center"> Membre de mon équipe</h2>

    <TeamMember> <p slot="nom"> Nom Prenom </p></TeamMember>
    <TeamMember> <p slot="nom"> Nom Prenom </p></TeamMember>
    <iapau-button style="float: right;margin-right: 2%">Ajouter un membre</iapau-button>
</iapau-card>
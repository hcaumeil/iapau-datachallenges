<script>
import TeamMember from "$lib/component/TeamMember.svelte";
</script>


<div style="display: inline-flex">
<!-- for each user -->
<iapau-card
        style="display: block; overflow: hidden; width: 40%; padding: 5% 0 5% 0 ; margin: 2.5%; height: fit-content"
>
    <h2 style="text-align: center"> Membre de mon équipe pour le data challenge 1</h2>

    <TeamMember> <p slot="nom"> Nom Prenom </p></TeamMember>
    <TeamMember> <p slot="nom"> Nom Prenom </p></TeamMember>

    <!-- {#if} user = capitaine {/if} -->
    <iapau-button style="float: right;margin-right: 2%">Ajouter un membre</iapau-button>
</iapau-card>

<iapau-card
        style="display: block; overflow: hidden; width: 40%; padding: 5% 0 5% 0 ; margin: 2.5%; height: fit-content"
>
    <h2 style="text-align: center"> Membre de mon équipe pour data Battle 1</h2>

    <TeamMember> <p slot="nom"> Nom Prenom </p></TeamMember>
    <TeamMember> <p slot="nom"> Nom Prenom </p></TeamMember>

    <iapau-button style="float: right;margin-right: 2%">Ajouter un membre</iapau-button>
</iapau-card>

</div>
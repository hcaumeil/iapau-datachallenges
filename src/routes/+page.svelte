<script lang="ts">
    import "iapau-components/iapau-card";
    import "iapau-components/iapau-textarea";
    import "iapau-components/iapau-button";
    import "iapau-components/iapau-password";
</script>



<div class="column-center" style="height: 100%">
    <iapau-card class="column-center card">
        <img src="img/iapau_round.png" alt="logo"  style="width: 35%"/>
        <p style="font-size: 1.5vw"> Connectez vous </p>
        <iapau-textarea placeholder="E-mail"  style="margin-top:5%" cols="35">></iapau-textarea>
        <iapau-password style="margin-top:5%"></iapau-password>
        <iapau-button mode="primary"  hoverColors="true" style="margin-top:5%">Connexion</iapau-button>
        <iapau-button mode="secondary" hoverColors="true" style="margin-top:5%" >Inscription</iapau-button>
    </iapau-card>

</div>


<style>

    .card{
        height: fit-content;
        width: fit-content;
        padding: 2% 20%;
    }

</style>
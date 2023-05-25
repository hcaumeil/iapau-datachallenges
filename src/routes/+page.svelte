<script lang="ts">
    import "iapau-components/iapau-card";
    import "iapau-components/iapau-input";
    import "iapau-components/iapau-button";
</script>



<div class="column-center" style="height: 100%">
    <iapau-card class="column-center card">
        <img src="img/iapau_round.png" alt="logo"  style="width: 30%"/>
        <p style="font-size: 1.5vw"> Connectez vous </p>
        <iapau-input typeInput="text" placeholder="E-mail"  style="margin-top:5%"></iapau-input>
        <iapau-input typeInput="password" placeholder="Mot de passe" style="margin-top:5%"></iapau-input>


        <div style="display: flex; margin-top:5% ">
        <iapau-button mode="primary"  hoverColors="true" style="margin:5%"><a class="link" href="/acceuil">Connexion</a></iapau-button>
        <iapau-button mode="secondary" hoverColors="true" style="margin:5%" ><a class="link" href="/inscription">Inscription</a></iapau-button>
        </div>
    </iapau-card>

</div>


<style>

    .card{
        height: fit-content;
        width: fit-content;
        padding: 2% 15%;
    }

</style>
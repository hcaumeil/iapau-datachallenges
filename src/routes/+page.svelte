<script lang="ts">
    import "iapau-components/iapau-card";
    import "iapau-components/iapau-input";
    import "iapau-components/iapau-button";
</script>



<div class="column-center" style="height: 100%">
    <iapau-card class="column-center card">
        <img src="img/iapau_round.png" alt="logo"  style="width: 30%"/>
        <p style="font-size: 1.5vw"> Connectez vous </p>
        <iapau-input type="text" placeholder="E-mail"  style="margin-top:5%"></iapau-input>
        <iapau-input type="password" style="margin-top:5%"></iapau-input>


        <div style="display: flex; margin-top:5%">
        <iapau-button mode="primary"  hoverColors="true" style="margin:5%">Connexion</iapau-button>
        <iapau-button mode="secondary" hoverColors="true" style="margin:5%" >Inscription</iapau-button>
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
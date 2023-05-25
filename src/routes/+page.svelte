<script lang="ts">
    import "iapau-components/iapau-card";
    import "iapau-components/iapau-input";
    import "iapau-components/iapau-button";

    let email = '';
    let password = '';

    const handleEmailInput = (event) => {
        email = event.target.value;
    };

    const handlePasswordInput = (event) => {
        password = event.target.value;
    };
    const handleLogin = async () => {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: email,
                password
            })
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            alert("test")
            const errorData = await response.json();
            console.error(errorData.error);
        }
    };



</script>



<div class="column-center" style="height: 100%">
    <iapau-card class="column-center card">
        <img src="img/iapau_round.png" alt="logo"  style="width: 30%"/>
        <p style="font-size: 1.5vw"> Connectez vous </p>
        <iapau-input on:input={handleEmailInput} typeInput="text" placeholder="E-mail"  style="margin-top:5%"></iapau-input>
        <iapau-input on:input={handlePasswordInput}  typeInput="password" placeholder="Mot de passe" style="margin-top:5%"></iapau-input>


        <div style="display: flex; margin-top:5% ">
        <iapau-button on:click={handleLogin} mode="primary"  hoverColors="true" style="margin:5%">Connexion</iapau-button>
        <iapau-button mode="secondary" hoverColors="true" style="margin:5%" ><a class="link" href="/register">Inscription</a></iapau-button>
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
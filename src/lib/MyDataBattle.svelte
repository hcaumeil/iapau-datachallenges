<script>

</script>

<div>
<h2 style="text-align: center;margin-bottom: 3%; margin-top: 3%"> Mes datas Challenge</h2>

<div style="display: flex;
    flex-wrap: wrap;
    justify-content: space-around">


    <iapau-card class="column-center card">
        <h2> Nom data Battle</h2>
        <div class="podium">
            <div class="first-place">Nom team 1</div>
            <div class="second-place">Nom team 2</div>
            <div class="third-place">Nom team 3</div>
        </div>


        <div
                style="display: flex; margin-top: 2rem; justify-content: space-evenly; width: 100%;"
        >
            <iapau-button mode="primary" hoverColors="true"
            >Faire le quizz</iapau-button
            >
        </div>
    </iapau-card>

    <iapau-card class="column-center card">
        <h2> The Data Analytics Showdown</h2>
        <div class="podium">
            <div class="first-place">Thunderbolt</div>
            <div class="second-place">Phoenix Rising</div>
            <div class="third-place">Velocity Vipers</div>
        </div>



        <div
                style="display: flex; margin-top: 2rem; justify-content: space-evenly; width: 100%;"
        >
            <iapau-button mode="primary" hoverColors="true"
            >Faire le quizz</iapau-button
            >
        </div>
    </iapau-card>



    <iapau-card class="column-center card">
        <h2> The Algorithm Wars</h2>
        <div class="podium">
            <div class="first-place">Spectral Savages</div>
            <div class="second-place">Quantum Force</div>
            <div class="third-place">Cyber Sharks</div>
        </div>



        <div
                style="display: flex; margin-top: 2rem; justify-content: space-evenly; width: 100%;"
        >
            <iapau-button mode="primary" hoverColors="true"
            >Faire le quizz</iapau-button
            >
        </div>
    </iapau-card>

</div>

</div>

<style>

    .card {
        height: fit-content;
        width: 40%;
        padding: 1rem;
        margin: 1rem;
    }

    .podium {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        height: 200px;
        width: 70%;
        background-color: #f0f0f0;
    }

    .podium div {
        color: white;
        font-size: small;
        padding: 2%;
        width: 15%;
    }

    .first-place {
        background-color: gold;
        height: 90%;
    }

    .second-place {
        background-color: silver;
        height: 70%;
    }

    .third-place {
        background-color: #cd7f32;
        height: 50%;
    }


</style>
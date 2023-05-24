<script lang="ts">
    import "iapau-components/iapau-card";
    import "iapau-components/iapau-input";
    import "iapau-components/iapau-button";
    import "iapau-components/iapau-select";
    import "iapau-components/iapau-elementnavbar";
    import "iapau-components/iapau-link";

    let showMenu = false;

</script>

<!-- test nev bar -->
<div class="navbar">
    <iapau-elementnavbar src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png" style="margin: 5%" showMenu={showMenu}>
        Test
    </iapau-elementnavbar>

    <iapau-elementnavbar src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png"  showMenu={showMenu} style="margin: 5%" >
        Test
    </iapau-elementnavbar>


    <iapau-elementnavbar src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png" style="margin: 5%">
        Test
    </iapau-elementnavbar>



</div>



<div class="column-center" style="height: 100%">
    <iapau-card class="column-center card">
        <p style="font-size: 1.5vw"> Inscription </p>

        <form class="column-center card">
            <iapau-input typeInput="text" placeholder="E-mail" style="margin:5%"></iapau-input>
            <iapau-input typeInput="password" placeholder="password" style="margin:5%"></iapau-input>
            <iapau-input typeInput="text" placeholder="Pseudo" style="margin:5%"></iapau-input>
            <iapau-select id="mySelect" style="margin:5%"></iapau-select>
            <iapau-input typeInput="text" placeholder="Ecole" style="margin:5%"></iapau-input>
        </form>

        <iapau-button mode="primary" hoverColors="true" style="margin:5%">Continuer</iapau-button>
    </iapau-card>

    <script>
        const selectElement = document.querySelector('#mySelect');
        const options = ["Bac+1", "Bac+2", "Bac+3", "Bac+4", "Bac+5"];
        selectElement.options = options;
    </script>
</div>






<style>

    .card {
        height: fit-content;
        width: fit-content;
        padding: 2% 15%;
    }

    .navbar{
        position: absolute;
        top: 0;
        left: 0;
        background-color: grey;
        padding: 2.5%;
    }

</style>
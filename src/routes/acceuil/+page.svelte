<script lang="ts">
    import "iapau-components/iapau-card";
    import "iapau-components/iapau-input";
    import "iapau-components/iapau-button";
    import "iapau-components/iapau-select";
    import "iapau-components/iapau-elementnavbar";
    import "iapau-components/iapau-link";

    let showMenu = true;


    function toggleShowMenu() {
        showMenu = !showMenu
    }



</script>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

<!-- test nev bar -->
<div class="navbar">

    <span onclick="toggleShowMenu" class="material-symbols-outlined">menu</span>

    <div style="margin-top: 15%">

    <iapau-elementnavbar showMenu={showMenu} src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png" style="margin: 5%" >
        Test
    </iapau-elementnavbar>

    <iapau-elementnavbar showMenu={showMenu} src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png"  style="margin: 5%">
        Test
    </iapau-elementnavbar>


    <iapau-elementnavbar showMenu={showMenu} src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png" style="margin: 5%">
        Test
    </iapau-elementnavbar>

    </div>

    <span class="material-symbols-outlined" style="position: absolute; bottom: 0;margin-bottom: 15%"><a class="link" href="/settings">Settings</a></span>



</div>


<style>

    .navbar{
        position: absolute;
        top: 0;
        left: 0;
        background-color: grey;
        padding: 0 2.5% 0 2.5%;
        height: 100%;
        width: fit-content;
    }


</style>

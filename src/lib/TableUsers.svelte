<script>
    import { onMount } from "svelte";
    import { iapau_api } from "../routes/const.js";
    import edit from "remixicon/icons/Design/edit-box-line.svg"

    let users = [];

    let name = '';
    let email = '';
    let surname = '';
    let level = "";
    let school = "";
    let role = "";


    async function getUsers() {
        try {
            const response = await fetch(iapau_api + "api/user", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                users = await response.json();
            } else {
                console.error("Erreur lors de la récupération des utilisateurs");
            }
        } catch (error) {
            console.error("Erreur lors de la requête GET", error);
        }
    }

    async function saveRoles() {
        const data = {
            email: email,
            name: name,
            surname: surname,
            level: level,
            school: school,
            role: role
        };


        try {
            const response = await fetch(iapau_api + "api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log("Rôle sauvegardé avec succès");
            } else {
                console.error("Erreur lors de la sauvegarde du rôle");
            }
        } catch (error) {
            console.error("Erreur lors de la requête POST", error);
        }
    }

    onMount(() => {
        getUsers();
    });
</script>

<h2 style="text-align: center">Liste des utilisateurs</h2>
<table style="width: 90%; margin: 5%">
    <thead>
    <tr>
        <td>email</td>
        <td>name</td>
        <td>surname</td>
        <td>level</td>
        <td>school</td>
        <td>role</td>
    </tr>
    </thead>
    <tbody>
    {#each users as user}
        <tr>
            <td><input type="text" value={user.email} oninput={(e) => (email = e)} /> </td>
            <td><input type="text" value={user.name} oninput={(e) => (name = e)} /> </td>
            <td><input type="text" value={user.surname} oninput={(e) => (surname = e)} /> </td>
            <td><input type="text" value={user.level} oninput={(e) => (level = e)} /> </td>
            <td><input type="text" value={user.school} oninput={(e) => (school = e)}/> </td>
            <td><input type="text" value={user.role} oninput={(e) => (role = e)} /> </td>
        </tr>
    {/each}

    </tbody>
</table>

<iapau-button on:click={saveRoles}>Sauvegarder</iapau-button>
<iapau-button>Edit</iapau-button>


<style>
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
    }

    input{
        pointer-events: auto;
    }
</style>
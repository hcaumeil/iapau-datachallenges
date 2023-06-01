<script>
    import { onMount } from "svelte";
    import { iapau_api } from "../routes/const.js";
    import edit from "remixicon/icons/Design/edit-box-line.svg"

    let datas = [];
    let users = []

    onMount(() => {
        getUsers()
    })

    function updateKey(userId,key,value) {
        for (const u of users) {
            if (u.id === userId){
                u[key] = value
            }
        }
    }

    async function getUsers() {
        try {
            const response = await fetch(iapau_api + "/api/user", {
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


    async function updateUser (userId) {
        const found = users.find( (e) => e.id === userId);

        try {
            const response = await fetch(iapau_api + "/api/user/" + userId, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(found)
            });

            if (response.ok) {
               getUsers()
                console.log("Upadate sauvegardé avec succès");
            } else {
                console.error("Erreur lors de la sauvegarde de l'update");
            }
        } catch (error) {
            console.error("Erreur lors de la requête POST", error);
        }
    }




</script>

<h2 style="text-align: center">Liste des utilisateurs</h2>
<table style="width: 90%; margin: 2%">
    <thead>
    <tr>
        <td>email</td>
        <td>name</td>
        <td>surname</td>
        <td>level</td>
        <td>school</td>
        <td>role</td>
        <td>action</td>
    </tr>
    </thead>
    <tbody>
    {#each users as user}
        <tr>
            <td><input type="text" value={user.email} on:input={(e) => (updateKey(user.id,"email",e.target.value))} /></td>
            <td><input type="text" value={user.name} on:input={(e) => (updateKey(user.id,"name",e.target.value))} /></td>
            <td><input type="text" value={user.surname} on:input={(e) => (updateKey(user.id,"surname",e.target.value))} /></td>
            <td><input type="text" value={user.level} on:input={(e) => (updateKey(user.id,"level",e.target.value))} /></td>
            <td><input type="text" value={user.school} on:input={(e) => (updateKey(user.id,"school",e.target.value))} /></td>
            <td><input type="text" value={user.role} on:input={(e) => (updateKey(user.id,"role",e.target.value))} /></td>
            <td><button on:click={() => updateUser(user.id)}>Edit</button></td>
        </tr>
    {/each}

    </tbody>
</table>


<style>
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
    }

    input{
        pointer-events: auto;
    }
</style>
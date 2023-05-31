<script>
    import { onMount } from "svelte";
    import { iapau_api } from "../routes/const.js";

    let users = [];
    let selectedRole = "";

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
                users.forEach((user) => {
                    user.roles = [
                        { value: "admin", label: "admin" },
                        { value: "user", label: "user" },
                        { value: "gestionnaire", label: "gestionnaire" }
                    ];
                });
            } else {
                console.error("Erreur lors de la récupération des utilisateurs");
            }
        } catch (error) {
            console.error("Erreur lors de la requête GET", error);
        }
    }

    async function saveRoles() {
        try {
            const response = await fetch(iapau_api + "api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ role: selectedRole })
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
            <td>{user.email}</td>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.level}</td>
            <td>{user.school}</td>
            <td>
                <select oninput={(e) => (selectedRole = e)}>
                    {#each user.roles as role}
                        <option value={user.role}>{role.label}</option>
                    {/each}
                </select>
            </td>
        </tr>
    {/each}
    </tbody>
</table>

<button on:click={saveRoles}>Sauvegarder</button>

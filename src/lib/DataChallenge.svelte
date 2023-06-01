<script>
    import Card from "$lib/component/Card.svelte";
    import {iapau_api} from "../routes/const.js";
    import {onMount} from "svelte";
    import deleteD from "remixicon/icons/System/delete-bin-line.svg"
    import edit from "remixicon/icons/Design/edit-box-line.svg"
    import add from "remixicon/icons/System/add-line.svg"

    let dataChallenges = []

    onMount(() => {
        getDataChallenge()
    })

    async function getDataChallenge() {
        try {
            const response = await fetch(iapau_api + "/api/data_challenge", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                dataChallenges = await response.json();
            } else {
                console.error("Erreur lors de la récupération des utilisateurs");
            }
        } catch (error) {
            console.error("Erreur lors de la requête GET", error);
        }
    }

    async function deleteDataChallenge(userId) {
        try {
            const response = await fetch( iapau_api + `/api/data_challenge/` + userId, {
                method: 'delete',
            })
            if (response.ok) {
                getDataChallenge()
                console.log(`Le data challenge a était supprimé`);
            } else {
                console.error(`Une erreur s'est produite lors de la suppresion du data challenge avec l'ID ${userId}.`);
            }
        } catch (error) {
            console.error(`Une erreur s'est produite lors du data challenge avec avec l'ID ${userId}.`, error);
        };
    }


</script>

<div>
    <h2 style="text-align: center; margin-top: 5%; margin-bottom: 3%">Data Challenge</h2>

    <div style="display: flex;flex-wrap: wrap; justify-content: space-around">

        {#each dataChallenges as dataChallenge}
            <Card title={dataChallenge.name} href="/events">

                <div style="display: flex; width: 100%; justify-content: space-around">



                <div style="margin-left: 2%">
                    <img src="{edit}"
                         style="width: 1vw"
                         alt="Icon" on:click={() => selectButton("editDataChallenge")}/>
                    <img src="{deleteD}"
                         style="width: 1vw"
                         alt="Icon"
                         on:click={() => deleteDataChallenge(dataChallenge.id)}/>
                </div>

                    <div>
                        <img src="{add}"
                             style="width: 1vw"
                             alt="Icon"/>
                    </div>
                </div>
                <p slot="description">{dataChallenge.description} </p>
                <p slot="datebegin"> {dataChallenge.begin_date.substring(0, 10)}</p>
                <p slot="dateend"> {dataChallenge.end_date.substring(0, 10)}</p>

            </Card>

        {/each}


    </div>

</div>
<style>


</style>
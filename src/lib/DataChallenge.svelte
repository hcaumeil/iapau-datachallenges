<script>
    import Card from "$lib/component/Card.svelte";
    import {iapau_api} from "../routes/const.js";
    import {onMount} from "svelte";
    import deleteD from "remixicon/icons/System/delete-bin-line.svg";
    import edit from "remixicon/icons/Design/edit-box-line.svg";
    import add from "remixicon/icons/System/add-line.svg";
    import "iapau-components/iapau-modal";
    import "iapau-components/iapau-input";
    import "iapau-components/iapau-textarea";
    import "iapau-components/iapau-button";

    let isOpen = false;
    let isOpenAddDataP = false;

    let dataChallenges = [];
    let title = "";
    let selectedDataChallengeId = null;
    let editName = "";
    let editBeginDate = "";
    let editEndDate = "";
    let editDescription = "";
    let nameSubject =""


    onMount(() => {
        getDataChallenge();
    });

    async function getDataChallenge() {
        try {
            const response = await fetch(iapau_api + "/api/data_challenge", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
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
            const response = await fetch(iapau_api + `/api/data_challenge/` + userId, {
                method: "delete",
            });
            if (response.ok) {
                getDataChallenge();
                console.log(`Le data challenge a été supprimé`);
            } else {
                console.error(
                    `Une erreur s'est produite lors de la suppression du data challenge avec l'ID ${userId}.`
                );
            }
        } catch (error) {
            console.error(
                `Une erreur s'est produite lors de la suppression du data challenge avec l'ID ${userId}.`,
                error
            );
        }
    }


    function reverseDate(date) {
        let dateParts = date.split("-");
        let year = dateParts[0];
        let month = dateParts[1];
        let day = dateParts[2];

        let formattedDate = day + "-" + month + "-" + year;
        return formattedDate;
    }


    async function handleAddSubjectButtonClick(){
        const data = {
            id_data_challenge: selectedDataChallengeId,
            name: nameSubject
        }

        try {
            const response = await fetch(iapau_api +'/api/subject', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log('Subject ajouté avec succès');
            } else {
                console.error("Erreur lors de l'ajout du Subject");
            }
        } catch (error) {
            console.error('Erreur lors de la requête POST', error);
        }


    }

    async function handleButtonClick() {
        const data = {
            name: editName,
            begin_date: reverseDate(editBeginDate),
            end_date: reverseDate(editEndDate),
            description: editDescription,
        };

        try {
            if (selectedDataChallengeId === null) {
                const response = await fetch(iapau_api + "/api/data_challenge", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    console.log("Data challenge ajouté avec succès");
                } else {
                    console.error("Erreur lors de l'ajout du data challenge");
                }
            } else {
                const response = await fetch(
                    iapau_api + `/api/data_challenge/` + selectedDataChallengeId,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    }
                );

                if (response.ok) {
                    console.log("Data challenge mis à jour avec succès");
                } else {
                    console.error("Erreur lors de la mise à jour du data challenge");
                }
            }

            getDataChallenge();
        } catch (error) {
            console.error("Erreur lors de la requête POST/PUT", error);
        }

        isOpen = false;
        selectedDataChallengeId = null;
    }
</script>

<div>
    <div style="display: flex; width: 100%">

        <h2 style="margin-top: 5%; margin-bottom: 3%; width: 100%; text-align: center">Data Challenge</h2>
        <img
                src="{add}"
                style="width: 2vw; position: absolute; right: 5%; top :50px"
                alt="Icon"
                on:click={() => {
        isOpen = true;
        title = "Ajouter un Data Challenge";
        selectedDataChallengeId = null;
      }}
        />

    </div>

    <div style="display: flex; flex-wrap: wrap; justify-content: space-around">

        {#each dataChallenges as dataChallenge}
            <Card title={dataChallenge.name} href="/events" dataCid={dataChallenge.id}>

                <div style="display: flex; width: 100%; justify-content: space-around">

                    <div style="margin-left: 2%">
                        <img
                                src="{edit}"
                                style="width: 1vw"
                                alt="Icon"
                                on:click={() => {
              isOpen = true;
              title = "Editer un Data Challenge";
              selectedDataChallengeId = dataChallenge.id;
              editName = dataChallenge.name;
              editBeginDate = dataChallenge.begin_date;
              editEndDate = dataChallenge.end_date;
              editDescription = dataChallenge.description;
            }}
                        />
                        <img
                                src="{deleteD}"
                                style="width: 1vw"
                                alt="Icon"
                                on:click={() => deleteDataChallenge(dataChallenge.id)}
                        />
                    </div>

                    <div>
                        <img
                                src="{add}"
                                style="width: 1vw"
                                alt="Icon"
                                on:click={() => {
              isOpenAddDataP = true;
              title = "Ajouter un Subject";
              selectedDataChallengeId = dataChallenge.id;
            }}
                        />
                    </div>
                </div>


                <p slot="description">{dataChallenge.description}</p>
                <p slot="datebegin">{dataChallenge.begin_date.substring(0, 10)}</p>
                <p slot="dateend">{dataChallenge.end_date.substring(0, 10)}</p>



            </Card>
        {/each}

        <iapau-modal modalB={isOpen || null} title="{title}">

            <div style="text-align: center; justify-content: center; display: flex;">
                <iapau-card class="column-center card">

                    <iapau-input oninput={(e) => (editName = e)} typeInput="text" placeholder="nom du projet" > </iapau-input>
                    <iapau-input oninput={(e) => (editBeginDate = e)} label="Date de debut :" typeInput="date" />
                    <iapau-input oninput={(e) => (editEndDate = e)} label="Date de fin :" typeInput="date" />
                    <iapau-textarea cols="70" placeholder="description" rows="6" style="margin-top: 3%" oninput={(e) => (editDescription = e)} />


                    <div style="display: flex; margin-top: 2rem; justify-content: space-evenly; width: 100%;">
                        <iapau-button mode="secondary" class="close-button" on:click={() => (isOpen = false)}>
                            Close
                        </iapau-button>

                        <iapau-button
                                mode="primary"
                                hoverColors="true"
                                on:click={() => {
                handleButtonClick();
                isOpen = false;
              }}>Ajouter
                        </iapau-button>
                    </div>
                </iapau-card>
            </div>

            <style>
                .card {
                    height: fit-content;
                    width: fit-content;
                    padding: 1rem;
                    margin: 1rem;
                }
            </style>
        </iapau-modal>





        <iapau-modal modalB={isOpenAddDataP || null} title="{title}">
            <div style="text-align: center; justify-content: center; display: flex;">
                <iapau-card class="column-center card">

                    <iapau-input oninput={(e) => (nameSubject = e)} typeInput="text" placeholder="nom du projet" > </iapau-input>


                    <div style="display: flex; margin-top: 2rem; justify-content: space-evenly; width: 100%;">
                        <iapau-button mode="secondary" class="close-button" on:click={() => (isOpenAddDataP = false)}>
                            Close
                        </iapau-button>

                        <iapau-button
                                mode="primary"
                                hoverColors="true"
                                on:click={() => {
                handleAddSubjectButtonClick();
                isOpenAddDataP = false;
              }}>Ajouter
                        </iapau-button>
                    </div>
                </iapau-card>
            </div>

            <style>
                .card {
                    height: fit-content;
                    width: fit-content;
                    padding: 1rem;
                    margin: 1rem;
                }
            </style>
        </iapau-modal>


    </div>
</div>

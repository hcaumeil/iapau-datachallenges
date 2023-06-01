<script lang="ts">
    export let title: string = "";
</script>

<iapau-modal modalB title={title}>

    <div style="text-align: center;
    justify-content: center;
    display: flex;">
        <iapau-card class="column-center card">

            <iapau-input oninput={(e) => (name = e)}  typeInput="text"  placeholder="nom du projet"/>
            <iapau-input oninput={(e) => (beginDate = e)}  label="Date de debut :" typeInput="date" />
            <iapau-input oninput={(e) => (endDate = e)} label="Date de fin :" typeInput="date" />
            <iapau-textarea cols="70" placeholder ="description" rows="6" style="margin-top: 3%" oninput={(e) => (description = e)} />



            <div
                    style="display: flex; margin-top: 2rem; justify-content: space-evenly; width: 100%;"
            >
                <iapau-button mode="primary" hoverColors="true" on:click={handleAddButtonClick}
                >Ajouter</iapau-button
                >
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
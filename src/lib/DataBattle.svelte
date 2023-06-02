<script>
    import Card from "$lib/component/Card.svelte";
</script>

<div>
    <h2 style="text-align: center; margin-top: 5%; margin-bottom: 3%">Data Battle</h2>

    <div style="display: flex;flex-wrap: wrap; justify-content: space-around">

        <!-- for each databattle -->
        <Card title="Data Battle 1" href="/events">
            <p slot="description">
                Prochain festival, prochain Meetup ou prochain Data Challenge ? Tous les évènements à venir d’IA Pau sont par ici, et  n’attendent plus que vous !
            </p>

            <p slot="datebegin"> Date de fin 21 mars 13h50</p>
            <p slot="dateend"> Date de fin 21 mars 13h50</p>
        </Card>

        <Card title="Data Detective" href="/events">
            <p slot="description">
                Un quiz qui met à l'épreuve vos compétences en résolution d'énigmes basées sur des données. Mettez votre logique à l'épreuve pour découvrir les réponses cachées derrière les chiffres.
            </p>

            <p slot="datebegin"> Date de fin 21 mars 13h50</p>
            <p slot="dateend"> Date de fin 21 mars 13h50</p>
        </Card>

        <Card title="Data Wizard" href="/events">
            <p slot="description">
                Un quiz pour les magiciens des données. Testez vos connaissances en matière de manipulation, d'analyse et de visualisation des données dans ce monde enchanté.
            </p>

            <p slot="datebegin"> Date de fin 21 mars 13h50</p>
            <p slot="dateend"> Date de fin 21 mars 13h50</p>
        </Card>





    </div>

</div>
<style>


</style>
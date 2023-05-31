<script>
    import Card from "$lib/component/Card.svelte";
</script>

<div>
<h2 style="text-align: center; margin-top: 5%; margin-bottom: 3%">Data Challenge</h2>

<div style="display: flex;flex-wrap: wrap; justify-content: space-around">

    <!-- for each datachallenge -->
<Card title="Data Challenge 1" href="/events">
    <p slot="content">
        Prochain festival, prochain Meetup ou prochain Data Challenge ? Tous les évènements à venir d’IA Pau sont par ici, et  n’attendent plus que vous !
    </p>

    <p slot="date"> Date de fin 21 mars 13h50</p>

</Card>

<Card title="Evenement 2" href="/events">
    <p slot="content">
        Prochain festival, prochain Meetup <br /> ou prochain Data Challenge ?
        <br />
        Tous les évènements à venir<br /> d’IA Pau sont par ici, et <br /> n’attendent
        plus que vous !
    </p>
</Card>

<Card title="Evenement 3" href="/events">
    <p slot="content">
        Prochain festival, prochain Meetup <br /> ou prochain Data Challenge ?
        <br />
        Tous les évènements à venir<br /> d’IA Pau sont par ici, et <br /> n’attendent
        plus que vous !
    </p>
</Card>

<Card title="Evenement 4" href="/events">
    <p slot="content">
        Prochain festival, prochain Meetup <br /> ou prochain Data Challenge ?
        <br />
        Tous les évènements à venir<br /> d’IA Pau sont par ici, et <br /> n’attendent
        plus que vous !
    </p>
</Card>

<Card title="Evenement 5" href="/events">
    <p slot="content">
        Prochain festival, prochain Meetup <br /> ou prochain Data Challenge ?
        <br />
        Tous les évènements à venir<br /> d’IA Pau sont par ici, et <br /> n’attendent
        plus que vous !
    </p>
</Card>


</div>

</div>
<style>


</style>
<template>
  <section class="about-container">
    <h1 class="section-titles">About page</h1>
    <div>
      <h2 class="subtitle">A propos</h2>
      <p>Intéressé par les possibilités du domaine informatique, mon choix professionnel s'est porté naturellement sur le développement web, avec une préférence pour le Front-End.</p>
    </div>
    <br>
    <div>
      <h2 class="subtitle">Travail</h2>
      <p>Actuellement je travaille chez Monkey Monk, une entreprise sociale du numérique ayant un rôle dans l'écosystème Darwin de Bordeaux qui me tient à cœur. Ce boulot me permet de me familiariser avec les technologies Laravel, VueJS, Buefy, MongoDB, Docker, Wordpress (Divi) et VueX.</p>
    </div>
    <br>
    <div>
      <h2 class="subtitle">Etudes</h2>
      <p> Côté études, avant cela, j'ai réalisé 400h intensives chez O'Clock (formation 100% téléprésentielle) afin d'apprendre les langages HTML, CSS, PHP, JavaScript.
Mais aussi :
SASS
JEST (Tests unitaires)
Linux, Git, Gitflow
BDD, SQL, POO, MVC
BootStrap
Ajax
API REST
Gestion de projet (cahier des charges, spec fonctionnelles, MLD, MCD, Wireframes)
Méthodes agiles (SCRUM)
</p>
<br>
<p>
Ainsi que deux mois de spécialisation ReactJS (300h), dont un mois de projet FullStack en équipe de deux développeurs WordPress et deux développeurs React, me permettant d'être mis face à des problèmatiques réelles.</p>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'inside',
  head: {
    title: 'A propos'
  },
  mounted () {
    // this.$nuxt.$loading.finish()
  }
}
</script>

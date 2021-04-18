<template>
  <div id="app" class="layout">

    <div class="container introduce layout__introduce">
      <Avatar src="/me_v2_tinyjpg.jpg" alt="Osoba Miroslav Válka" size="12em" />
      <h1 class="introduce__name">
        Miroslav Válka <span class="introduce__birthday">(20.6.1996)</span>
      </h1>
    </div>

    <div class="container layout__contact">
      <h2>Kontakt</h2>
      <Contact :contacts="[
        {
          icon: 'map-marker-alt',
          content: 'Štefánikova 300,<br> 66453 Újezd u Brna',
        },
        {
          icon: 'envelope',
          content: `<a href='mailto:miroslav%40tenvalka.eu?subject=Ahoj'>miroslav@tenvalka.eu</a>`,
        },
        {
          icon: 'phone-alt',
          content: `<a href='tel:+420725063890'>(+420)725063890</a>`,
          // content: `<a href='sms:+420725063890?body=Dobrý%20den'>(+420)725063890</a>`,
        },
        {
          icon: ['fab', 'github'],
          content: `<a target='_blank' href='https://github.com/MWarCZ'>GitHub: MWarCZ</a>`
        },
        {
          icon: ['fab', 'gitlab'],
          content: `<a target='_blank' href='https://gitlab.com/MWarCZ'>GitLab: MWarCZ</a>`
        },
        {
          icon: ['fab', 'linkedin'],
          content: `<a target='_blank' href='https://www.linkedin.com/in/miroslav-valka/'>LinkedIn: miroslav-valka</a>`
        },
      ]"
      />
    </div>

    <div class="container layout__cards">
      <section>
        <h2>Pracovní zkušenosti</h2>
        <Card
          title="Zatím žádné"
          :msg="['Aktuální']"
          isFirst
          isLast
        />
      </section>
      <section>
        <h2>Vzdělání</h2>
        <Card
          title="Bakalářské studium obor Informační technologie"
          subtitle="Fakulta informačních technologií VUT v Brně"
          :msg="['2016–2020']"
          isFirst
        />
        <Card
          title="Maturitní zkouška obor Informační technologie"
          subtitle="Střední škola technická a ekonomická Brno, Olomoucká"
          :msg="['2012–2016']"
          isLast
        />
      </section>
      <section>
        <h2>Jazykové dovednosti</h2>
        <SemiTable title="Angličtina" :items="[
            { head: 'Čtení', body: 'B1' },
            { head: 'Poslech', body: 'B1' },
            { head: 'Mluvení (diskuze)', body: 'A2' },
            { head: 'Mluvení (projev)', body: 'A2' },
            { head: 'Psaní', body: 'B1' },
          ]"
        />
      </section>
      <section>
        <h2>Znalosti a dovednosti</h2>
        <SemiTable title="IT" :items="[
            { head: 'JavaScript' },
            { head: 'TypeScript' },
            { head: 'Vue.js' },
            { head: 'Node.js' },
            { head: 'Git' },
            { head: 'SASS' },
            { head: 'NGINX' },
            { body: 'GraphQL' },
            { body: 'Docker' },
            { body: 'Svelte.js' },
            { body: 'MySQL' },
            { body: 'LESS' },
            { body: 'Oracle PL/SQL' },
            { body: 'MongoDB' },
          ]"
        />
      </section>
    </div>

  </div>
</template>

<script>
import Avatar from '@/components/Avatar.vue'
import Card from '@/components/Card.vue'
import Contact from '@/components/Contact.vue'
import SemiTable from '@/components/SemiTable.vue'

export default {
  name: 'App',
  components: {
    Avatar,
    Card,
    Contact,
    SemiTable,
  },
}
</script>

<style>
/* Default style */
*, ::before, ::after {
  box-sizing: border-box;
}
html, body, #app {
  margin: 0;
  padding: 0;
  font-size: 18px;
  min-height: 100vh;
}
@media print {
  html, body {
    font-size: 4mm;
  }
}

h1,h2,h3,h4,h5 {
    margin-block-start: .5em;
    margin-block-end: .5em
}
h1 {
    font-size: 2em;
}

h2 {
    font-size: 1.5em;
}

h3 {
    font-size: 1.25em;
}

h4 {
    font-size: 1.1em;
}

h5 {
    font-size: 1em;
}
</style>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;

  max-width: 1000px;
  margin: auto;

  --app-column-size: 16em;
  --app-column-color: lightcyan;
  @media (min-width: 600px), only print {
    background: linear-gradient(to right,
      var(--app-column-color) var(--app-column-size),
      transparent var(--app-column-size));
  }
}
</style>

<style lang="scss">
.container {
  padding: 1em;
}
.spacer {
  padding: var(--space, .5em);
}

section {
  page-break-inside: avoid;
}
.introduce {
  text-align: center;
  &__name {
    margin-bottom: 0;
  }
  &__birthday {
    display: block;
    font-weight: normal;
    font-size: 0.75em;
  }
}
.layout {
  display: grid;
  justify-content: left;
  justify-items: left;
  grid-template-areas:
    'introduce'
    'contact'
    'cards';
  @media (min-width: 600px), only print {
    grid-template:
    'introduce cards' auto
    'contact   cards' 1fr
    '.......   cards' auto
    / auto auto;
  }
  &__introduce {
    grid-area: introduce;
    background-color: var(--app-column-color);
    width: 100%;
  }
  &__contact {
    grid-area: contact;
    background-color: var(--app-column-color);
    width: 100%;
  }
  &__cards {
    grid-area: cards;
  }
}
</style>

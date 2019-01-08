<template>
  <v-footer
    height="auto"
    color="secondary darken-1"
  >
    <v-layout
      justify-center
      row
      wrap
    >

      <v-btn 
        v-for="link in links"
        :href="link.href"
        :key="link.anchorText"
        color="white"
        flat
        :nuxt="link.nuxt"
        :target="link.target"
      >
        
        <v-icon>{{ link.icon }}</v-icon>
        <span class="ml-2">{{ link.anchorText }}</span>
        
      </v-btn>
      <v-flex
        grey
        lighten-2
        py-3
        text-xs-center
        dark
        xs12
      >
        &copy;2018 — <strong>Vuetify</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
    data () {
        return {
            links: [
              {
              'anchorText': 'Github',
              'icon': 'fab fa-github',
              'href': 'https://github.com/cbemister',
              'nuxt': false,
              'target': '_blank'
            },
              {
              'anchorText': 'LinkedIn',
              'icon': 'fab fa-linkedin',
              'href': 'https://ca.linkedin.com/in/chrisbemister',
              'nuxt': false,
              'target': '_blank'
            },
            {
              'anchorText': 'About',
              'icon': 'person',
              'href': 'about',
              'nuxt': true,
              'target': '_self'
            },
            {
              'anchorText': 'Contact',
              'icon': 'mail',
              'href': 'contact',
              'nuxt': true,
              'target': '_self'
            }
          ]
        }
    }
}
</script>


      icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram'
    ]
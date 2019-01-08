<template>
  <v-app class="grey lighten-4">
    <!--<MainNav />-->
    <v-content>
        <nuxt />
    </v-content>
    <TheMobileFooter class="hidden-sm-and-up"/>
    <TheDesktopFooter class="hidden-xs-only"/>
  </v-app>
</template>

<script>
import MainNav from '@/components/Navigation/TheMainMenu'
import TheMobileFooter from '@/components/Navigation/TheMobileFooter'
import TheDesktopFooter from '@/components/Navigation/TheDesktopFooter'

export default {
  components: { MainNav, TheMobileFooter, TheDesktopFooter  },
  name: 'App',
  data () {
    return {
      
    }
  }
}
</script>

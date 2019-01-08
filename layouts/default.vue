<template>
  <v-app class="grey lighten-4">
    <MainNav />
    <v-content>
        <nuxt />
    </v-content>
    <FooterNavMobile class="hidden-sm-and-up"/>
    <FooterNavDesktop class="hidden-xs-only"/>
  </v-app>
</template>

<script>
import MainNav from '@/components/Menus/TheMainNav'
import FooterNavMobile from '@/components/Menus/TheMobileFooterNav'
import FooterNavDesktop from '@/components/Menus/TheDesktopFooterNav'

export default {
  components: { MainNav, FooterNavMobile, FooterNavDesktop  },
  name: 'App',
  data () {
    return {
      
    }
  }
}
</script>

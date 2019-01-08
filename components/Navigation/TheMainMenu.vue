<template>

  <nav>
  <v-toolbar flat dark app color="primary" height="80">
    <v-toolbar-side-icon v-if="!drawer" @click="drawer = true" class="hidden-md-and-up"></v-toolbar-side-icon>
    
        <v-icon v-else @click="drawer = false">close</v-icon>

    <v-toolbar-title>
      <a href="/" title="Return To Home">
        <img height="100" alt="Chris Bemister | Web Application Developer" class="logo" style="margin-top: 5px;" srcset="@/assets/images/logo_331x150.png 331w, @/assets/images/logo_661x300.png 661w, @/assets/images/logo_992x450.png 992w" />
        <!-- <img height="150" alt="" class="logo hidden-sm-and-up" onerror="this.src='@/assets/images/color-logo-land.png',this.onerror=null" src="@/assets/images/color-logo-land.svg" /> -->
      </a>

    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat nuxt to="portfolio">Portfolio</v-btn>
      <v-btn flat nuxt to="technology">Technology</v-btn>
      <v-btn flat nuxt to="sandbox" style="margin-right: -15px;">Sandbox</v-btn>
      <!-- <Register v-show="!isAuthenticated"/>
      <Login v-show="!isAuthenticated" />
      <Compose v-show="isAuthenticated" /> -->
      <div v-show="isAuthenticated">
        <v-btn class="secondary darken-1 px-4 ml-1" @click="onLogout" style="height: 80px" left flat dark>
          <span class="mr-2">Logout</span>
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </div>
    </v-toolbar-items>
  </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      dark
      app
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <!-- <img src="@/assets/images/chrisbemister_460x460.jpg"> -->
            <img height="40" alt="Chris Bemister | Web Application Developer" srcset="@/assets/images/chrisbemister_40x40.jpg 1x, @/assets/images/chrisbemister_80x80.jpg 2x, @/assets/images/chrisbemister_120x120.jpg 3x," />
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Chris Bemister</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>
            <v-subheader>Website</v-subheader>
            <v-spacer></v-spacer>
        <v-list-tile
          v-for="link in internalLinks"
          :key="link.anchorText"
          :nuxt="link.nuxt"
          :target="link.target"
          :to="link.href"
        >
          <v-list-tile-action style="min-width: 45px;">
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title >{{ link.anchorText }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider class="mt-3"></v-divider>

        <v-subheader>Profiles</v-subheader>

        <v-list-tile
          v-for="link in externalLinks"
          :key="link.anchorText"
          :nuxt="link.nuxt"
          :target="link.target"
          :to="link.href"
        >
          <v-list-tile-action style="min-width: 45px;">
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ link.anchorText }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

          <v-divider class="mt-3"></v-divider>

          <v-subheader>Account</v-subheader>

        <div v-if="!isAuthenticated"> 

          <v-list-tile>
            <v-list-tile-action style="min-width: 45px;">
              <v-icon>person_add</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Register</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <!-- <Login drawer></Login> -->

          <!-- <v-list-tile>
            <v-list-tile-action style="min-width: 45px;">
              <v-icon>person_outline</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Login</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile> -->


        </div>

        <div v-else @click="onLogout"> 

          <v-list-tile>
            <v-list-tile-action style="min-width: 45px;">
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </div>

      </v-list>

    </v-navigation-drawer>

  </nav>

</template>

<script>

// import Login from '@/components/Login'
// import Compose from '@/components/Compose'
// import Register from '@/components/Register'


export default {
//   middleware: ["check-auth"],
//   components: { Login, Compose, Register },
  data() {
    return {
      drawer: false,
      internalLinks: [
            {
              'anchorText': 'Portfolio',
              'icon': 'apps',
              'href': 'portfolio',
              'nuxt': true,
              'target': '_self'
            },
            {
              'anchorText': 'Technology',
              'icon': 'subject',
              'href': 'technology',
              'nuxt': true,
              'target': '_self'
            },
            {
              'anchorText': 'Sandbox',
              'icon': 'code',
              'href': 'sandbox',
              'nuxt': true,
              'target': '_self'
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
          ],
          externalLinks: [
            {
              'anchorText': 'Github',
              'icon': 'fab fa-github',
              'href': '//github.com/cbemister',
              'nuxt': false,
              'target': '_blank'
            },
            {
              'anchorText': 'LinkedIn',
              'icon': 'fab fa-linkedin',
              'href': '//ca.linkedin.com/in/chrisbemister',
              'nuxt': false,
              'target': '_blank'
            }
          ]
    }
  },
  computed: {
    isAuthenticated() {
        return this.$store.getters.isAuthenticated
      }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    }
  }
}
</script>

<style>


@media only screen and (max-width: 960px) {
  .logo {
   position: absolute; top: -15px; left: 50%; transform: translate(-50%, 0%);
  }
}

</style>
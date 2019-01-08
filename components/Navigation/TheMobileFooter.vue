
<template>
  <v-card>
    <v-bottom-nav
      color="secondary"
      class="darken-2"
      v-if="isAuthenticated && guest"
      :value="true"
      dark
      app
    >

      <v-btn dark>
        <span>Resume</span>
        <v-icon>description</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Contact</span>
        <v-icon>mail</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Account</span>
        <v-icon>person</v-icon>
      </v-btn>
 
      <v-btn dark>
        <span>Logout</span>
        <v-icon>exit_to_app</v-icon>
      </v-btn>

    </v-bottom-nav>

    <v-bottom-nav
      color="secondary"
      class="darken-2"
      v-else-if="isAuthenticated && admin"
      :value="true"
      dark
      app
    >

      <v-btn dark>
        <span>Dashboard</span>
        <v-icon>view_list</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Compose</span>
        <v-icon>create</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Drafts</span>
        <v-icon>inbox</v-icon>
      </v-btn>

    </v-bottom-nav>

    <v-bottom-nav
      color="secondary"
      class="darken-2"
      :value="true"
      v-else
      dark
      app
    >

      <v-btn dark>
        <span>Portfolio</span>
        <v-icon>apps</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Technology</span>
        <v-icon>subject</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Sandbox</span>
        <v-icon>code</v-icon>
      </v-btn>

    </v-bottom-nav>
  </v-card>
</template>

<script>

// import Login from '@/components/Login'

export default {
  middleware: ["check-auth"],
  components: {
    // Login
  },
  data() {
    return {
      showNav: false,
      guest: false,
      admin: true,

    }
  },
  computed: {
    isAuthenticated() {
        return this.$store.getters.isAuthenticated
      }
  },
  methods: {

  }
}
</script>

<style>
</style>
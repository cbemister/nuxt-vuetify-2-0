<template>
  <div>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md4>
        <div class="text-xs-center">
          <h1>Home Page</h1>
        </div>
        <AuthDialog />
        <ComposeDialog />
      </v-flex>
      <dashboard />
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <AppCard
            v-for="(post, index) in loadedPosts"
            :title="post.title"
            :src="post.thumbnail"
            :description="post.shortDescription"
            :link="post.slug"
            :key="index"
          />
        </v-layout>
      </v-container>
    </v-layout>
  </div>
</template>

<script>
import AppCard from "@/components/UI/AppCard";
import AuthDialog from "@/components/Dialog/Auth";
import ComposeDialog from "@/components/Dialog/Compose";
import Dashboard from "@/components/Widgets/Dashboard";

export default {
  components: {
    AppCard,
    AuthDialog,
    ComposeDialog,
    Dashboard
  },
  data() {
    return {
      isAdmin: true,
      dialog: false,
      metaData: {
        title: "Hello World!",
        description: "My custom description"
      }
    };
  },
  head() {
    return {
      title: this.metaData.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.metaData.description
        }
      ]
    };
  },
  methods: {
    message() {
      console.log('clicked')
    }
  },
  computed: {
    loadedPosts() { 
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

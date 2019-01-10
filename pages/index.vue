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
            v-for="(card, index) in cards"
            :title="card.title"
            :src="card.thumbnail"
            :description="card.shortDescription"
            :link="card.slug"
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
      },
      cards: [
        {
            author: "Chris Bemister",
            title: "Pre-fab homes",
            slug: "/blog/pre-fab-homes",
            category: "",
            pageType: "post",
            featured: true,
            thumbnail: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
            content: "Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...",
            shortDescription: "Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...",
            existingPost: true
        },
        {
            author: "Chris Bemister",
            title: "Favorite road trips",
            slug: "/blog/favorite-road-trips",
            category: "",
            pageType: "post",
            featured: true,
            thumbnail: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
            content: "Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...",
            shortDescription: "Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...",
            existingPost: true
        },
        {
          author: "Chris Bemister",
          title: "Best airlines",
          slug: "/blog/best-airlines",
          category: "",
          pageType: "post",
          featured: true,
          thumbnail: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
          content: "Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...",
          shortDescription: "Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...",
          existingPost: false
        }
      ]
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
  }
}
</script>

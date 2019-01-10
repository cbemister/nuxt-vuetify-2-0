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
            v-for="(post, index) in posts"
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
      },
     posts: [
          {
          author: "Chris Bemister",
          category: "portfolio",
          content: "even more content",
          featured: true,
          id: "-LNCHkROSDOfQFl-iHQx",
          pageType: "page",
          previewText: "preview text",
          shortDescription: "beautiful",
          slug: "/portfolio/title",
          thumbnail: "https://images.pexels.com/photos/18396/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
          title: "title",
          updatedDate: "2018-09-24T20:35:11.568Z",
          status: "live"	
        },
        {
          author: "Chris Bemister",
          category: "about",
          content: "Just a quick hello",
          featured: true,
          id: "-LSYH-wbP_Wqet5w7EnO",
          pageType: "post",
          shortDescription: "I am going to be the greatest blogger ever.",
          slug: "/about/profile",
          status: "deleted",
          thumbnail: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
          title: "profile",
          updatedDate: "2018-11-30T06:22:03.426Z"
        },
        {
          author: "Chris Bemister",
          category: "technology",
          content: "Is this working?",
          featured: true,
          id: "-LQN3gwdDbXzEXfnV2Ld",
          pageType: "page",
          shortDescription: "yeah yeah yeah",
          slug: "/technology/quick-test-post",
          status: "draft",
          thumbnail: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
          title: "Quick test post",
          updatedDate: "2018-11-03T05:36:42.880Z"	
        },
        {
          author: "Chris Bemister",
          category: "sandbox",
          content: "I really need to start populating some real con...",
          featured: false,
          id: "-LShNhXq34_YA1M0hE1c",
          pageType: "page",
          shortDescription: "Just a test",
          slug: "/sandbox/title2",
          status: "draft",
          thumbnail: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
          title: "title2",
          updatedDate: "2018-12-02T05:27:31.059Z"
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

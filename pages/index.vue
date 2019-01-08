<template>
  <div>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md4>
        <div class="text-xs-center">
          <h1>Home Page</h1>
        </div>
      </v-flex>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <Card
            v-for="(card, index) in cards"
            :title="card.title"
            :src="card.src"
            :description="card.description"
            :link="card.link"
            :key="index"
          />
        </v-layout>
      </v-container>
    </v-layout>
  </div>
</template>

<script>
import Card from "@/components/UI/Card";

export default {
  components: {
    Card
  },
  data() {
    return {
      title: "Hello World!",
      cards: [
        {
          title: "Pre-fab homes",
          src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
          description:
            "Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...",
          link: "/blog/test1"
        },
        {
          title: "Favorite road trips",
          src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
          description:
            "Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...",
          link: "/blog/test2"
        },
        {
          title: "Best airlines",
          src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
          description:
            "Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...",
          link: "/blog/test3"
        }
      ]
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  }
};
</script>
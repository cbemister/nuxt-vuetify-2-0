<template>
  <div class="dashboard">
    <v-container class="my-5">
      <h1 class="mainheading grey--text">Dashboard</h1>
      <v-layout row class="mb-3">
        <h2 class="body-1 primary--text layout row justify-end align-center pr-3">Filter By</h2>
        <v-select
          :items="filters.authors"
          v-model="filters.selected[0]"
          label="Author"
          small-chips
          deletable-chips
        ></v-select>
        <v-select
          :items="filters.date"
          v-model="filters.selected[3]"
          label="Age in Days"
          small-chips
          deletable-chips
          class="ml-2"
        ></v-select>
        <v-select
          :items="filters.categories"
          v-model="filters.selected[1]"
          label="Category"
          small-chips
          deletable-chips
          class="ml-2"
        ></v-select>
        <v-select
          :items="filters.featured"
          v-model="filters.selected[2]"
          label="Featured"
          small-chips
          deletable-chips
          class="ml-2"
        ></v-select>
        <v-select
          :items="filters.status"
          v-model="filters.selected[4]"
          label="Status"
          small-chips
          deletable-chips
          class="ml-2"
        ></v-select>
      </v-layout>
      <v-card flat v-for="post in filteredPosts" :key="post.title">
        <ComposeDialog isAdmin editPost :post="post" class="row align-center">
          <v-layout row wrap :class="`pa-3 post ${post.category}`">
            <v-flex xs6 sm3 md2>
              <div class="caption grey--text">Author</div>
              <div>{{ post.author }}</div>
            </v-flex>
            <v-flex xs12 md5>
              <div class="caption grey--text">Title / Description</div>
              <div class="body-2 primary--text text--darken-1">{{ post.title }}</div>
              <div>{{ post.shortDescription }}</div>
            </v-flex>
            <v-flex xs2 sm3 md2>
              <div class="caption grey--text">Date</div>
              <div>{{ post.updatedDate | date }}</div>
            </v-flex>
            <v-flex xs6 sm3 md1>
              <div class="caption grey--text">Category</div>
              <div class="category">{{ post.category }}</div>
            </v-flex>
            <v-flex xs2 sm3 md1>
              <div class="caption grey--text">Featured</div>
              <v-checkbox v-model="post.featured" class="mt-0 pt-0" style="position: relative;"></v-checkbox>
            </v-flex>
            <v-flex xs2 sm3 md1 style="border-right: 1px solid #9e9e9e">
              <div class="caption grey--text">Status</div>
              <div>{{ post.status }}</div>
            </v-flex>
          </v-layout>
        </ComposeDialog>

        <v-divider></v-divider>
      </v-card>
      <v-flex class="layout row justify-center">
        <v-pagination v-model="page" :length="4" :total-visible="7" class="mt-3"></v-pagination>
      </v-flex>
    </v-container>
  </div>
</template>

<script>

import ComposeDialog from "@/components/Dialog/Compose";

export default {
components: {
    ComposeDialog
  },
  data() {
    return {
      dialog: false,
      filters: {
        categories: ["Portfolio", "Technology", "Sandbox"],
        authors: ["Chris Bemister", "Nina Bemister"],
        featured: ["Yes", "No"],
        status: ["Live", "Draft", "Deleted"],
        date: ["30", "60", "90"],
        selected: [
          [], // Author
          [], // Category
          [], // Featured
          [], // Date
          [] // Status
        ]
      },
      page: 1
    };
  },
  methods: {
    unfocus() {}
  },
  computed: {
    loadedPosts() { 
      return this.$store.getters.loadedPosts
    },
    filteredPosts() {
      return this.loadedPosts.filter(post => {
        post.postAge = this.daysBetweenPosts(post.updatedDate);

        if (
          (this.filters.selected[0] === null ||
            this.filters.selected[0].length == 0) &&
          (this.filters.selected[1] === null ||
            this.filters.selected[1].length == 0) &&
          (this.filters.selected[2] === null ||
            this.filters.selected[2].length == 0) &&
          (this.filters.selected[3] === null ||
            this.filters.selected[3].length == 0) &&
          (this.filters.selected[4] === null ||
            this.filters.selected[4].length == 0)
        ) {
          return true;
        }

        // Author -- index 0
        // Category -- index 1
        // Featured -- index 2
        // Date -- index 3
        // Status -- index 4

        let featured = post.featured === true ? "Yes" : "No";

        return (
          (post.author == this.filters.selected[0] ||
            this.filters.selected[0] === null ||
            this.filters.selected[0].length == 0) &&
          (post.category == this.filters.selected[1] ||
            this.filters.selected[1] === null ||
            this.filters.selected[1].length == 0) &&
          (featured == this.filters.selected[2] ||
            this.filters.selected[2] === null ||
            this.filters.selected[2].length == 0) &&
          (post.status == this.filters.selected[4] ||
            this.filters.selected[4] === null ||
            this.filters.selected[4].length == 0) &&
          (post.postAge <= this.filters.selected[3] ||
            this.filters.selected[3] === null ||
            this.filters.selected[3].length == 0)
        );
      });
    }
  },
  created() {
    // const chipClose = document.querySelectorAll('.v-chip__close');
    // chipClose.addEventListener('click', function() {
    //   chipClose.blur();
    // });
  },
  methods: {
    daysBetweenPosts(date) {
      var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      var postDate = new Date(date);
      var todaysDate = new Date();

      var diffDays = Math.floor(
        Math.abs((postDate.getTime() - todaysDate.getTime()) / oneDay)
      );

      return diffDays;
    }
  }
};
</script>

<style>
.post.portfolio {
  border-left: 4px solid #3cd1c2;
}
.post.technology {
  border-left: 4px solid orange;
}
.post.sandbox {
  border-left: 4px solid tomato;
}
.post .category,
.post .featured {
  text-transform: capitalize;
}

</style>
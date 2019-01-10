<template>
  <v-layout>
    <slot />
    <v-dialog v-model="dialog" width="600">
          <div class="absolute" v-if="!drawer" slot="activator">
          <v-list-tile>
            <v-list-tile-action style="min-width: 45px;">
              <v-icon v-if="dashboard" class="pa-5 hover" style="margin-left: -17px;">create</v-icon>
              <v-icon v-else class="hover" style="">create</v-icon>
            </v-list-tile-action>

            <v-list-tile-content v-if="!dashboard">
              <v-list-tile-title>Compose</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
    </div>
      <v-btn v-if="!desktop" slot="activator" class="secondary darken-1 pl-5 pr-4 mr-1" style="height: 80px; -webkit-clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%); clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);" left dark>
          <span class="mr-2">Compose</span>
          <v-icon>create</v-icon>
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">{{ editPost ? label = "Edit " : label = "Add " }} Post</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-form @submit.prevent="onSubmit">
                <component @dialogClose="dialog = !dialog" :post="post" :is="form" />
            </v-form>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>


<script>
import ComposeForm from "@/components/Forms/Compose"


export default {
  name: "Compose-Dialog",
  components: {
    ComposeForm
  },
  props: {
    editPost: {
      type: Boolean,
      default: false
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    dashboard: {
      type: Boolean,
      default: false
    },
    post: {
      type: Object,
    },
  },
  data() {
    return {
        desktop: true,
        drawer: false,
        dialog: false,
        form: 'ComposeForm',
        label: ''
    };
  }
}
</script>

<style>

.hover:hover {

  color: #0093d2;

}

</style>
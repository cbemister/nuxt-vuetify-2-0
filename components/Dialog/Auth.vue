<template>
  <v-layout>
    <v-dialog v-model="dialog" width="600">
          <div class="absolute" v-if="!drawer" slot="activator">
          <v-list-tile>
            <v-list-tile-action style="min-width: 45px;">
              <v-icon>person_outline</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Login</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
    </div>
    <v-btn v-else slot="activator" class="secondary darken-1 px-4 ml-2" style="height: 80px" left flat dark>
        <span class="mr-2">Login</span>
        <v-icon>person_outline</v-icon>
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Login Form</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-form @submit.prevent="onSubmit">
                <AuthForm />
            </v-form>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>


<script>
import AuthForm from "@/components/Forms/Auth"


export default {
  name: "Auth-Dialog",
  components: {
    AuthForm,

  },
  data() {
    return {
        desktop: true,
        drawer: false,
        dialog: false
    };
  }
}
</script>
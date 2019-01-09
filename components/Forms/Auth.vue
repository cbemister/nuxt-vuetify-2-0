 <template>
 
    <v-layout wrap>
    <v-flex xs12>
        <v-text-field label="Email*" type="email" v-model="email" :rules="emailRules" required></v-text-field>
    </v-flex>
    <v-flex xs12>
        <v-text-field label="Password*" type="password" v-model="password" required></v-text-field>
    </v-flex>
    <v-card-actions class="layout row justify-end">
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="$emit('dialogClose')">Close</v-btn>
        <v-btn color="blue darken-1" type="submit" dark lowercase @click="dialog = false">Submit</v-btn>
    </v-card-actions>
    </v-layout>
 
 </template>

<script>


export default {
  data() {
    return {
      dialog: false,
      isLogin: true,
      email: "",
      password: "",
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
    };
  },
  props: {
    drawer: {
      type: Boolean,
      required: false
    }

  },
  methods: {
    onSubmit() {
      this.$store.dispatch("authenticateUser", {
        isLogin: this.isLogin,
        email: this.email,
        password: this.password
      })
      .then(() => {
        this.$router.push('/admin');
      });
    }
  }
};
</script>

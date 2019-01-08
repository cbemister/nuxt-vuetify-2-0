 <template>
 
<div>
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
    <AppControlInput v-model="editedPost.title" :disabled="existingPost === true" inputTitle>Title</AppControlInput>
    <AppControlInput
      v-model="editedPost.shortDescription">Short Description</AppControlInput>


    <span>
      <label for="pageType">Page Type: </label>
      <select name="pageType" v-model="editedPost.pageType" :disabled="existingPost === true">
        <option value="post" :selected="true">Post</option>
        <option value="page">Page</option>
      </select>
    </span>

    <span v-if="editedPost.pageType === 'page'">
      <label for="category">Category: </label>
      <select name="category" v-model="editedPost.category" :disabled="existingPost === true">
        <option value="Portfolio">Portfolio</option>
        <option value="Technology">Technology</option>
        <option value="Sandbox">Sandbox</option>
        <option value="About">About Me</option>
      </select>
    </span>

    <label for="featured">Featured: </label>
    <input v-model="editedPost.featured" type="checkbox" id="featured " name="featured" value="false">
    <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>
    <AppControlInput
      controlType="textarea"
      v-model="editedPost.content">Content</AppControlInput>

    <AppButton type="submit">Save</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel">Cancel</AppButton>
 
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal first name*" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-flex>
            </v-layout>

</div>

 
 </template>

<script>

import slugify from 'slugify'

import AppButton from "@/components/UI/AppButton"
import AppControlInput from "@/components/UI/AppControlInput"


export default {
  components: {
    AppButton,
    AppControlInput
  },
  props: {
    post: {
      type: Object,
      required: false
    },
    drawer: {
      type: Boolean,
      required: false
    }
  },
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
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "Chris Bemister",
            title: "",
            slug: "",
            category: "",
            pageType: "",
            featured: false,
            thumbnail: "",
            content: "",
            shortDescription: "",
            existingPost: false 
          },
      existingPost: this.post ? true : false  
    };
  },
  computed: {
    isDisabled() {
      // evaluate whatever you need to determine disabled here...
      return this.form.validated;
    }
  },
  methods: {
    onSave() {
      // Save the post
      this.updateSlug();
      
        if (this.$store.state.formError === false  || this.existingPost) {
          this.$emit('submit', this.editedPost)
        } else {
          alert('Please fix the error before saving the form.')
        }
  
    },
    onCancel() {
      // Navigate back

      this.$router.push("/admin");
    },
    updateSlug (e) {
      const inputText = this.editedPost.title;
      const inputPageType = this.editedPost.pageType;
      const inputCategory = this.editedPost.category;
      let inputSlug = '';
      let slugPrefix = '';

      if (inputPageType === 'page') {

        inputSlug = inputCategory + '/' +  inputText;

      } else {
        inputSlug = 'posts/' + inputText;
      }

      const slug = slugify(inputSlug, {
          replacement: '-',    // replace spaces with replacement
          remove: /[*+~.()'"!:@]/g,        // regex to remove characters
          lower: true          // result in lower case
      })

    this.editedPost.slug = slugPrefix + '/' + slug;

    }
  },
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
};
</script>
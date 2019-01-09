 <template>
 
<div>
    <AppControlInput v-model="editedPost.author" label="Author Name" />
    <AppControlInput v-model="editedPost.title" :disabled="existingPost === true" inputTitle label="Title" />
    <AppControlInput v-model="editedPost.shortDescription" label="Short Description" />

      <v-flex xs6>
        <v-subheader>Custom items</v-subheader>
      </v-flex>

      <v-flex xs6>
        <v-select
          :items="options"
          item-text="pageType"
          item-value="pageType"
          label="Select Page Type"
          return-object
          v-model="editedPost.pageType"
          :disabled="existingPost === true"
        ></v-select>
      </v-flex>

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
    <AppControlInput v-model="editedPost.thumbnail" label="Thumbnail Link" />
    <AppControlInput controlType="textarea" v-model="editedPost.content" label="Main Content" />

    <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
    <AppButton>Submit</AppButton

    </v-card-actions>




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
      existingPost: this.post ? true : false,
      options: [
          {
            selected: false,
            pageType: 'Post'  
          },
          {
            selected: false,
            pageType: 'Page',  
          }
      ]  
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
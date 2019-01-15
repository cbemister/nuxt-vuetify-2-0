 <template>
  <div>
    <AppControlInput v-model="editedPost.author" label="Author Name" disabled/>
    <AppControlInput
      v-model="editedPost.title"
      :disabled="existingPost === true"
      inputTitle
      label="Title*"
    />
    <AppControlInput v-model="editedPost.shortDescription" label="Short Description"/>

    <v-item-group>
        <v-layout wrap>
          <v-flex xs5>
            <v-select
              :items="options.pageType"
              item-text="pageType"
              item-value="value"
              label="Page Type*"
              return-object
              name="pageType"
              v-model="editedPost.pageType"
              :disabled="existingPost === true"
              required
            ></v-select>
          </v-flex>

          <v-flex xs5>
            <v-select
              :items="options.categories"
              item-text="category"
              item-value="value"
              label="Category"
              return-object
              name="category"
              v-model="editedPost.category"
              :disabled="existingPost === true || editedPost.pageType.value !== 'page' "
            ></v-select>
          </v-flex>
          <v-flex xs2>
            <v-checkbox label="Featured" v-model="editedPost.featured"></v-checkbox>
          </v-flex>
        </v-layout>
    </v-item-group>

    <AppControlInput v-model="editedPost.thumbnail" label="Thumbnail Link"/>
    <AppControlInput controlType="textarea" v-model="editedPost.content" label="Main Content"/>

    <v-btn color="blue darken-1" flat @click="$emit('dialogClose')">Close</v-btn>
    <AppButton>{{ postType === 'newPost' ? btnText = "Submit" : btnText = "Save" }}</AppButton>
  </div>
</template>

<script>
import AppButton from "@/components/UI/AppButton";
import AppControlInput from "@/components/UI/AppControlInput";

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
    },
    editPost: {
      type: Boolean,
      required: false
    },
    postType: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      dialog: false,
      isLogin: true,
      email: "",
      password: "",
      btnText: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "Chris Bemister",
            title: "",
            slug: "",
            status: "",
            category: "",
            pageType: "",
            featured: false,
            thumbnail: "",
            content: "",
            shortDescription: "",
            existingPost: false
          },
      existingPost: this.post ? true : false,
      options: {
        pageType: [
          {
            selected: false,
            pageType: "Post",
            value: "post"
          },
          {
            selected: false,
            pageType: "Page",
            value: "page"
          }
        ],
        categories: [
          {
            selected: false,
            category: "Portfolio",
            value: "portfolio"
          },
          {
            selected: false,
            category: "Technology",
            value: "technology"
          },
          {
            selected: false,
            category: "Sandbox",
            value: "sandbox"
          },
          {
            selected: false,
            category: "About",
            value: "about"
          }
        ]
      }
    };
  },
  computed: {
    // isDisabled() {
    //   // evaluate whatever you need to determine disabled here...
    //   return this.form.validated;
    // },
    title: {
        get() {
            return this.$store.state.newPost.title
          }
    }
  },
  methods: {
    
  },
  onSubmit() {
    this.$store
      .dispatch("authenticateUser", {
        isLogin: this.isLogin,
        email: this.email,
        password: this.password
      })
      .then(() => {
        this.$router.push("/admin");
      });
  }
};
</script>
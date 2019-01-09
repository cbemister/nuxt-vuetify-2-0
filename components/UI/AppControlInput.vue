<template>
  <div class="input-control">
    <!--<label><slot /></label>-->

    <v-flex xs12>
        <v-text-field 
          :label="label"
          v-if="controlType === 'input' && !inputTitle"
          v-bind="$attrs"
          :value="value"
          @input="$emit('input', $event.target.value)">
        ></v-text-field>
        <v-text-field 
          label="Title"
          v-if="controlType === 'input' && inputTitle"
          v-bind="$attrs"
          :value="value"
          ref="title"
          @blur="checkTitle"
          @keydown="removeMessage"
          @input="$emit('input', $event.target.value)">
        ></v-text-field>
        <v-textarea
          v-else-if="controlType === 'textarea'"
          :label="label"
          auto-grow
          :value="value"
          @input="$emit('input', $event.target.value)"
        ></v-textarea>
    </v-flex>


    <span class="message" v-if="duplicateTitle">{{ message }}</span>

  </div>
</template>

<script>

const axios = require("axios");

export default {
  data() {
    return {
      duplicateTitle: false,
      message: 'Duplicate title found. Please modify your title.'
    }
  },
  name: 'AppInputControl',
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    inputTitle: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  methods: {
    checkTitle () {

      axios
        .get("https://chrisbemister83.firebaseio.com/posts.json")
        .then(res => {

          for (const key in res.data) {

            if (res.data[key].title === this.value) {                    
                this.duplicateTitle = true
                this.setFocus()

                this.$store.dispatch("updateFormError", true);

            }

          }

        }).catch(e => e)

    },
    removeMessage() {
      this.duplicateTitle = false
      this.$store.dispatch("updateFormError", false);
    },
    setFocus() {
      // Note, you need to add a ref="search" attribute to your input.
      this.$refs.title.focus();
    }
  }
}
</script>

<style scoped>
.input-control {
  margin: 10px 0;
}

.input-control label {
  display: block;
  font-weight: bold;
}

.input-control input,
.input-control textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid #ccc;
  padding: 5px;
}

.input-control input:focus,
.input-control textarea:focus {
  background-color: #eee;
  outline: none;
}

.message {
  color: red;
}

</style>



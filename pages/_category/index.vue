<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <h1>Category Template</h1>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  validate(data) {
      const categories = ['', 'blog', 'portfolio', 'technology', 'sandbox', 'about']
      return  categories.some((category) => category == data.params.category) 
    },
  data() {
      return {
        
      }
  },
  methods: {
    linkTo() {
      this.$router.push('somepath' + this.id )
    }
  }
}


</script>
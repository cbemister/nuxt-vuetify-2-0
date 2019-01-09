<template>

        <v-btn 
          color="blue darken-1"
          type="submit" 
          dark 
          lowercase 
          @click="$emit('drawerClose')"
          :bind="$attrs"
          v-on="$listeners">
        <slot />
      </v-btn>

</template>

<script>
export default {
  name: 'AppButton',
  props: {
  },
  data() {
    return {
      dialog: ''
    }
  }
}
</script>


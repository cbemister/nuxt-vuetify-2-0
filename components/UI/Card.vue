<template>

    <v-flex>
        <v-card>
        <v-img
            :src="src"
            aspect-ratio="2.75"
            gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        ></v-img>

        <v-card-title primary-title>
            <div>
            <h3 class="headline mb-0">{{ title }}</h3>
            <div v-html="description"></div>
            </div>
        </v-card-title>

        <v-card-actions>
            <v-btn nuxt :to="link" flat color="orange">Explore</v-btn>
        </v-card-actions>
        </v-card>
    </v-flex>

</template>

<script>

export default {
    name: 'Card',
    props: {
        src: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    },
    data() {
        return {

        }
    },

}


</script>
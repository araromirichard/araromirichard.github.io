/* eslint-disable */
<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="card in cards" :key="card.title" cols="12" md="3">
          <v-hover v-slot="{ hover }">
            <v-card class="d-flex align-center rounded-xl" dark>
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.5)"
                height="300px"
              >
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>
              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  absolute
                  color="#036358"
                  class="d-flex justify-center align-center text-center"
                >
                  <span class="px-3 text-subtitle-2">{{ card.projDesc }}</span
                  ><br />
                  <v-btn
                    elevation="4"
                    large
                    dark
                    color="pink darken-4"
                    class="mt-4"
                    ><a :href="card.link" target="_blank">
                      Check it Out</a
                    ></v-btn
                  >
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'projects',
  data () {
    return {
      cards: [
        {
          title: 'Mooveet App',
          src: 'mooveetApp.jpg',
          projDesc:
            'A logistics app built with laravel framework and bootstrap',
          link: 'http://mooveetapp.herokuapp.com/'
        },
        {
          title: 'Daluksbespoke',
          src: 'dalusks.jpg',
          projDesc: 'A fashion e-commerce app built with PHP and wordpress',
          link: 'https://daluksbespoke.com/'
        },
        {
          title: 'A of G Orphanage',
          src: 'arrowofgod.jpg',
          projDesc: 'A donation blog/website for AOG orphanage',
          link: 'http://arrowsofgodorphanage.org/'
        },
        {
          title: 'My Portfolio',
          src: 'bg1.jpg',
          projDesc:
            'My simple portfolio built with vueJs and vuetify framework',
          link: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
a:link {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
</style>

<template>
  <div>
    <v-app-bar
      app
      dark
      color="#010104"
      flat
      class="px-8"
      v-if="$vuetify.breakpoint.mdAndUp"
    >
      <v-btn plain>
        <v-icon large color="#40C4FF"> fas fa-code-compare </v-icon>
        <span class="text-lowercase text-h4">araromi</span
        ><span class="text-capitalize pink--text darken-4 text-h5"
          >Richard</span
        >
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text @click="scroll('home')">Home</v-btn>
      <v-btn text @click="scroll('about-container')">About</v-btn>
      <v-btn text @click="scroll('project')">Projects</v-btn>
      <v-btn text @click="scroll('contact')">Contact</v-btn>
    </v-app-bar>
    <v-app-bar app dark color="blue-grey darken-3" class="hidden-sm-and-up">
      <v-btn plain>
        <v-icon large color="#40C4FF"> fas fa-code-compare </v-icon>
        <span class="text-lowercase text-h4">araromi</span
        ><span class="text-capitalize pink--text darken-4 text-h5"
          >Richard</span
        >
      </v-btn>
      <v-spacer></v-spacer>

      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon dark v-on="on"></v-app-bar-nav-icon>
        </template>
        <v-card>
          <v-app-bar flat color="blue-grey darken-2">
            <v-app-bar-title
              ><span class="text-lowercase text-h4">araromi</span
              ><span class="text-capitalize pink--text darken-4 text-h5"
                >Richard</span
              ></v-app-bar-title
            >
            <v-spacer></v-spacer>
            <v-btn dark icon @click.native="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-app-bar>

          <v-list class="text-center">
            <v-list-item-group v-model="group" active-class="pink--text">
              <v-list-item @click="scroll('home')">
                <v-list-item-content>
                  <v-list-item-title class="text-h4">Home</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="scroll('about-container')">
                <v-list-item-content>
                  <v-list-item-title class="text-h4">About</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="scroll('project')">
                <v-list-item-content>
                  <v-list-item-title class="text-h4"
                    >Projects</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="scroll('contact')">
                <v-list-item-content>
                  <v-list-item-title class="text-h4">Contact</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-dialog>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    scroll (refName) {
      const element = document.getElementById(refName)
      element.scrollIntoView({ behavior: 'smooth' })
    }
  },
  watch: {
    group () {
      this.dialog = false
    }
  },
  data () {
    return {
      dialog: false,
      group: null,
      nav: [
        {
          text: 'Home',
          active: true
        },
        {
          text: 'About',
          active: false
        },
        {
          text: 'Project',
          active: false
        },
        {
          text: 'Contact',
          active: false
        }
      ]
    }
  }
}
</script>

<style scoped></style>

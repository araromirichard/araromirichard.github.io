<template>
  <v-row>
    <v-col>
      <v-footer dark padless class="d-flex align-end">
        <v-card class="flex" flat tile>
          <v-card-title class="px-md-15" style="background-color: #27779c">
            <strong class="subheading text-center"
              >Connect with me on social network</strong
            >

            <v-spacer></v-spacer>

            <v-btn  v-for="icon in icons" :key="icon" class="mx-4" dark icon>
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text class="py-2 text-body-1 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>araromi-richard</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'myfooter',
  data () {
    return {
      icons: ['mdi-linkedin', 'mdi-github']
    }
  }
}
</script>

<style scoped></style>

<template>
  <div>
    <v-hover v-slot="{ hover }">
      <v-btn
      :href="action"
        v-if="$vuetify.breakpoint.mdAndUp ? 'x-large':'small'"
        class="ma-2"
        rounded2
        outlined
        color="#FAFAFA"
        :style="{
          'background-color': hover ? '#ba1c46' : '',
          border: hover ? 'none' : '',
          color: hover ? 'white' : '#fafafa',
        }"
      >
        {{ btnName }}
      </v-btn>

    </v-hover>
  </div>
</template>

<script>
export default {
  name: 'mybutton',
  props: {
    btnName: String,
    action: String
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style scoped></style>

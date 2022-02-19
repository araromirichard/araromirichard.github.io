import Vue from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'fa' || 'mdi'
  },
  theme: {
    themes: {
      dark: {
        background: '#111111'
      }
    }
  }
})

import Vue from 'vue'
import Vuetify, {
  VApp, // required
  VNavigationDrawer,
  VFooter,
  VToolbar
} from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VToolbar
  },
  directives: {
    Ripple
  },
  theme: {
    primary:     '#00aeef',
    secondary:   '#8b8b8b'
  },
  iconfont: 'md' // 'md' || 'mdi' || 'fa' || 'fa4'
})
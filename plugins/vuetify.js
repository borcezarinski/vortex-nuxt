 import Vue from 'vue';
import Vuetify from 'vuetify';
 import '@mdi/font/css/materialdesignicons.css';
 export default new Vuetify( {
  theme: {
   dark: true,
   icons: {
    iconfont: 'md', // default - only for display purposes
   },
   themes: {
    dark: {
     primary: '#8EC631',
    }
   }
  }})

Vue.use(Vuetify);


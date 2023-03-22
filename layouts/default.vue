<template>
  <v-app>
    <Navbar ref="navbar" @changeTheme="changeTheme($event)" :key="'navbar-' + themeKey" />
    <v-container class="overflow-hidden" fluid>
      <div class="page-content mt-5">
      <nuxt />
      </div>
    </v-container>
    <Footer />
  </v-app>
</template>
<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cookie from "js-cookie";
export default {
  components: {Footer, Navbar},
  scrollToTop: true,
  data(){
    return{
      themeKey:1
    }
  },
  created(){
    if(Cookie.get("vortexTheme") == "light"){
      this.changeTheme("light");
    }
  },
  methods: {
    changeTheme(theme) {
      if ((theme == 'dark' && !this.$vuetify.theme.dark) || (theme == 'light' && this.$vuetify.theme.dark)) {
        let oldlink = "";
        let newCss = !this.$vuetify.theme.dark ? "dark" : "style";
        for (let i = 0; i < document.getElementsByTagName("link").length; i++) {
          let oldlinkt = document.getElementsByTagName("link").item(i);
          if (oldlinkt.href.includes('maincss')) {
            oldlink = oldlinkt;
            break;
          }
        }


        var newlink = document.createElement("link");
        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("type", "text/css");
        newlink.setAttribute("href", "/css/" + newCss + ".min.css?id=maincss");

        document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
        let vortex_theme = !this.$vuetify.theme.dark ? "dark" : "light";
        Cookie.set("vortexTheme", vortex_theme);
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        this.$nextTick(() =>{this.themeKey++;})
      }
    }
  }
}
</script>

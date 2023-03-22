<template>
  <v-container fluid class="px-0 mx-0 z-index-100" id="main-navbar">
    <v-container class="pt-0">
    <v-toolbar class="my-0 box-shadow-none">
      <v-toolbar-title class="d-flex overflow-visible align-items-center">
        <router-link to="/" tag="span" style="cursor: pointer" class="d-flex">

          <img  class="img img-responsive logo" :src="$vuetify.theme.dark ? '/img/logo.jpg' : '/img/logo-white.jpg'" />
          <!--    <img v-bind:class="{'invisible': hiddenLogo}" class="img img-responsive logo" src="/img/logo.jpg" />-->
        </router-link>
      </v-toolbar-title>
      <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
        <v-list class="d-flex transparent">
<!--          <v-list-item class="me-xl-15 me-lg-10 me-md-5">
            <a class="menu-link d-flex" @click="bootIntercom"><v-icon class="mr-1 text-success">mdi-help-circle</v-icon>Help</a>
          </v-list-item>-->

          <v-list-item>
            <router-link class="menu-link" to="/contact">Контакт</router-link>
          </v-list-item>
          <v-list-item>
            <router-link class="menu-link" to="/downloads">Downloads</router-link>
          </v-list-item>
        </v-list>
        <v-flex class="mt-3">
          <v-btn class="mx-0" :color="$vuetify.theme.dark ? 'primary' : 'default'" @click="$emit('changeTheme','dark')">Темна</v-btn>
          <v-btn class="ml-0" :color="!$vuetify.theme.dark ? 'primary' : 'default'" @click="$emit('changeTheme','light')">Светла</v-btn>
        </v-flex>

      </v-toolbar-items>
      <v-btn color="primary" rounded class="hidden-tablet" @click="show = !show">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-toolbar>
    </v-container>
    <v-navigation-drawer
        v-model="show"
        absolute
        right
        temporary
    >
      <img  class="img img-responsive w-100" :src="$vuetify.theme.dark ? '/img/logo.jpg' : '/img/logo-white.jpg'" />

      <v-list class="pt-0">
        <v-list-item-group
        >


            <v-list-item class="me-xl-15 me-lg-10 me-md-5">
              <router-link class="menu-link" to="/downloads">Downloads</router-link>
            </v-list-item>
            <v-list-item>
              <router-link class="menu-link" to="/contact">Контакт</router-link>
            </v-list-item>
            <v-list-item>
              <router-link class="menu-link" to="/cenovnik">Ценовник</router-link>
            </v-list-item>


<v-list-item>
  <v-flex class="mt-3">
    <v-btn class="mx-0" :color="$vuetify.theme.dark ? 'primary' : 'default'" @click="$emit('changeTheme','dark')">Темна</v-btn>
    <v-btn class="ml-0" :color="!$vuetify.theme.dark ? 'primary' : 'default'" @click="$emit('changeTheme','light')">Светла</v-btn>
  </v-flex>
</v-list-item>

        </v-list-item-group>
      </v-list>

<!--      <div class="d-flex ms-3 mt-5 align-content-center">
        <img class="img img-responsive user mr-2 rounded" :src="'#'" width="64" height="64"   />
        <div class="h-100 d-flex flex-column justify-center my-auto"><h4 class="my-auto">{{ user.first_name }}</h4></div>
      </div>
      <v-spacer></v-spacer>-->
    </v-navigation-drawer>
  </v-container>
</template>
<script>


import _ from 'lodash';
import Cookie from 'js-cookie';
export default {
  name: "Navbar",
  props:{
    hiddenLogo:{
      type:Boolean,
      default:false
    },
    placeholder:{
      type:String
    }
  },

  data(){
    return {
      toggleMenu:false,
      search:"",
      show: false,
      profileModal:false
    }
  },

  methods: {
/*    changeTheme(theme){
      if((theme == 'dark' && !this.$vuetify.theme.dark) || (theme == 'light' && this.$vuetify.theme.dark)) {
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
        console.log(Cookie.get("vortexTheme"));
      }
    },*/
/*    bootIntercom() {
      this.$intercom.boot({
        user_id: this.user.id,
        name: this.user.first_name,
        email: this.user.email,
      });
      this.$intercom.show();
    },*/
    emitSearch: _.debounce(function () {
      this.$emit("search", this.search)
    },600)
  },
/*  created() {
    this.$intercom.shutdown();
  },*/
  watch:{
    search:{
      handler(val){
        this.emitSearch();
      }
    }
  }
};
</script>

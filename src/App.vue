<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item >
          <v-list-item-action>
            <!-- <v-icon>home</v-icon> -->
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item >
          <v-list-item-action>
            <!-- <v-icon>contact_mail</v-icon> -->
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#00ADE2" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <hello-world msg="Wow!"/>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="#e6e7e8" app>
      <span >&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default Vue.extend({
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    drawer: null
  })
});
</script>

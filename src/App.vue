<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense nav>
        <router-link to="/">
          <v-list-item link>
            <v-list-item-action class="grey--text text--darken-1">
              <i class="fas fa-house-user"></i>
            </v-list-item-action>
            <v-list-item-content class="grey--text text--darken-1">
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/decorator-pattern">
          <v-list-item link>
            <v-list-item-action class="grey--text text--darken-1">
              <i class="fas fa-pizza-slice"></i>
            </v-list-item-action>
            <v-list-item-content class="grey--text text--darken-1">
              <v-list-item-title>Make Pizza Order</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="#294e80" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <span class="font-weight-bold">Type</span>
        <span>Script</span>
      </v-toolbar-title>
    </v-app-bar>
    <router-view></router-view>
    <v-footer color="#e6e7e8" app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data: () => ({
    drawer: null
  })
});
</script>

<style>
a {
  text-decoration: none;
}
</style>

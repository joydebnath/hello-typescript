<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <order-menu />
      </v-layout>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import Vue from "vue";
import OrderMenu from "../components/pizza-maker/OrderMenu.vue";

export default Vue.extend({
  name: "DecoratorPattern",
  components: {
    OrderMenu
  },
  mounted() {
    this.$store.commit("setTitle", "Decorator Pattern - Pizza Maker!");
  }
});
</script>

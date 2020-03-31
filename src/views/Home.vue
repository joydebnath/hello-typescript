<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-container>
          <v-row class="text-center">
            <v-col cols="12">
              <h2 class="display-3">
                "Hello TypeScript" - Where I gradually
                <span class="bold" style="color:#294e80">
                  <span class="font-weight-bold">Type</span>
                  <span>Script!</span>
                </span>
              </h2>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Home",
  mounted() {
    this.$store.commit("setTitle", "TypeScript");
  }
});
</script>
<style>
.v-skeleton-loader__text {
  height: 24px !important;
}
</style>

<template>
  <v-radio-group v-model="pizzaBase" class="d-block">
    <template v-slot:label>
      Select the <strong class="cyan--text">Base Size</strong>
    </template>
    <v-radio
      v-for="(pizzaSize, index) in pizzaSizes"
      :key="index"
      :value="pizzaSize"
    >
      <template v-slot:label>
        <div class="d-block" style="width:100%">
          <span>
            {{ pizzaSize.getDescription() }}
          </span>
          <strong class="cyan--text text--lighten-1 float-right pr-7">
            ${{ pizzaSize.getCost().toFixed(2) }}
          </strong>
        </div>
      </template>
    </v-radio>
  </v-radio-group>
</template>

<script lang="ts">
import Vue from "vue";
import {
  SmallPizzaBase,
  MediumPizzaBase,
  LargePizzaBase
} from "../../models/pizza-maker/PlainPizzaBase";

export default Vue.extend({
  name: "PizzaBaseSize",
  created() {
    this.pizzaBase = new SmallPizzaBase();
    this.pizzaSizes = [
      this.pizzaBase,
      new MediumPizzaBase(),
      new LargePizzaBase()
    ];
  },
  data: () => ({
    pizzaBase: undefined,
    pizzaSizes: undefined
  }),
  watch: {
    pizzaBase(value) {
      this.$emit("onBaseSizeSelected", value);
    }
  }
});
</script>

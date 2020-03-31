<template>
  <div class="d-block my-4">
    <legend class="v-label mb-1">
      Add <strong class="amber--text">Toppings</strong>
      <small class="pl-1">( Upto 5 free choices )</small>
    </legend>
    <v-checkbox
      class="mt-1"
      hide-details
      v-model="pizzaToppingsSelected"
      v-for="(pizzaTopping, index) in PizzaToppins"
      :key="index"
      :value="pizzaTopping.getName()"
    >
      <template v-slot:label>
        <div class="d-block my-0" style="width:100%">
          <span>
            {{ pizzaTopping.getName() }}
          </span>
          <strong class="amber--text text--accent-3 float-right pr-7">
            ${{ pizzaTopping.getPrice().toFixed(2) }}
          </strong>
        </div>
      </template>
    </v-checkbox>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as __ from "../../models/pizza-maker/PizzaToppings";
import PizzaTopping from "../../models/pizza-maker/PizzaTopping";
import PizzaBase from "../../models/pizza-maker/PizzaBase";

export default Vue.extend({
  name: "PizzaBaseSize",
  props: {
    pizza: {
      type: PizzaBase
    }
  },
  data: () => ({
    pizzaToppingsSelected: []
  }),
  watch: {
    pizzaToppingsSelected(value) {
      this.$emit("onToppingsSelected", value);
    }
  },
  computed: {
    PizzaToppins(): PizzaTopping[] {
      return [
        new __.Avocado(this.$props.pizza),
        new __.Anchovies(this.$props.pizza),
        new __.Bacon(this.$props.pizza),
        new __.Basil(this.$props.pizza),
        new __.BuffaloMozzarella(this.$props.pizza),
        new __.Coleslaw(this.$props.pizza),
        new __.Ham(this.$props.pizza),
        new __.ItalianSausage(this.$props.pizza),
        new __.Mozzarella(this.$props.pizza),
        new __.Mushrooms(this.$props.pizza),
        new __.MasalaPaneer(this.$props.pizza),
        new __.Olives(this.$props.pizza),
        new __.Pepperoni(this.$props.pizza),
        new __.PulledPork(this.$props.pizza),
        new __.Pineapple(this.$props.pizza)
      ];
    }
  }
});
</script>

<template>
  <v-container>
    <v-row class>
      <v-col cols="12">
        <v-card
          :loading="loading"
          class="mx-auto my-12 overflow-y-auto"
          max-width="410"
          max-height="700"
        >
          <v-img
            height="180"
            src="https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,d_au:cuisines:pizza-8.jpg,f_auto,q_auto,w_500/v1/au/restaurants/1667488.jpg"
          />
          <v-card-title id="top">Geek Pizza!</v-card-title>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="light-blue"
                dense
                half-increments
                readonly
                size="14"
              />
              <div class="grey--text ml-4">4.5 (413)</div>
            </v-row>
            <div class="my-4 subtitle-1">$ • Pizza • Italian</div>
            <div>
              The term pizza was first recorded in the 10th century in a Latin
              manuscript from the Southern Italian town of Gaeta in Lazio, on
              the border with Campania.
            </div>
          </v-card-text>
          <v-divider class="mx-4" />
          <v-card-title class="d-block">
            <p class="text-center mb-0 headline">Make your Pizza</p>
          </v-card-title>
          <v-divider class="mx-4" />
          <v-card-text>
            <pizza-base-size @onBaseSizeSelected="handlePizzaBaseSelected" />
            <v-divider class="mx-4" />
            <pizza-toppings
              :pizza="pizza"
              @onToppingsSelected="handleToppingsSelected"
            />
            <v-divider class="mx-4" />
            <v-overlay
              :absolute="false"
              :value="overlay"
              style="margin-left:256px"
            >
              <v-card class="mx-auto d-flex" color="white" width="400">
                <v-card-text class="blue-grey--text">
                  <div>
                    Totoal Price:
                    <h2 class="d-inline px-3 mb-n3">
                      $<span>{{ TotalPrice.toFixed(2) }}</span>
                    </h2>
                  </div>
                </v-card-text>
                <v-card-actions class="float-right">
                  <v-btn
                    text
                    color="blue lighten-1"
                    @click="handleOverlay"
                    v-text="'Confirm'"
                  />
                </v-card-actions>
              </v-card>
            </v-overlay>
          </v-card-text>
          <v-card-actions class="float-right mx-3 mb-2">
            <v-btn
              color="deep-purple lighten-2"
              text
              @click="handleOverlay"
              v-text="'Checkout'"
            />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import PizzaBaseSize from "./PizzaBaseSize.vue";
import PizzaToppings from "./PizzaToppings.vue";

import { SmallPizzaBase } from "../../models/pizza-maker/PlainPizzaBase";
import * as __ from "../../models/pizza-maker/PizzaToppings";
import PizzaBase from "../../models/pizza-maker/PizzaBase";
import PizzaTopping from "../../models/pizza-maker/PizzaTopping";

export default Vue.extend({
  name: "OrderMenu",
  components: {
    PizzaBaseSize,
    PizzaToppings
  },
  data: () => ({
    loading: false,
    overlay: false,
    totalPrice: 0.0,
    pizza: new SmallPizzaBase(),
    pizzaToppings: []
  }),
  methods: {
    handleOverlay(): void {
      this.overlay = !this.overlay;
      this.totalPrice = this.findOutTotalCost();
    },
    handlePizzaBaseSelected(pizzaBase: PizzaBase): void {
      this.pizza = pizzaBase;
    },
    handleToppingsSelected(toppings: string[]): void {
      this.pizzaToppings = toppings;
    },
    findOutTotalCost(): number {
      let topping: PizzaTopping;
      if (this.pizzaToppings.length === 0) {
        return (this.pizza as PizzaBase).getCost();
      } else {
        this.pizzaToppings.forEach((element, index) => {
          const toppingName = (element as string).replace(/\s/g, "");
          if (index === 0) {
            topping = new __[toppingName](this.pizza);
          } else {
            topping = new __[toppingName](topping);
          }
        });
        return (topping as PizzaTopping).getCost();
      }
    }
  },
  computed: {
    TotalPrice() {
      return this.totalPrice;
    }
  }
});
</script>

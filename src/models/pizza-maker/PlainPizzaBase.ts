import PizzaBase from "./PizzaBase";

export class SmallPizzaBase extends PizzaBase {
  constructor() {
    super("Small", 12.00);
  }
}

export class MediumPizzaBase extends PizzaBase {
  constructor() {
    super("Medium", 17.00);
  }
}

export class LargePizzaBase extends PizzaBase {
  constructor() {
    super("Large", 20.50);
  }
}

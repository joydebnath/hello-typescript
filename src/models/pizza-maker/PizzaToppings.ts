import PizzaTopping from "./PizzaTopping";
import PizzaBase from "./PizzaBase";

export class Anchovies extends PizzaTopping {
  private price = 1.0;
  private name = "Anchovies";
  constructor(pizza: PizzaBase) {
    super(pizza);
  }

  public getDescription() {
    return this.pizzaBase.getDescription() + ", " + this.name;
  }

  public getName() {
    return this.name;
  }

  public getPrice() {
    return this.price;
  }

  public getCost() {
    return this.pizzaBase.getCost() + this.price;
  }
}

export class Avocado extends PizzaTopping {
  private price = 3.0;
  private name = "Avocado";
  constructor(pizza: PizzaBase) {
    super(pizza);
  }

  public getDescription() {
    return this.pizzaBase.getDescription() + ", " + this.name;
  }

  public getName() {
    return this.name;
  }

  public getPrice() {
    return this.price;
  }

  public getCost() {
    return this.pizzaBase.getCost() + this.price;
  }
}

export class Bacon extends PizzaTopping {
  private price = 2.0;
  private name = "Bacon";
  constructor(pizza: PizzaBase) {
    super(pizza);
  }

  public getDescription() {
    return this.pizzaBase.getDescription() + ", " + this.name;
  }

  public getName() {
    return this.name;
  }

  public getPrice() {
    return this.price;
  }

  public getCost() {
    return this.pizzaBase.getCost() + this.price;
  }
}

export class Basil extends PizzaTopping {
  private price = 0.0;
  private name = "Basil";
  constructor(pizza: PizzaBase) {
    super(pizza);
  }

  public getDescription() {
    return this.pizzaBase.getDescription() + ", " + this.name;
  }

  public getName() {
    return this.name;
  }

  public getPrice() {
    return this.price;
  }

  public getCost() {
    return this.pizzaBase.getCost() + this.price;
  }
}

export class BuffaloMozzarella extends PizzaTopping {
  private price = 3.0;
  private name = "Buffalo Mozzarella";
  constructor(pizza: PizzaBase) {
    super(pizza);
  }

  public getDescription() {
    return this.pizzaBase.getDescription() + ", " + this.name;
  }

  public getName() {
    return this.name;
  }

  public getPrice() {
    return this.price;
  }

  public getCost() {
    return this.pizzaBase.getCost() + this.price;
  }
}

export class Coleslaw extends PizzaTopping {
  private price = 1.0;
  private name = "Coleslaw";
  constructor(pizza: PizzaBase) {
    super(pizza);
  }

  public getDescription() {
    return this.pizzaBase.getDescription() + ", " + this.name;
  }

  public getName() {
    return this.name;
  }

  public getPrice() {
    return this.price;
  }

  public getCost() {
    return this.pizzaBase.getCost() + this.price;
  }
}

export class PeriPeri extends PizzaTopping {
  private price = 1.5;
  private name = "Peri Peri";
  constructor(pizza: PizzaBase) {
    super(pizza);
  }

  public getDescription() {
    return this.pizzaBase.getDescription() + ", " + this.name;
  }

  public getName() {
    return this.name;
  }

  public getPrice() {
    return this.price;
  }

  public getCost() {
    return this.pizzaBase.getCost() + this.price;
  }
}

export class ItalianSausage extends PizzaTopping {
  private price = 1.5;
  private name = "Italian Sausage";
  constructor(pizza: PizzaBase) {
    super(pizza);
  }

  public getDescription() {
    return this.pizzaBase.getDescription() + ", " + this.name;
  }

  public getName() {
    return this.name;
  }

  public getPrice() {
    return this.price;
  }

  public getCost() {
    return this.pizzaBase.getCost() + this.price;
  }
}

export class Mushrooms extends PizzaTopping {
  private price = 1.5;
  private name = "Mushrooms";
  constructor(pizza: PizzaBase) {
    super(pizza);
  }

  public getDescription() {
    return this.pizzaBase.getDescription() + ", " + this.name;
  }

  public getName() {
    return this.name;
  }

  public getPrice() {
    return this.price;
  }

  public getCost() {
    return this.pizzaBase.getCost() + this.price;
  }
}

export class MasalaPaneer extends PizzaTopping {
  private price = 3.0;
  private name = "Masala Paneer";
  constructor(pizza: PizzaBase) {
    super(pizza);
  }

  public getDescription() {
    return this.pizzaBase.getDescription() + ", " + this.name;
  }

  public getName() {
    return this.name;
  }

  public getPrice() {
    return this.price;
  }

  public getCost() {
    return this.pizzaBase.getCost() + this.price;
  }
}

export class Olives extends PizzaTopping {
  private price = 2.0;
  private name = "Olives";
  constructor(pizza: PizzaBase) {
    super(pizza);
  }

  public getDescription() {
    return this.pizzaBase.getDescription() + ", " + this.name;
  }

  public getName() {
    return this.name;
  }

  public getPrice() {
    return this.price;
  }

  public getCost() {
    return this.pizzaBase.getCost() + this.price;
  }
}

export class Pepperoni extends PizzaTopping {
  private price = 2.0;
  private name = "Pepperoni";
  constructor(pizza: PizzaBase) {
    super(pizza);
  }

  public getDescription() {
    return this.pizzaBase.getDescription() + ", " + this.name;
  }

  public getName() {
    return this.name;
  }

  public getPrice() {
    return this.price;
  }

  public getCost() {
    return this.pizzaBase.getCost() + this.price;
  }
}

export class PulledPork extends PizzaTopping {
  private price = 3.0;
  private name = "PulledPork";
  constructor(pizza: PizzaBase) {
    super(pizza);
  }

  public getDescription() {
    return this.pizzaBase.getDescription() + ", " + this.name;
  }

  public getName() {
    return this.name;
  }

  public getPrice() {
    return this.price;
  }

  public getCost() {
    return this.pizzaBase.getCost() + this.price;
  }
}

export class Ham extends PizzaTopping {
  private price = 1.5;
  private name = "Ham";
  constructor(pizza: PizzaBase) {
    super(pizza);
  }

  public getDescription() {
    return this.pizzaBase.getDescription() + ", " + this.name;
  }

  public getName() {
    return this.name;
  }

  public getPrice() {
    return this.price;
  }

  public getCost() {
    return this.pizzaBase.getCost() + this.price;
  }
}

export class Mozzarella extends PizzaTopping {
  private price = 1.5;
  private name = "Mozzarella";
  constructor(pizza: PizzaBase) {
    super(pizza);
  }

  public getDescription() {
    return this.pizzaBase.getDescription() + ", " + this.name;
  }

  public getName() {
    return this.name;
  }

  public getPrice() {
    return this.price;
  }

  public getCost() {
    return this.pizzaBase.getCost() + this.price;
  }
}

export class Pineapple extends PizzaTopping {
  private price = 1.5;
  private name = "Pineapple";
  constructor(pizza: PizzaBase) {
    super(pizza);
  }

  public getDescription() {
    return this.pizzaBase.getDescription() + ", " + this.name;
  }

  public getName() {
    return this.name;
  }

  public getPrice() {
    return this.price;
  }

  public getCost() {
    return this.pizzaBase.getCost() + this.price;
  }
}

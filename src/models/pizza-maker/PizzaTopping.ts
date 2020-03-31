import IPizza from "./IPizza";
import PizzaBase from "./PizzaBase";

export default abstract class PizzaTopping implements IPizza {
  protected pizzaBase: IPizza;

  constructor(pizzaBase: IPizza) {
    this.pizzaBase = pizzaBase;
  }

  public setDescription(description: string): void {
    this.pizzaBase.setDescription(description);
  }
 
  public setPizzaBase(pizzaBase: PizzaBase): void {
    this.pizzaBase = pizzaBase;
  }

  public getDescription(): string {
    return this.pizzaBase.getDescription();
  }

  public getCost(): number {
    return this.pizzaBase.getCost();
  }
}

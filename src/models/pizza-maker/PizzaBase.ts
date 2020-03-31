import IPizza from "./IPizza";

export default class PizzaBase implements IPizza {
  private description: string;
  private price: number;

  constructor(description: string, price: number) {
    this.description = description;
    this.price = price;
  }
  public setDescription(description: string): void {
    this.description = description;
  }
  public setCost(price: number): void {
    this.price = price;
  }
  public getDescription(): string {
    return this.description;
  }
  public getCost(): number {
    return this.price;
  }
}

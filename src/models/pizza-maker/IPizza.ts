export default interface IPizza {
  setDescription(description: string): void;
  getCost(): number;
  getDescription(): string;
}

import Buyable from "../domain/Buyable";

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  sumPrice(): number {
    let sum = 0;
    this.items.forEach((element) => {
      sum += element.price;
    });
    return sum;
  }

  sumPriceWithDiscount(discount: number): number {
    let sum = 0;
    this.items.forEach((element) => {
      sum += element.price;
    });
    return (sum * discount) / 100;
  }

  deleteObject(id: number): void {
    const deletedElement = this.items.findIndex((elem) => elem.id === id);
    this._items.splice(deletedElement, 1);
  }
}

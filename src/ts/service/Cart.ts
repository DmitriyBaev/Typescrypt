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
      const sumPrice = this.items.reduce((sum, elem) => sum + elem.price, 0);
      return sumPrice;
  }

  sumPriceWithDiscount(discount: number): number {
    return this.sumPrice() * (1 - (1 / discount));
  }

  deleteObject(id: number): void {
    const deletedElement = this.items.findIndex((elem) => elem.id === id);
    this._items.splice(deletedElement, 1);
  }
}

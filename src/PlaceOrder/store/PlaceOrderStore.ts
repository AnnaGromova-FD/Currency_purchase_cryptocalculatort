import {observable, computed, action, makeObservable} from 'mobx';

import {OrderSide} from '../model';

export class PlaceOrderStore {
  @observable activeOrderSide: OrderSide = 'buy';
  @observable price: number = 1000;
  @observable amount: number = 1;
  @observable profit: number = 2;
  @observable targetAmount: number = 100;

  constructor() {
    makeObservable(this);
  }

  @computed get total(): number {
    return this.price * this.amount;
  }

  @computed get projectedProfit(): number {
    return (this.targetAmount / 100) * (this.targetPrice - this.price);
  }

  @computed get targetPrice(): number {
    return this.price + this.price * (this.profit / 100);
  }

  @action.bound
  public setTargetPrice(price: number) {
    this.profit = this.price > 0 ? (price * 100) / this.price - 100 : 0;
  }

  @action.bound
  public setOrderSide(side: OrderSide) {
    this.activeOrderSide = side;
  }

  @action.bound
  public setPrice(price: number) {
    this.price = price;
  }

  @action.bound
  public setAmount(amount: number) {
    this.amount = amount;
  }

  @action.bound
  public setTotal(total: number) {
    this.amount = this.price > 0 ? total / this.price : 0;
  }

  @action.bound
  public setProfit(profit: number) {
    this.profit = profit;
  }

  @action.bound
  public setTargetAmount(value = 20) {
    value ? (this.targetAmount = value) : (this.targetAmount = 20);
  }

  @action.bound
  public resetProfit() {
    this.profit = 2;
    this.targetAmount = 100;
  }
}

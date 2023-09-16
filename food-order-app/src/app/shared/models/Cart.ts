import {CartItem} from "./Cartitem"

export class Cart{
    items:CartItem[] = [];

    constructor(){}

    get totalPrice() : number{
        let totalPrice = 0;
        this.items.forEach(items =>{
            totalPrice += items.price;
        });

        return totalPrice;
    }
}
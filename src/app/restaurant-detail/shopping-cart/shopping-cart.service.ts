import { Injectable } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';

@Injectable({ providedIn: 'root' })
export class ShoppingCartService
{
    public items: CartItem[] = [];

    public clear()
    {
        this.items = []
    }

    public addItem(item: MenuItem)
    {
        let foundItem = this.items.find((cartItem: CartItem) => cartItem.menuItem.id === item.id);

        if (foundItem)
        {
            foundItem.quantity++;
        }
        else 
        {
            this.items.push(new CartItem(item));
        }
    }

    public removeItem(item: CartItem)
    {
        this.items.splice(this.items.indexOf(item), 1);
    }

    public total(): number
    {
        return this.items.map(item => item.value()).reduce((total, curr) => total + curr, 0);
    }
}
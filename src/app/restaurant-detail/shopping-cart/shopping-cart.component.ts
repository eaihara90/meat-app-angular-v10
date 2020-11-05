import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item.model';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
    selector: 'mt-shopping-cart',
    templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit
{

    public totalValue: number;

    constructor(private shoppingCartService: ShoppingCartService) { }

    ngOnInit(): void
    {
        this.totalValue = this.total();
    }

    public items(): CartItem[]
    {
        return this.shoppingCartService.items;
    }

    public total(): number
    {
        return this.shoppingCartService.total();
    }

    public clear(): void
    {
        this.shoppingCartService.clear();
    }

    public removeItem(item): void
    {
        this.shoppingCartService.removeItem(item);
    }

    public addItem(item): void
    {
        this.shoppingCartService.addItem(item);
    }
}

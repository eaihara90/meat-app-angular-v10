import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Restaurant } from './restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component(
{
    selector: 'mt-restaurants',
    templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit, OnDestroy
{
    public restaurants: Restaurant[] = [];
    private subscription = new Subscription();

    constructor(private _restaurantService: RestaurantsService, private _title: Title) { }

    ngOnInit(): void
    {
        this.subscription.add(this._restaurantService.restaurants().subscribe((restaurants: Restaurant[]) =>
        {
            this.restaurants = restaurants;
        }));

        this._title.setTitle('Meat | Restaurants');
    }

    ngOnDestroy(): void
    {
        this.subscription.unsubscribe();
    }
}

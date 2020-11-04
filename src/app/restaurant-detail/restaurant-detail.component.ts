import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../restaurants/restaurant.model';
import { RestaurantsService } from '../restaurants/restaurants.service';

@Component({
    selector: 'mt-restaurant-detail',
    templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

    public restaurant: Restaurant;

    constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute) { }

    ngOnInit(): void
    {
        const id = this.route.snapshot.params['id'];
        
        this.restaurantService.restaurantById(id).subscribe((restaurant: Restaurant) => this.restaurant = restaurant);
    }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RestaurantsService } from 'src/app/restaurants/restaurants.service';

@Component({
    selector: 'mt-review',
    templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit
{
    public reviews: Observable<any>

    constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

    ngOnInit(): void
    {
        const id = this.route.parent.snapshot.params['id'];

        this.reviews = this.restaurantsService.reviewsOfRestaurant(id);
    }

}

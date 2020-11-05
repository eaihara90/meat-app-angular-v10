import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { ErrorHandler } from '../app.error-handler';

import { MEAT_API } from '../app.api';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';


@Injectable({ providedIn: 'root' })
export class RestaurantsService
{
    constructor(private http: HttpClient) { }

    public restaurants(): Observable<Restaurant[]>
    {
        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`).pipe(catchError(err => ErrorHandler.handleError(err)));
    }

    public restaurantById(id: string): Observable<Restaurant>
    {
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`).pipe(catchError(err => ErrorHandler.handleError(err)));
    }

    public reviewsOfRestaurant(id: string): Observable<any>
    {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`).pipe(catchError(err => ErrorHandler.handleError(err)));
    }

    public menuOfRestaurant(id: string): Observable<MenuItem[]>
    {
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`).pipe(catchError(err => ErrorHandler.handleError(err)));
    }
}
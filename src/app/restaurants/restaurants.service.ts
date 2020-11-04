import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { ErrorHandler } from '../app.error-handler';

import { MEAT_API } from '../app.api';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


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
}
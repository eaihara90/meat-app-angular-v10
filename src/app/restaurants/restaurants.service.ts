import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.model';

import { MEAT_API } from '../app.api';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class RestaurantsService
{
    constructor(private http: HttpClient) { }

    public restaurants(): Observable<Restaurant[]>
    {
        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`).pipe(catchError(err => throwError(new Error(err))));
    }
}
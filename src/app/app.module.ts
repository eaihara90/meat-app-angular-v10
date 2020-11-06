import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * @import LOCALE_ID, localePt, registerLocaleData
 * used to pipe all currency data to PT-BR
*/
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

import { AppRoutesModule } from './app.routes';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AboutComponent } from './about/about.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewComponent } from './restaurant-detail/review/review.component';
import { OrderComponent } from './order/order.component';

registerLocaleData(localePt);

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        RestaurantsComponent,
        AboutComponent,
        RestaurantComponent,
        RestaurantDetailComponent,
        MenuComponent,
        ShoppingCartComponent,
        MenuItemComponent,
        ReviewComponent,
        OrderComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule,
        AppRoutesModule
    ],
    providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }],
    bootstrap: [AppComponent]
})
export class AppModule { }

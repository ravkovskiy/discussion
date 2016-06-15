import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {HomeComponent} from '../home/HomeComponent';
import {AboutComponent} from '../about/AboutComponent';
import {HeaderComponent} from '../header/header.component';
import {PriceComponent} from '../price/price.component';
import {ActionComponent} from '../action/action.component';
import {PortfolioComponent} from '../portfolio/portfolio.component';
import {ReviewsComponent} from '../reviews/reviews.component';
import {ContactsComponent} from '../contacts/contacts.component';
import {InputUserComponent} from '../inputUser/inputUser.component';
import {FooterComponent} from '../footer/footer.component';
import {MainComponent} from '../main-page/main.component';

@RouteConfig([
    {path: '/main', name: 'Main', component: MainComponent, useAsDefault: true},
    {path: '/price', name: 'Price', component: PriceComponent},
    {path: '/action', name: 'Action', component: ActionComponent},
    {path: '/portfolio', name: 'Portfolio', component: PortfolioComponent},
    {path: '/reviews', name: 'Reviews', component: ReviewsComponent},
    {path: '/contacts', name: 'Contacts', component: ContactsComponent},
])

@Component({
    selector: 'my-app',
    templateUrl: 'app/components/header/header.template.html',
    directives: [MainComponent, HeaderComponent, PriceComponent, ActionComponent, PortfolioComponent, ReviewsComponent, ContactsComponent, InputUserComponent, FooterComponent, ROUTER_DIRECTIVES],
})
export class AppComponent { 
    
    constructor(){
        console.log("We are up and running!");
    }
    
}
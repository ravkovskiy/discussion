import {Component} from "angular2/core";
import {PriceService} from "../price/price.service";
@Component({
    selector: 'price_component',
    templateUrl: "app/components/price/price.template.html",
})
export class PriceComponent{
    constructor(public priceService:PriceService) {
           
    }
}
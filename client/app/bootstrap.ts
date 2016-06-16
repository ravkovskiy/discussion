import {bootstrap}    from 'angular2/platform/browser'
import {provide}    from 'angular2/core'
import {CORE_DIRECTIVES} from 'angular2/common'
import {ROUTER_BINDINGS, ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy} from 'angular2/router'

import {PriceService} from "./components/price/price.service";
import {PortfolioService} from "./components/portfolio/portfolio.service";

import {AppComponent} from './components/app/AppComponent'
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    CORE_DIRECTIVES,
    PriceService,
    PortfolioService,
    provide(LocationStrategy, {useClass: PathLocationStrategy})
]);


System.register(['angular2/core', 'angular2/router', '../home/HomeComponent', '../about/AboutComponent'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, HomeComponent_1, AboutComponent_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (HomeComponent_1_1) {
                HomeComponent_1 = HomeComponent_1_1;
            },
            function (AboutComponent_1_1) {
                AboutComponent_1 = AboutComponent_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    console.log("We are up and running!");
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', component: HomeComponent_1.HomeComponent, as: 'Home' },
                        { path: '/about', component: AboutComponent_1.AboutComponent, as: 'About' },
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: '<router-outlet></router-outlet>',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9BcHBDb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFXSUE7b0JBQ0lDLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHdCQUF3QkEsQ0FBQ0EsQ0FBQ0E7Z0JBQzFDQSxDQUFDQTtnQkFiTEQ7b0JBQUNBLG9CQUFXQSxDQUFDQTt3QkFDVEEsRUFBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsRUFBRUEsU0FBU0EsRUFBRUEsNkJBQWFBLEVBQUVBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUNBO3dCQUNqREEsRUFBQ0EsSUFBSUEsRUFBRUEsUUFBUUEsRUFBRUEsU0FBU0EsRUFBRUEsK0JBQWNBLEVBQUVBLEVBQUVBLEVBQUVBLE9BQU9BLEVBQUNBO3FCQUMzREEsQ0FBQ0E7b0JBQ0RBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsUUFBUUE7d0JBQ2xCQSxRQUFRQSxFQUFFQSxpQ0FBaUNBO3dCQUMzQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxDQUFDQTtxQkFDbENBLENBQUNBOztpQ0FPREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQWZBLEFBZUNBLElBQUE7WUFmRCx1Q0FlQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwcC9BcHBDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlciwgUm91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInXG5cbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi4vaG9tZS9Ib21lQ29tcG9uZW50J1xuaW1wb3J0IHtBYm91dENvbXBvbmVudH0gZnJvbSAnLi4vYWJvdXQvQWJvdXRDb21wb25lbnQnXG5cbkBSb3V0ZUNvbmZpZyhbXG4gICAge3BhdGg6ICcvJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCBhczogJ0hvbWUnfSxcbiAgICB7cGF0aDogJy9hYm91dCcsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnQsIGFzOiAnQWJvdXQnfSxcbl0pXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6ICc8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+JyxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IFxuICAgIFxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2UgYXJlIHVwIGFuZCBydW5uaW5nIVwiKTtcbiAgICB9XG4gICAgXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SearchRecipeComponent = /** @class */ (function () {
    function SearchRecipeComponent(_http) {
        this._http = _http;
        this.venueList = [];
        this.recipeList = [];
    }
    SearchRecipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.navigator.geolocation.getCurrentPosition(function (position) {
            _this.geolocationPosition = position;
            _this.currentLat = position.coords.latitude;
            _this.currentLong = position.coords.longitude;
        });
    };
    SearchRecipeComponent.prototype.getVenues = function () {
        var _this = this;
        this.recipeValue = this.recipes.nativeElement.value;
        this.placeValue = this.places.nativeElement.value;
        if (this.placeValue != null && this.placeValue != "") {
            this._http.get("https://api.foursquare.com/v2/venues/search" +
                "?client_id=3PPNMTIKJJNDVYPFOBGSHHV2PR5A2P05PYHXDN2MKSKTTBSX" +
                "&client_secret=0QPHT0F5RS043F4TB4KKPQSHKSAXKE5ZNOYGB5KL2MBDYAG4" +
                "&v=20160215&limit=5" +
                "&near=" + this.placeValue +
                "&query=" + this.recipeValue)
                .subscribe(function (data) {
                for (var i = 0; i < data.response.venues.length; i++) {
                    _this.venueList[i] = {
                        "name": data.response.venues[i].name,
                        "id": data.response.venues[i].id,
                        "location": data.response.venues[i].location
                    };
                    console.log(_this.venueList[i]);
                }
            });
        }
    };
    __decorate([
        core_1.ViewChild('recipe')
    ], SearchRecipeComponent.prototype, "recipes", void 0);
    __decorate([
        core_1.ViewChild('place')
    ], SearchRecipeComponent.prototype, "places", void 0);
    SearchRecipeComponent = __decorate([
        core_1.Component({
            selector: 'app-search-recipe',
            templateUrl: './search-recipe.component.html',
            styleUrls: ['./search-recipe.component.css']
        })
    ], SearchRecipeComponent);
    return SearchRecipeComponent;
}());
exports.SearchRecipeComponent = SearchRecipeComponent;

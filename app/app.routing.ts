import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ReservationComponent } from './reservation/reservation.component';
import { UserAuthComponent } from "./userauth/userauth.component"; 

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "menu", component: MenuComponent },
    { path: "favorites", component: FavoritesComponent },
    { path: 'dishdetail/:id', component: DishdetailComponent },
    { path: "auth", component: UserAuthComponent }, 
    { path: "reservation", component: ReservationComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
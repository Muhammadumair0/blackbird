import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { CoreComponent } from "./core/core.component";
import { AboutModule } from "./components/about/about.module";

export const routes: Routes = [
    {
        path: '',
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "about",
        loadChildren: "./components/about/about.module#AboutModule"
    },
    {
        path: 'home',
        component: CoreComponent
    }
];
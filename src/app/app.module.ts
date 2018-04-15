import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavTopModule } from "./shared/nav-top/nav-top.module";
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { CoreModule } from "./core-module/core.module";
import { AboutModule } from "./components/about/about.module";
import { CoreComponent } from "./core/core.component";
@NgModule({
  imports: [
    BrowserModule,
    NavTopModule,
    CoreModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent, CoreComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

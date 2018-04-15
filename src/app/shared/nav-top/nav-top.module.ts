import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavTopComponent } from "./nav-top.component";
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavTopComponent],
  exports: [NavTopComponent]
})
export class NavTopModule { }

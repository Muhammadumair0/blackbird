import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageVideoComponent } from "./main-page-video.component";
@NgModule({
  imports: [CommonModule],
  exports: [MainPageVideoComponent, CommonModule],
  declarations: [MainPageVideoComponent]
})
export class MainPageVideoModule { }

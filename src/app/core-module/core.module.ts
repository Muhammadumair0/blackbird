import { NgModule } from '@angular/core';
import { MainPageVideoModule } from "./main-page-video/main-page-video.module";
import { SecondSectionComponent } from './second-section/second-section.component';
import { SecondSectionModule } from "./second-section/second-section.module";
@NgModule({
  imports: [
    MainPageVideoModule,
    SecondSectionModule
  ],
  exports: [
    MainPageVideoModule,
    SecondSectionModule
  ],
  declarations: []
})
export class CoreModule { }

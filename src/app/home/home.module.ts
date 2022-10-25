import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    HomePageComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent,
    CardComponent
  ]
})
export class HomeModule { }

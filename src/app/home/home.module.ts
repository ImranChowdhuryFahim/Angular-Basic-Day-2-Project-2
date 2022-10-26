import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    HomePageComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    HomePageComponent,
    CardComponent
  ]
})
export class HomeModule { }

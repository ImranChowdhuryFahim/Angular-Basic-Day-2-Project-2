import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { LoginPageComponent } from './login-page/login-page.component';



@NgModule({
  declarations: [
    ButtonComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginPageComponent,
    ButtonComponent
  ]
})
export class LoginModule { }

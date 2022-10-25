import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    LoginFormComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginFormComponent,
    ButtonComponent
  ]
})
export class LoginModule { }

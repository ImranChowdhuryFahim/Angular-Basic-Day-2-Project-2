import { Component, OnInit } from '@angular/core';
import { UserMockService } from 'src/app/services/user-mock.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  name:string = ''
  password:string = ''
  message:string = ''


  constructor(private service:UserMockService) { }

  ngOnInit(): void {
  }

  welcomeUser()
  {
    this.message = 'Welcome '+ this.name
  }

}

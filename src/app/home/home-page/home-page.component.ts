import { Component, OnInit } from '@angular/core';
import { UserMockService } from 'src/app/services/user-mock.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  users:string[] = []

  constructor(private service:UserMockService) {
    this.users = service.getUsers()
   }

  ngOnInit(): void {
  }

}

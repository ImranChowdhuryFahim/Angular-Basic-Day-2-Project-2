import { Component, OnInit } from '@angular/core';
import { FrinedService } from 'src/app/services/frined.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  users:string[] = []

  constructor(private service:FrinedService) {
    this.users = this.service.getFreinds()
   }

  ngOnInit(): void {
  }

}

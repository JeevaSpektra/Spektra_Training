import { Home } from 'src/app/Models/details.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  detail: Home[] = [];


  constructor(private myservices: AuthService) { }

  ngOnInit(): any {
    console.log(this.detail);
    this.myservices.getALLDetails()
    .subscribe({
      next: (Home) =>{
        this.detail=Home;
        console.table(this.detail);
      },
      error: (response) => {
        console.log(response);
      }
    })

  }
}

import { Component, OnInit } from '@angular/core';

import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-checkbalance',
  templateUrl: './checkbalance.component.html',
  styleUrls: ['./checkbalance.component.css']
})
export class CheckbalanceComponent implements OnInit {
  cardPin:number=0;
  currentDate = new Date();
  currBal: number = 0;
  accountNumber: number = 0;

  addAmount: number = 0;
  valid : string  = '';
  balanceInfo: any = {
    currBal: 0,
    name: ''
  }
  constructor(private auth:AuthService) { }

  ngOnInit(): void {

  }
    submitData(){
    this.auth.checkBalance(this.accountNumber, this.cardPin)
    .subscribe({
      next: (data) => {
        this.balanceInfo.currBal = data.balance;
        this.balanceInfo.name = data.name;
        this.valid = 'valid'
      },
      error: (response) => {
        console.log(response);
        this.valid = 'invalid';
      }
    })
  }



  }



//   checkBalance : object =[];

//   Balance()
//   {
//     this.auth.checkBalance(this.accountNumber,this.cardPin)
//     .subscribe({
//       next: (response)=>{
//         console.log(response);
//         debugger
//        this.checkBalance=response;
//       },
//       error:(response)=>{
//         console.log(response);
//         return 'invalid';
//       }
//     });
//   }
//   View()
//   {
//     this.hello=true;
//     console.log(this.declare);
//   }



//   CheckOne()
//   {
//     if(this.hello==false){
//       this.Balance();
//     }
//     else{
//       this.View();
//     }

//   }

// }



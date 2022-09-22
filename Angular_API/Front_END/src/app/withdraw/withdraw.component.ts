import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { WithDraw } from '../Models/details.model';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  // withdrawRequest : WithDraw={

  //   accountNumber:number0,
  //   cardPin:0,
  //   withdraw:0
  // };

//   accountNumber: number=0;
// cardPin:number=0;
// withdrawmoney:number=0;
//   constructor(private auth:AuthService) { }
currentDate = new Date();

  currBal: number = 0;
  accountNumber: number = 0;
  cardPin: number = 0;
  subAmount: number = 0;
  valid : string  = '';
  balanceInfo: any = {
    currBal: 0,
    name: ''
  }

  constructor(private auth:AuthService) { }

  ngOnInit(): void {

    // this.auth.canAccess();
  }
  // check(){
  //   console.table(this.withdrawRequest)
  // }



  MyWithdraw(){
    this.auth.setWithdraw(this.accountNumber, this.cardPin, this.subAmount)
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





//   MyWithdraw()
//   {
//     this.auth.setWithdraw(this.accountNumber,this.cardPin,this.withdrawmoney)
//     .subscribe({
//       next: (data)=>{

//       },
//       error:(response)=>{
//         console.log(response);
//         return 'invalid';
//       }
//     });
//   }

// }

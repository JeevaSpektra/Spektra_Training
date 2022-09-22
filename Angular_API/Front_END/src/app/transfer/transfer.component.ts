import { Component, OnInit } from '@angular/core';

import { AuthService } from '../_services/auth.service';
import { Transaction } from '../Models/transaction.model';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {


  // accountNumber: number=0;
  // accountNumberTwo:number=0;
  // cardPin:number=0;
  // withdrawmoney:number=0;
  currentDate = new Date();
  valid : string  = '';
  accountNumbertwo:number=0;
  accountNumberone:number= 0;
  pin: number =0;
  amountTransfer: number=0;
  balanceInfo: any = {
    currBal: 0,
    name: ''
  }
  sendMoneyRequest: Transaction = {
    transactionId : 0,
    accountNumber: 0,
    pin: 0,
    recipientAccountNumber: 0,

    amountTransfer: 0,
  };

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }





  // transferMoney(){
  //   this.auth.transferMoney(this.sendMoneyRequest).subscribe({
  //     next : (data) => {
  //       this.valid = 'valid'
  //     console.log(data);
  //   },
  //   error: (response)=> {
  //     console.log(response);
  //     this.valid = 'invalid';
  //   }
  //   })
  // }






  transferData(){
  this.auth.setTransfer(this.accountNumberone, this.pin,this.accountNumbertwo, this.amountTransfer)
  .subscribe({
    next: (data) => {
      this.balanceInfo.currBal = data.balance;
      this.balanceInfo.name = data.name;
      console.log( this.balanceInfo);
      this.valid = 'valid'
    },
    error: (response) => {
      console.log(response);
      this.valid = 'invalid';
    }
  })
 }
}

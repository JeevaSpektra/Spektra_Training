import { Deposit } from './../Models/details.model';
import { Component, OnInit } from '@angular/core';
import { Home } from '../Models/details.model';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  currentDate = new Date();

  currBal: number = 0;
  accountNumber: number = 0;
  cardPin: number = 0;
  addAmount: number = 0;
  valid : string  = '';
  balanceInfo: any = {
    currBal: 0,
    name: ''
  }

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  depositData(){
    this.auth.setDeposit(this.accountNumber, this.cardPin, this.addAmount)
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





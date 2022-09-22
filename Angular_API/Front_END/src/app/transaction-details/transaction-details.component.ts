import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

import { Transaction } from '../Models/transaction.model';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {

  transactionsAll: Transaction[] = []
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.getAllTransactions()
    .subscribe({
      next: (data) => {
        this.transactionsAll = data
      },
      error:(response) => {
        console.log(response)
      }
    })
  }

}


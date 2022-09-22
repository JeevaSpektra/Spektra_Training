import { Deposit } from './../Models/details.model';
import { Transaction } from '../Models/transaction.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HomeComponent } from '../home/home.component';
import { Home } from '../Models/details.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  baseApiUrl: string = environment.baseApiUrl;
  // depositUrl: string=environment.depositUrl;

  constructor(private router:Router,private http:HttpClient) { }

  getALLDetails(): Observable<Home[]> {

    return this.http.get<Home[]>(this.baseApiUrl);

  }
  putDeposite(): Observable<Deposit[]> {

    return this.http.get<Deposit[]>(this.baseApiUrl);
  }
  getDeposite():Observable<Deposit[]> {

    return this.http.get<Deposit[]>(this.baseApiUrl);
  }

  isAuthenticated():boolean{
    if (sessionStorage.getItem('token')!==null) {
        return true;
    }
    return true;
  }

  canAccess(){
    if (!this.isAuthenticated()) {


    }
  }
  checkBalance(accno: number, pin: number): Observable<any> {

    return this.http.get<any>(this.baseApiUrl + '/api/getBalance/' + accno + '?CardPIN=' + pin )

  }
  setWithdraw(accno: number, pin: number, Bal: number): Observable<any> {
    let obj = {pin,Bal}
    return this.http.put<any>(this.baseApiUrl + '/api/setWithdraw/' + accno + '?CardPIN=' + pin + '&WithdrawalMoney=' + Bal, obj)
  }
  setDeposit(accno: number, pin: number, Bal: number): Observable<any> {
    let obj = {pin,Bal}
    return this.http.put<any>(this.baseApiUrl + '/api/setDeposit/' + accno + '?CardPIN=' + pin + '&DepositeAmount=' + Bal, obj)


  }

  setTransfer(accno: number, pin: number,accnotwo: number, amountTransfer: number): Observable<any> {
    let obj = {pin,amountTransfer}
    return this.http.put<Transaction>(this.baseApiUrl + '/api/viewTransactions/'+accno
    + '?CardPIN='+pin+'&BenifiAccountNumber='+accnotwo+'&TransactionMoney='+
    amountTransfer,obj)
  }



  // transferMoney(sendMoneyRequest: Transaction): Observable<any> {
  //   sendMoneyRequest.transactionId = 0;


  //   return this.http.post<Transaction>(this.baseApiUrl + '/api/viewTransactions/'+sendMoneyRequest.accountNumber
  //   + '?CardPIN='+sendMoneyRequest.pin+'&BenifiAccountNumber='+sendMoneyRequest.recipientAccountNumber+'&TransactionMoney='+
  //   sendMoneyRequest.amountTransfer)
  // }

  getAllTransactions(): Observable<Transaction[]>{
    return this.http.get<Transaction[]>(this.baseApiUrl + '/api/getBalance/')
  }

  }













// addDeposit(depositRequest: Deposit):Observable<Deposit>{
//   depositRequest.accountNumber=0;
//   depositRequest.cardPin=0;
//   depositRequest.deposit=0;
//   return this.http.put<Deposit> (this.baseApiUrl,depositRequest);

//   // https://localhost:7286/api/setDeposit/1122334455667788?CardPIN=1122&DepositeAmount=

// }



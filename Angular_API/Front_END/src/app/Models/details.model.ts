
export interface Home{

id: string;
accountNumber : number;
  fullName : string;
  branchName : string;
  totalBalance : number;
  cardPin: number;

}

export interface Deposit{
  accountNumber : number;
  cardPin: number;
  deposit : number;
}

export interface  WithDraw{

  accountNumber:number,
  cardPin:number,
  withdraw:number
};

export interface check{
  name:string,
  balance:number

}


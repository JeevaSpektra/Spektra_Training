export interface Transaction {
  transactionId: number;
  accountNumber: number;
  pin: number;
  recipientAccountNumber: number;
  amountTransfer: number;
}

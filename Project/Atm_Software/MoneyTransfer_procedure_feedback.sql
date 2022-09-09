select * from AtmRecords

Create PROCEDURE BalanceWith (
    @AccountNumber1 varchar(50) = null,
    @AccountNumber2 varchar(50) = null,
    @amount money = null

) AS 
BEGIN
    SET NOCOUNT ON;
	
    UPDATE AtmRecords
        SET balance = COALESCE(balance, 0) - COALESCE(@amount, 0)
        WHERE userpin = @AccountNumber1;

    UPDATE AtmRecords
        SET balance = COALESCE(balance, 0) + COALESCE(@amount, 0)
        WHERE userpin = @AccountNumber2;
END;
GO
exec [dbo].[deposite] 1122334455667799,20000
exec BalanceWith 1122334455667799,1122335555667788,0
select * from AtmRecords

exec  [dbo].[MoneyTransfer] 1122334455667799,1122335555667788,0

ALTER Procedure MoneyTransfer
(@pin1 BIGINT,@pin2 BIGINT,@amount int)
as
Begin
DECLARE @MESSAGE_TEXT0 Varchar(500)
DECLARE @MESSAGE_TEXT100 Varchar(500)
DECLARE @MESSAGE_TEXT Varchar(500)
SET @MESSAGE_TEXT0= ' TRANSFER AMOUNT SHOULD NOT BE ZERO ' 
SET @MESSAGE_TEXT100= ' TRANSFER AMOUNT IS GREATER THAN YOUR ACCOUNT BALANCE. MINIMUM BALANCE SHOULD BE $100 PLEASE CHECK YOUR TRANSFER AMOUNT'
SET @MESSAGE_TEXT = 'YOUR AMOUNT IS EQUAL OR CLOSE TO YOUR BALANCE MINIMUM BALANCE. MINIMUM ACCOUNT BALANCE SHOULD BE $100' 
DECLARE @storeamount int  
DECLARE @STORE int
    SET @storeamount = (Select Balance from AtmRecords where userpin =@pin1 )
    SET @STORE=@storeamount-@amount
   IF(@amount != 0)
   BEGIN
     IF(ABS(@STORE)>=100)
	  BEGIN
       if( @storeamount >= RTRIM(@amount) AND @storeamount >= 100  )
	   BEGIN
	    UPDATE AtmRecords  SET balance = balance - RTRIM(@amount) WHERE userpin = RTRIM(@pin1);
	    UPDATE AtmRecords SET balance = balance+RTRIM(@amount) WHERE userpin = RTRIM(@pin2);
	   END
	   else
	   RAISERROR (@MESSAGE_TEXT100,16,1)
    END
	ELSE
	RAISERROR ( @MESSAGE_TEXT,16,1)
   END
   ELSE
   RAISERROR (@MESSAGE_TEXT0,16,1)
END
 SELECT Balance FROM  AtmRecords WHERE userpin=1122334455667799

 select * from AtmRecords where userpin=1122334455667799 OR userpin=1122335555667788
exec MoneyTransfer 1122334455667799, 1122335555667788,000
 select * from AtmRecords where userpin=1122334455667799 OR userpin=1122335555667788


UPDATE AtmRecords  SET balance = 10000 WHERE userpin =1122334455667799;
UPDATE AtmRecords  SET balance = 1000 WHERE userpin =1122335555667788 ;

Select ABS(sum(Balance-PhoneNo)) as PLEASE from AtmRecords





















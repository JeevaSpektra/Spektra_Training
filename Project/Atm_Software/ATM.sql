create table AtmRecords(userpin Bigint NOT NULL Primary Key,name varchar(50) NOT NULL,
Email Varchar(50) NOT NULL,IFSCCODE varchar(50) NOT NULL,BranchName char(50) NOT NULL,PhoneNo Bigint NOT NULL,Address Varchar(50) NOT NULL)
    
	121,nirmal,nirmal@gmail.com,1122,Guindy,6677889933,chennai-12

	Alter table ATMRecords ALTER column IFSCCODE Nvarchar(50)

--create table CheckBalance(userpin int NOT NULL Primary Key,name varchar(50) NOT NULL,
--Email Varchar(50) NOT NULL,IFSCCODE varchar(50) NOT NULL,BranchName Varchar(50) NOT NULL,Balance Bigint NOT NULL,Address Varchar(50) NOT NULL)

drop table AtmRecords
Select * from Atm

ALTER procedure UserAcctForm
(
@userpin BIGINT   ,
@name varchar(50) ,
@Email Varchar(50) ,
@IFSCCODE Nvarchar(50) ,
@BranchName Varchar(50) ,
@PhoneNo Bigint ,
@Address Varchar(50) ,
@Balance int
)
As 
Begin 
Insert into ATMRECORDS(userpin,name,Email,IFSCCODE,BranchName,PhoneNo,Address,Balance)
Values 
(@userpin,@name,@Email,@IFSCCODE,@BranchName,@PhoneNo,@Address,@Balance)
END
Select * from AtmRecords
update AtmRecords set userpin=123 where userpin=131
Alter table AtmRecords add Balance Int
update AtmRecords set Balance=25000 where userpin=1122334455667788

exec UserAcctForm  @userpin=1122334455667788,@name='nirmal',@Email='nirmal@gmail',@IFSCCODE=1122,@BranchName='Guindy',@PhoneNo=987454321,@Address='berallur street'



exec UserAcctForm

Alter table Atmrecords add  Balance int 

Select * from Balance

update Balance set userBalance=7500 where userpin=125
drop procedure checkbalance
Alter procedure checkbalance
(
@pin BIGINT
)
as
Begin 
Select userpin,name,userBalance from Balance where  userpin=@pin
END
exec checkbalance 1122334455667788
Alter procedure checkbalance
(
@userpin BIGINT
)
as 
Begin
select userpin,name,Balance from ATMRECORDS where userpin= @userpin
END


select * from Balance
select * from AtmRecords
update AtmRecords set Balance=7500 where userpin=125
update AtmRecords set Balance=20000 where userpin=121
update AtmRecords set Balance=30000 where userpin=122
update AtmRecords set Balance=3500 where userpin=123
update AtmRecords set Balance=12500 where userpin=124



update AtmRecords set Balance=20000 where userpin=121

select *  from Balance  group by userpin where userpin=121

drop procedure withdraw

create procedure withdraw
(
@userpin BIGINT,
@amount int
)
as 
BEGIN
update AtmRecords set Balance=Balance- @amount where userpin=@userpin;
select userpin,name,Balance from AtmRecords where userpin=@userpin
END


exec withdraw 121,1000
select * from AtmRecords
drop procedure deposite
create procedure deposite
(
@userpin BIGINT,
@amount int
)
as 
BEGIN
update AtmRecords set Balance=Balance+ @amount where userpin=@userpin;
select userpin,name,Balance from AtmRecords where userpin=@userpin
END
exec deposite 121,2100



Select Balance from AtmRecords where Balance>

create procedure updatevalue
as
Begin;

update AtmRecords set userpin=1122334455667788 where userpin=121
when Balance>900 then Balance=Balance-900
Else 'Sorry'
END

When Balance>900 then  update AtmRecords set Balance=Balance-@amount where userpin=@userpin;

ALTER TABLE [dbo].[AtmRecords] Constrain COLUMN [userpin];

Select * from AtmRecords
drop table AtmRecords
Alter table AtmRecords Add pin BIGINT primary key


Amount should be less than or equal to current balance.

Alter procedure MoneyTransfer  
(
@userpinSender BIGINT,
@userpinreciever BIGINT,
@amount int
)
as 
BEGIN

update AtmRecords set Balance=Balance-@amount where userpin=@userpinSender;
update AtmRecords set Balance=Balance+@amount where userpin=@userpinreciever;
Select
AR.Balance
FROM AtmRecords AR
CASE

WHEN AR.Balance >= @amount AND  AR.userpin=@userpinSender then ' '
END

exec MoneyTransfer 1122334455667781,1122334455667787,1000

Select * from AtmRecords 
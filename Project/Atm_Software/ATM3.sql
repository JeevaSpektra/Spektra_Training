--create table AtmRecords(userpin int NOT NULL Primary Key,name varchar(50) NOT NULL,
--Email Varchar(50) NOT NULL,IFSCCODE varchar(50) NOT NULL,BranchName Varchar(50) NOT NULL,PhoneNo Bigint NOT NULL,Address Varchar(50) NOT NULL)
    
	121,nirmal,nirmal@gmail.com,1122,Guindy,6677889933,chennai-12

--create table CheckBalance(userpin int NOT NULL Primary Key,name varchar(50) NOT NULL,
--Email Varchar(50) NOT NULL,IFSCCODE varchar(50) NOT NULL,BranchName Varchar(50) NOT NULL,Balance Bigint NOT NULL,Address Varchar(50) NOT NULL)

Select * from AtmRecords
Select * from CheckBalance

ALTER procedure UserAcctForm
(
@userpin int   ,
@name varchar(50) ,
@Email Varchar(50) ,
@IFSCCODE varchar(50) ,
@BranchName Varchar(50) ,
@PhoneNo Bigint ,
@Address Varchar(50) 
)
As 
Begin 
Insert into ATMRECORDS(userpin,name,Email,IFSCCODE,BranchName,PhoneNo,Address)
Values 
(@userpin,@name,@Email,@IFSCCODE,@BranchName,@PhoneNo,@Address)
END

update AtmRecords set userpin=123 where userpin=131
Alter 

exec UserAcctForm  @userpin=131,@name='nirmal',@Email='nirmal@gmail',@IFSCCODE=1122,@BranchName='Guindy',@PhoneNo=987454321,@Address='berallur street'



exec UserAcctForm

Alter table Atmrecords add  Balance int 

Select * from Balance

update Balance set userBalance=7500 where userpin=125

Alter procedure checkbalance
(
@pin int
)
as
Begin 
Select userpin,name,userBalance from Balance where  userpin=@pin
END

exec checkbalance 121


select * from Balance
select * from AtmRecords
update AtmRecords set Balance=7500 where userpin=125
update AtmRecords set Balance=20000 where userpin=121
update AtmRecords set Balance=30000 where userpin=122
update AtmRecords set Balance=3500 where userpin=123
update AtmRecords set Balance=12500 where userpin=124



update AtmRecords set Balance=20000 where userpin=121

select *  from Balance  group by userpin where userpin=121

Alter procedure withdraw
(
@userpin int,
@amount int
)
as 
BEGIN
update AtmRecords set Balance=Balance- @amount where userpin=@userpin;
select userpin,name,Balance from AtmRecords where userpin=@userpin
END


exec withdraw 121,1000
select * from AtmRecords

create procedure deposite
(
@userpin int,
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

update AtmRecords set Balance=Balance-900
when Balance>900 then Balance=Balance-900
Else 'Sorry'
END

When Balance>900 then  update AtmRecords set Balance=Balance-@amount where userpin=@userpin;

ALTER TABLE AtmRecords
DROP COLUMN userpin;

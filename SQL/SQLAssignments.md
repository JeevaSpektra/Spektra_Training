## MS SQL 
Microsoft SQL Server is a relational database management system developed by Microsoft. As a database server, 
it is a software product with the primary function of storing and retrieving data as requested by other
software applications—which may run either on the same computer or on another computer across a network

### Version :
MS SQL V18 
SQl Server v19

### Questions and Answers :

#### 1. Print the names of the employees who have highest no of  leaves.
```
Select Firstname from Jeeva where  LeaveDays =( select MAX(LeaveDays) from Jeeva)
```

#### 2. Print the names of the employees that took the second highest leaves
 get the 2nd highest no of leaves.
 ```
	select top 1 * from Jeeva where LeaveDays < (select max(LeaveDays) from Jeeva)order by LeaveDays desc

            OR
            
with cte
as
(
select *,ROW_NUMBER() OVER(order by Leavedays desc ) AS no  from Jeeva)  select * from CTE  where no=2
 ```
#### 3. Print n th  highest salary
```
select top 1 salary as Highest_Salary from jeeva order by salary desc
			[OR]
Select Max(Salary) as Highest_Salary from Jeeva
```
#### 1. Print Name of the employee, Department name, StartDate, EndDate - Ordered by Employee, StartDate ascending
```  
  Select Firstname,Department,Start_date,End_date from Jeeva j order by   j.Start_Date;
```
#### 2. Print the Employees that are assigned to more than one department
```
  Select DISTINCT(Firstname) from Jeeva where Employee_ID = (select  Employee_ID from Jeeva group by Employee_ID having count(Department) > 1)
                        				[ OR ]
select  Firstname from Jeeva group by Firstname having count(Department) > 1
```


#### 3. Print the number of employees that are not assigned to any deparment.
```
select  Firstname from Jeeva where Department is NULL
```

#### 4.Print the number of employees by their shift [ Number of employees working day, evening, and night ]
```
Select  Count(shift)as Number_of_Employee,shift from Jeeva group by shift
```
#### 5. Print Number of Emplyoees  by CountryRegionName
```
Select  Count(Country_region)as Number_of_Employee,Country_region from Jeeva group by Country_region 
				[OR]

Select  Count(Firstname)as Number_of_Employee,Country_region from Jeeva group by Country_region
```

#### 6. Print the name of the CoutryRegion with the highest number of employees 
```
select top 1 j.Country_region from Jeeva as J join Jeeva as J1  on J.Country_region=J1.Country_region  group by j.Country_region  Order by count(*) desc
```

#### 1. Print the employee with their Home address detail
```
Select PP.FirstName,PP.LastName,PA.AddressLine1+(','+PA.AddressLine2+','+PA.City+','+PA.State+'') as AddressType,PA.PostalCode,PA.Country  
	from Person.Person as PP  join Person.Address as PA on PP.BusinessEntityID!=0;
```
#### 2. Print the number of employees that don't have shipping address
```
	select Count(Employee_ID) from Jeeva where shipping_address is NULL
```
#### 3. Print the number of employees that have Home + Billing addresses

```
Query
```
#### 4. Print the count of employees that are living in Texas state.
```
	  Select COUNT(StateProvinceID) from Person.Address where State='Texas'
```
#### 1. Get the customers and their Sale value ( total due )
```
  select Customer,Sales,Due_Amount from Jeeva
```

#### 2. Get the names of the salespersons that did the highest sale
```
  select Customer from Jeeva where Sales=(select Max(Sales)  from Jeeva)
```

#### 3. Number of sales by Online vs non-online
```
  Select Sum(offlineSale) as Offline_sale,Sum(OnlineSale) as ONlineSale,product_id from jeeva  group by product_id

					[OR]
  Select Sum(offlineSale) as Offline_sale,Sum(OnlineSale) as ONlineSale from jeeva 
```
4. Number of sales by their status
```
Query
```
5. Print the number of customers by Product
```

select * from Jeeva
Select j.product_id,COUNT(*) from Jeeva as j join jeeva as j1 on j.product_ID=j1.purchase_pro_ID  group by j.product_id 
order by count(j1.purchase_pro_ID) desc

                                        [OR]

Select buyer,product_id from Jeeva
			
```





6. Print the most popular product
```

select product_name from jeeva where product_id=( 
  Select top 1 j.product_id from Jeeva as J join jeeva as j1 on j.product_id=j1.sales_product_id group by j.product_id 
  order by count(*) desc)

```
7. Print the products by their revenue.
```
  select product_id,Sum(price*Quantity) as RevenuebyProduct from Jeeva where Jeeva.product_id=Jeeva.Salesproduct_id 
group by product_id 
```												


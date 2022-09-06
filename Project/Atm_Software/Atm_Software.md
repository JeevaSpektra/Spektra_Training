#
#     Project
#
#### Name : ATM software

Functions supported:

1.Create Account

2. Check balance

3. Deposit money

4. Withdraw money

5. Transfer to another account
                  
#### Description :

ATM software enables banks to take control of their ATM networks to reduce costs, increase functionality and improve competitiveness

#### Program : 

using System;
using System.Text;
using System.Data.SqlClient;
using System.Reflection.PortableExecutable;
using System.Numerics;
using System.Linq.Expressions;
using System.Net;

class ATMSoftware
{
   
    public static void Main(String[] args)
    {
        //Console.WriteLine("We Getting Connect");

        var datasource = @"S-JEEVAP-5CD215\SQLEXPRESS";
        var database = "ATMDataBase";
        string connstring = connstring = @"Data Source=" + datasource + "" +
            "; Initial Catalog=" + database + ";Persist Security Info=True; Integrated Security = SSPI;";

        SqlConnection conn = new SqlConnection(connstring);
        string str;
        BigInteger pin;
        int withdraw;
        int deposite;

        do
        {
            try
            {
                //Console.WriteLine("Opening Connection....");
                conn.Open();
                //Console.WriteLine("Connection Successful ");
                StringBuilder strBuild = new StringBuilder();
                //StringBuilder strBuild2 = new StringBuilder();
                Console.WriteLine("\t \t ----------------------------------------");
                Console.WriteLine("\t \t| Welcome to Spektra's 24/7 ATM Service | ");
                Console.WriteLine("\t \t ----------------------------------------");
                Console.WriteLine("\n \nPlease insert your Card ! or Click Enter  \n ...");
                Console.ReadLine();
                Console.WriteLine("Select Option \n");
                Console.WriteLine("" +
                    "1.Create Account\n" +
                    "2.Check balance\n" +
                    "3.Withdraw Case\n" +
                    "4.Deposit\n" +
                    "5.Transfer Amount \n");
                BigInteger userpin;
                string name;
                string Email;
                string IFSCCODE;
                string BranchName;
                long PhoneNo;
                string Address;
                int input = Convert.ToInt32(Console.ReadLine());
                int count = 0;
                
                switch (input)
                {
                    case 1:
                        
                        Console.WriteLine("Enter The Details one by one Carefully !!!\n");

                        Console.WriteLine("Please Enter the 16 Digit Account Num Bank Send through your Email : \n");
                        userpin = Convert.ToInt64(Console.ReadLine());
                        var temp = userpin;
                        while (temp > 0)
                        {
                            temp = temp / 10;
                            count++;
                        }

                        if (count == 16)
                        {

                            Console.WriteLine("Enter your Name : ");
                            name = Console.ReadLine();

                            Console.WriteLine("Enter your Email : ");
                            Email = Console.ReadLine();

                            Console.WriteLine("Enter your Bank IFSCCODE : ");
                            IFSCCODE = Console.ReadLine();

                            Console.WriteLine("Enter your Branch Name : ");
                            BranchName = Console.ReadLine();

                            Console.WriteLine("Enter your Phone Number : ");
                            PhoneNo = Convert.ToInt64(Console.ReadLine());

                            Console.WriteLine("Enter your Address : ");
                            Address = Console.ReadLine();

                            Console.WriteLine("\n There is a Mandatory  for NEW user's Should be Deposite" +
                                " for Minimum 1000 \n Please Enter Amount : ");
                            int balance = Convert.ToInt32(Console.ReadLine());

                            strBuild.Append("exec UserAcctForm '" + userpin + "','" + name + "','" + Email + "'," +
                                "'" + IFSCCODE + "','" + BranchName + "'," + PhoneNo + ",'" + Address + "'," + balance + "  ");

                            string sqlQry = strBuild.ToString();

                            using (SqlCommand cmd = new SqlCommand(sqlQry, conn))
                            {
                                cmd.ExecuteNonQuery();

                                Console.WriteLine("\nAccount Added Sucessfully  :) \n");

                                Console.WriteLine("\nYou want to check Balance please Give Yes to Continue\n");
                                Console.WriteLine("\n\t \t \t Thank you For Using Spektra's ATM \n  \t \t \t " +
                                    " \n \n \t \t \tCustomer Care : ATMspektra@gmail.com ");

                            }
                        }
                        else
                        {
                            Console.WriteLine("Sorry the Account Num you have entered is Incorrect." +
                                " Please Enter  your valid" +
                    " 16 Digit Account Number : ");

                        }


                        break;
                    case 2:
                        //strBuild2.Append();

                        //string SqlReader sqlQry1 = strBuild2.ToString();

                        Console.WriteLine("\nBalance Section ");

                        Console.WriteLine("\nEnter your 16 Digit Secret Account Num : \n");
                        pin = Convert.ToInt64(Console.ReadLine());

                        using (SqlCommand cmd = new SqlCommand("exec checkbalance '" + pin + "' ", conn))

                        {
                            SqlDataReader reader = cmd.ExecuteReader();

                            while (reader.Read())
                            {
                                Console.WriteLine("-----------------------------------");
                                Console.WriteLine("{0} | {1} | {2} |", reader.GetInt64(0), reader.GetString(1),
                                        reader.GetInt32(2));
                                Console.WriteLine("-----------------------------------\n");
                                Console.WriteLine("Hi *{0} in you account Current Balance is *{1} \n ",
                                    reader.GetString(1),
                                        reader.GetInt32(2));
                            }
                            reader.ToString();
                            Console.WriteLine("\n\t \t \t  Thank you For Using Spektra's ATM \n  \t \t \t " +
                                                            " \nCustomer Care : ATMspektra@gmail.com ");
                        }

                        break;
                    case 3:
                        Console.WriteLine("\nCASH Withdraw Section ");
                        Console.WriteLine("\nPlease Enter your 16 Digit Secrate Account Num : \n");
                        pin = Convert.ToInt64(Console.ReadLine());
                        Console.WriteLine("\nEnter the Amount you want to Withdraw : \n");
                        withdraw = Convert.ToInt32(Console.ReadLine());

                        using (SqlCommand cmd = new SqlCommand("exec withdraw '" + pin + "','" + withdraw + "' ", conn))

                        {
                            SqlDataReader reader = cmd.ExecuteReader();

                            while (reader.Read())
                            {
                                Console.WriteLine("\nWithdraw Done Check Your Balance.\n \a");
                                Console.WriteLine("-----------------------------------");
                                Console.WriteLine("{0} | {1} | {2} |", reader.GetInt64(0), reader.GetString(1),
                                        reader.GetInt32(2));
                                Console.WriteLine("----------------------------------- \n");
                                Console.WriteLine("\nHi | {0} | you are withdraw Amount | {1} | Sucessfully. Now Balance is : | {2} |", reader.GetString(1), withdraw, reader.GetInt32(2));

                            }
                            reader.ToString(); Console.WriteLine("\n\t \t \t  Thank you For Using Spektra's ATM \n  \t \t \t " +
                                " \n \t \t \t Customer Care : ATMspektra@gmail.com ");
                        }

                        break;
                    case 4:
                        Console.WriteLine("\nDeposite Section !!");
                        Console.WriteLine("\nEnter your Secret Account Num : \n");
                        pin = Convert.ToInt64(Console.ReadLine());
                        Console.WriteLine("\nEnter amount you are deposite : \n");
                        deposite = Convert.ToInt32(Console.ReadLine());
                        using (SqlCommand cmd = new SqlCommand("exec deposite '" + pin + "','" + deposite + "' ", conn))

                        {
                            SqlDataReader reader = cmd.ExecuteReader();

                            while (reader.Read())
                            {
                                Console.WriteLine("\n Amount Deposited . Balance Updated !! \n \a");
                                Console.WriteLine("-----------------------------------");
                                Console.WriteLine("{0} | {1} | {2} | ", reader.GetInt64(0), reader.GetString(1),
                                        reader.GetInt32(2));
                                Console.WriteLine("------------------------------------");
                                Console.WriteLine("\nHi | {0} | you are Deposited Amount | {1} | Sucessfully Now Balance is : " +
                                    "| {2} |", reader.GetString(1), deposite, reader.GetInt32(2));
                            }
                            reader.ToString();

                            Console.WriteLine("\n\t \t \t  Thank you For Using Spektra's ATM \n  \t \t \t " +
                                " \n \t \t \t  Customer Care : ATMspektra@gmail.com ");

                        }
                        break;
                    case 5:
                        Console.WriteLine("Amount Transfer Section\n");
                        Console.WriteLine("\nEnter your Secret Account Num : \t");
                        pin = Convert.ToInt64(Console.ReadLine());
                        Console.WriteLine("\nEnter amount  transfer to Beneficiary  Account Num : \t");
                        BigInteger pin2 = Convert.ToInt64(Console.ReadLine());
                        Console.WriteLine("\nEnter amount you are want to transfer : \t");
                        int trans = Convert.ToInt32(Console.ReadLine());
                        using (SqlCommand cmd = new SqlCommand("exec MoneyTransfer '" + pin + "'," + pin2 + ",'" + trans + "' ", conn))

                        {


                            cmd.ExecuteNonQuery();

                            Console.WriteLine("\nAmount  Transfered Sucessfully  :) \n");


                            Console.WriteLine("\nYou want to check Balance please Give Yes to Continue\n");
                            Console.WriteLine("\n\t \t \t Thank you For Using Spektra's ATM \n  \t \t \t " +
                                " \n \n \t \t \tCustomer Care : ATMspektra@gmail.com ");

                        }
                        if (trans != null)
                        {
                            using (SqlCommand cmd = new SqlCommand("exec checkbalance '" + pin + "' ", conn))

                            {
                                SqlDataReader reader = cmd.ExecuteReader();

                                while (reader.Read())
                                {
                                    
                                    Console.WriteLine("-----------------------------------");
                                    Console.WriteLine("{0} | {1} | {2} |", reader.GetInt64(0), reader.GetString(1),
                                            reader.GetInt32(2));
                                    Console.WriteLine("-----------------------------------\n");
                                    Console.WriteLine("Hi *{0} in you account Current Balance is *{1} \n ",
                                        reader.GetString(1),
                                            reader.GetInt32(2));
                                }
                                reader.ToString();
                                Console.WriteLine("\n\t \t \t  Thank you For Using Spektra's ATM \n  \t \t \t " +
                                                                " \nCustomer Care : ATMspektra@gmail.com ");
                            }
                        }
                        break;

                }
                strBuild.Clear();
            }
            catch (Exception e)
            {
                Console.WriteLine("Error :" + e.Message);
            }
            conn.Close();
            Console.WriteLine("\n \n Do you want Continute Press yes / No");
            str = Console.ReadLine();
        } while (str == "yes");
        Console.WriteLine("\nThank you For Choosing Spektra ATM\n");

    }

}

### Output Screenshots :

1.Create Account
     ![](images/CreateAccount.png)

2. Check balance
     ![](images/Balance.png)

3. Deposit money
     ![](images/Balance.png)

4. Withdraw money
     ![](images/Withdraw.png)

5. Transfer to another account
     ![](images/Transfer.png)


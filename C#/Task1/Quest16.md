##### 16.	Write a C# Sharp program to convert a given integer value to Roman numerals
#
# Program 

```
using System;  
class Developer
{
    public String Roman(int num)
    {
        String[] thousand =  {"","M","MM","MMM" };
        String[] hunderds = {"","C","CC","CD",
        "D","DC","DCC","DCCC","CM"};
        String[] tens = {"","X","XX","XL",
        "L","LX","LXX","LXXX","XC" };
        String[] units = {"","I", "II", "III", "IV",
        "V","VI","VII","VIII","IX"};
        return thousand[num / 1000]+
            hunderds[(num%1000)/100]+
            tens[(num%100)/10]+
        units[num % 10];
    }
    public static void Main(String[] args)
    {
        Developer d = new Developer();
        Console.WriteLine("Enter Number : ");
        int num = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine(d.Roman(num));
    }
}


```

##### 3.	Write a function:
##### class Solution { public int solution(int[] A); }
##### that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
##### For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
##### Given A = [1, 2, 3], the function should return 4.
##### Given A = [−1, −3], the function should return 1.
#
## Program : 

```
using System;
using System.Collections.Generic;
public class Program
{
    public static int Solution(int[] arr)
    {
        int output = 0;
        for (int k = 0; k < arr.Length; k++)
        {
            Console.WriteLine(arr[k]);
        }
        Console.WriteLine("\n");
        Array.Sort(arr);
        Array.Reverse(arr);
        for (int k = 0; k < arr.Length; k++)
        {
            Console.WriteLine(arr[k]);
        }

        Console.WriteLine("\n");

        if (arr[0] <= 0)
        {

            output = 1;
        }

        for (int i = 0; i < arr.Length - 1 && output != 1; i++)
        {

            if (arr[i] != arr[i + 1] + 1)
            {

                output = arr[i] - 1;
                break;
            }
        }
        if (output == 0)
        {
            output = arr[0] + 1;
        }
        Console.WriteLine("------");

        Console.WriteLine(output);

        Console.WriteLine("------");

        return 0;
    }
    public static void Main(string[] args)
    {
        Console.WriteLine("Hello, World  above q array is this \n ");
        int[] q = { 1, 3, 6, 4, 1, 2 };
        int[] arr = q.Distinct().ToArray();
        Solution(arr);
   
    }
}

```


## Output : 
![](images\FunctionArray.png)

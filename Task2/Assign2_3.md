##### 3.	Write a function:
##### class Solution { public int solution(int[] A); }
##### that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
##### For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
##### Given A = [1, 2, 3], the function should return 4.
##### Given A = [−1, −3], the function should return 1.
#
## Program : 

   
   ![](images\FunctionArray.png)

```
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
// Compiler version 4.0, .NET Framework 4.5


namespace Dcoder
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //Your code goes here
            Console.WriteLine("Hello, Dcoder!");
            //int[] q = { -2, -1 };
            int[] q = { 1,2,6,4,3 };


            int output = 0;

            int[] arr = q.Distinct().ToArray();
            int arr_len = arr.Length;
            for (int k = 0; k < arr_len; k++)
            {
                Console.WriteLine(arr[k]);
            }

            Array.Sort(arr);

            // Array.Reverse(arr);
            for (int k = 0; k < arr_len; k++)
            {
                Console.WriteLine(arr[k]);
            }

            Console.WriteLine("\n");


            if (arr[arr_len - 1] <= 0)
            {

                output = 1;
            }

            for (int i = 0; i < arr_len - 1 && output != 1; i++)
            {
                if (arr[i] < 0)
                {
                    continue;
                }

                if (arr[i] != arr[i + 1] - 1)
                {

                    output = arr[i] + 1;
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
        }
    }
}

```
 





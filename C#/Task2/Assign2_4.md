##### Given six digits, find the earliest valid time that can be displayed on a digital clock (in 24-hour format) using those digits.
##### For example, given digits 1, 8, 3, 2, 6, 4 the earliest valid time is "12:36:48". Note that "12 : 34 : 68" is not a valid time.
##### Write a method:
##### class Solution { public String solution(int A, int B, int C, int D, int E, int F); }
##### That, given six integers A, B, C, D, E and F, returns the earliest valid time in "hh:mm:ss" string format, or "NOT POSSIBLE" if it is not possible to display a valid time using all six integers.
##### For example, given 1, 8, 3, 2, 6, 4 the function should return "12:36:48".
##### Given 0, 0, 0, 0, 0, 0, the function should return "00:00:00". Given 0, 0, 0, 7, 8, 9, the function should return "07:08:09". Given 2, 4, 5, 9, 5, 9, the function should return "NOT POSSIBLE".
##### Assume that: • A, B, C, D, E and F are integers within the range [0..9].


## Program :

```
  using System;
class Developer
{
    //public String solution(int A, int B, int C, int D, int E, int F)
    //{

    //}
    public String solution(int A, int B, int C, int D, int E, int F)

    {
        int[] array = { A,B,C,D,E,F };
        String result = " ";

        for(int s = 0; s < array.Length; s++)
        {
            Console.WriteLine(array[s]);
        }
        for (int i = 0; i < array.Length; ++i)
        {
            for (int j = 0; j < array.Length; ++j)
            {
                for (int k = 0; j < array.Length; ++k)
                {
                    if (i == j || j == k || j == i)
                        continue;
                    String hh = array[i] + " " + array[j];
                    String mm = array[k] + " " + array[6 - i - j - k];
                    String time = hh + " " + mm;
                    if (hh.CompareTo("24") < 0 && mm.CompareTo("60") < 0 && time.CompareTo(result) > 0) result = time;
                    Console.WriteLine(result);
                }
            }
        }
        Console.WriteLine(result);
        return result;
    }
    public static void Main(string[] args)
    {
        Console.WriteLine("Enter  single digits for digital clock: one by one ");
        Console.Write("Digit 1 : ");
        int h = Convert.ToInt32(Console.ReadLine());
        Console.Write("Digit 2 : ");
        int hh = Convert.ToInt32(Console.ReadLine());
        Console.Write("Digit 3 : ");
        int m = Convert.ToInt32(Console.ReadLine());
        Console.Write("Digit 4 : ");
        int mm = Convert.ToInt32(Console.ReadLine());
        Console.Write("Digit 5 : ");
        int s = Convert.ToInt32(Console.ReadLine());
        Console.Write("Digit 6 : ");
        int ss = Convert.ToInt32(Console.ReadLine());

        //int[] arrayin = { 1, 2, 3, 4, 5, 6 };

        //int[] array = { 1, 2, 3, 4 };

        Developer obj = new Developer();

        //obj.solution(array);

        //obj.solution(array);

        obj.solution(h,hh,m,mm,s,ss);



        //String mm = array[k] + " " + array[6 - i - j - k];
        //String ss = array[s] + " " + array[6 - i - j - k-s];
        //String time = hh + " " + mm+" "+ss;
        //if (hh.CompareTo("24") < 0 && mm.CompareTo("60") < 0 && time.CompareTo(result) > 0 &&
        //    ss.CompareTo("60")<0) result = time;
        //Console.WriteLine(result);


    }
}



   
```

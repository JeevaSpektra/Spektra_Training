```
using System;

public class Developer
{
    public static char[] Program(String sentence)

    {
        char[] chars = sentence.ToCharArray();

        int start = 0, end = 0;
        
            foreach(char ch in chars)
            {
            bool check = end == chars.Length - 1;
            //end == chars.Length - 1;
            //check =false;
            if (ch == ' ' || check)
                {
                    char temp = chars[end];
                chars[end] = chars[start];
                    chars[start] = temp;
                    
                }

            end++;
        }      
        return chars;
    }

public static void Main(String[] args)
{
        Console.WriteLine("Enter the String what ever you want\n");
        string str=Console.ReadLine();
    Console.WriteLine(Program(str));
}
}

```

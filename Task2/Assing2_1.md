  ```

using System;


    class Developer

    {

        public static void Main(string[] args)

        {

            DateTime currentDate = DateTime.Now;



            Console.Write("Enter Date (dd-mm-yyyy hh:mm:ss) : ");

            DateTime oldDate = DateTime.Parse(Console.ReadLine());



            Console.WriteLine("\n\n" + getTimeStamp(currentDate, oldDate));



            Console.ReadKey();

        }



        public static string getTimeStamp(DateTime currentDate, DateTime updateDate)

        {

            int YearDiff = currentDate.Year - updateDate.Year;

            int MonthDiff = currentDate.Month - updateDate.Month;

            int DayDiff = currentDate.Day - updateDate.Day;

            int HourDiff = currentDate.Hour - updateDate.Hour;

            int MinuteDiff = currentDate.Minute - updateDate.Minute;

            int SecondDiff = currentDate.Second - updateDate.Second;



            if (YearDiff > 1)

                return $"File was updated {YearDiff} years ago";

            else if (MonthDiff > 1)

                return $"File was updated {MonthDiff} Months ago";

            else if (DayDiff > 1)

                return $"File was updated {DayDiff} Days ago";

            else if (HourDiff > 1)

                return $"File was updated {HourDiff} Hours ago";

            else if (MinuteDiff > 1)

                return $"File was updated {MinuteDiff} Minutes ago";

            else

                return $"File was updated {SecondDiff} Seconds ago";

        }

    }
```


![](images/FunctionArray.png)
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace QarsAngular
{
    public class Program
    {
        public static string StringInput(string x)
        {
            Console.WriteLine(x);
            string answer = Console.ReadLine(); //answer=Musab 
            return answer;
            //string test = Input("Username:") -> test = Lennert........
        }
        public static int IntegerInput(string x)
        {
            Console.WriteLine(x);
            int answer = Convert.ToInt32(Console.ReadLine()); //answer=19
            return answer;
            //int test = IntegerInput("Age:") -> test = 19.
        }
        public static string Location() 
        {
            Console.WriteLine("Where would you like to pick up your rental?/nPlease fill in your Province:             (don't forget capital letters)");
            string x = Console.ReadLine();
            string[] provincies = {"Groningen", "Friesland", "Drenthe", "Overijssel" };
            bool CheckProvince = false;
            for (int i=0; i<(provincies.Length-1); i++)
            {
                string y = provincies[i];
                if(x == y) 
                {
                    CheckProvince = true;
                }
            }
            if (CheckProvince)
            {
                return x;
            }

        }

    }
}

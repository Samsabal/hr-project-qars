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
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });

        public static string StringInput(string x)
        {
            Console.WriteLine(x);
            string answer = Console.ReadLine(); //answer=Musab 
            return answer;
            //string test = Input("Username:") -> test = Lennert
        } 
        public static int IntegerInput(string x)
        {
            Console.WriteLine(x);
            int answer = Convert.ToInt32(Console.ReadLine()); //answer=19
            return answer;
            //int test = IntegerInput("Age:") -> test = 19.
        }


        
    }
}

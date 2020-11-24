using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using QarsAngular.Models;

namespace QarsAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CarListController : Controller
    {
        private readonly ILogger<CarListController> _logger;

        public CarListController(ILogger<CarListController> logger)
        {
            _logger = logger;
            using (var db = new DbConfiguration())
            {
                var carmodelslist = db.CarModels.ToList();

                foreach (var car in carmodelslist)
                {
                    Console.WriteLine("Cars found: " + car.name);
                }

                db.SaveChanges();
            }
        }


        public void iets()
        {
            using (var db = new DbConfiguration())
            {
                var carmodelslist = db.CarModels.ToList();

                foreach (var car in carmodelslist)
                {
                    Console.WriteLine("Cars found: " + car.name);
                }

                db.SaveChanges();
                return;
            }

        }

    }
}
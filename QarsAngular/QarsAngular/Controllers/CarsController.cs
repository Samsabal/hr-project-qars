using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using QarsAngular.Models;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace QarsAngular.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CarsController : ControllerBase
    {
        private readonly CarsContext context;

        public CarsController(CarsContext _context)
        {
            this.context = _context;
        }
        //GET: api/cars
        [HttpGet]
        public IActionResult Get()
        {
            var cars = context.Cars.ToList<Car>();
            return Ok(cars);
        }

        // GET api/cars/licenseplate
        [HttpGet("{licenseplate}")]
        public IActionResult Get(string licenseplate)
        {
            var cars = context.Cars.ToList<Car>();
            List<Car> carlist = new List<Car>();
            foreach (var car in cars)
            {
                if (car.licenseplate == licenseplate)
                {
                    return Ok(car);
                }
            }
            return Ok("no car found");
        }

        // GET api/cars/locationcode
        [HttpGet("{locationcode}/{carmodel}")]
        public IActionResult Get(string locationcode, int carmodel)
        {
            var cars = context.Cars.ToList<Car>();
            List<Car> carlist = new List<Car>();
            foreach (var car in cars)
            {
                if (car.locationcode.StartsWith(locationcode) == true && car.carmodel == carmodel)
                {
                    carlist.Add(car);
                }
            }
            return Ok(carlist);
        }

        [HttpPost]
        public void Post([FromBody] string value)
        {
        }
    
    }
}

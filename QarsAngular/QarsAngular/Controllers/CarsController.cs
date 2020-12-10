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
    [Route("[controller]")]
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

        // GET api/cars/1001
        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            var cars = context.Cars.ToList<Car>();
            foreach (var car in cars)
            {
                if (car.licenseplate == id)
                {
                    return Ok(car);
                }
            }
            return Ok("car not found");
        }

        // GET api/<CarsController>/5
        // [HttpGet("{sid}")]
        // public IEnumerable<Car> Get(string sid)
        // {
        //     var cars = _context.Cars.ToList<Car>();
        //     var query = (from c in cars
        //                  where c.licenseplate == sid
        //                  select c).ToArray<Car>();
        //     return query;
        // }

        // POST api/<CarsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }
        //
        //  // PUT api/<CarsController>/5
        //  [HttpPut("{id}")]
        //  public void Put(int id, [FromBody] string value)
        //  {
        //  }
        //
        //  // DELETE api/<CarsController>/5
        //  [HttpDelete("{id}")]
        //  public void Delete(int id)
        //  {
        //  }
    }
}

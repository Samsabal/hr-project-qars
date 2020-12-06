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
        private readonly CarsContext _context;
        public CarsController(CarsContext context)
        {
            this._context = context;
        }
        //GET: api/cars
        [HttpGet]
        public IEnumerable<Car> Get()
        {
            var cars = _context.Cars.ToList<Car>();
            var query = (from c in cars
                         select c).ToList<Car>();
            return query;
        }

        // GET api/cars/1001
        [HttpGet("{id}")]
        public IEnumerable<Car> Get(int id)
        {
            var cars = _context.Cars.ToList<Car>();
            var query = (from c in cars
                         where c.carmodel == id
                         select c).Take(10).ToList<Car>();
            return query;
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

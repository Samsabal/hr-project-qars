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
        private readonly CarsContext _context;
        public CarsController(CarsContext context)
        {
            this._context = context;
        }
        //GET: api/Cars
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Car>>> GetCarmodels()
        {
            // var carmodels = _context.CarModels.ToList();
            // var output = new List<Carmodel>();
            //
            // foreach (var car in carmodels)
            // {
            //     output.Add(car);
            // }
            //
            // return output;
            return await _context.Cars.ToListAsync<Car>();
        }
        [HttpGet]
        public IEnumerable<Car> Get()
        {
            return Enumerable.ToList<Car>(_context.Cars);
        }

        // GET api/<CarsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

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

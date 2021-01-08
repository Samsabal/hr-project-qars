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
    public class CarmodelsController : ControllerBase
    {
        private readonly CarsContext context;
        public CarmodelsController(CarsContext _context)
        {
            this.context = _context;
        }

        //GET: api/carmodels
        [HttpGet]
        public IActionResult Get()
        {
            var cars = context.CarModels.ToList<Carmodel>();
            return Ok(cars);
        }

        // GET api/carmodels/1001
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var cars = context.CarModels.ToList<Carmodel>();
            foreach (var car in cars)
            {
                if (car.code == id)
                {
                    return Ok(car);
                }
            }
            return Ok("carmodel not found");
        }
    }
}
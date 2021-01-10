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

        // GET api/carmodels/true or false
        [HttpGet("{id}/{airconditioning}")]
        public IActionResult Get(int id, bool airconditioning)
        {
            var cars = context.CarModels.ToList<Carmodel>();
            var outputcars = new List<Carmodel>();
            foreach (var car in cars)
            {
                if (car.airconditioning == airconditioning && id > 999)
                {
                    outputcars.Add(car);
                }
            }
            return Ok(outputcars);
        }
        // GET api/carmodels/true or false
        [HttpGet("{id}/{airconditioning}/{category}")]
        public IActionResult Get(int id, bool airconditioning, string category)
        {
            var cars = context.CarModels.ToList<Carmodel>();
            var outputcars = new List<Carmodel>();
            foreach (var car in cars)
            {
                if (car.category == category && id > 999 && car.airconditioning == airconditioning)
                {
                    outputcars.Add(car);
                }
            }
            return Ok(outputcars);
        }
    }
}
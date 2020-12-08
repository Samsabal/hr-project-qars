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
    public class CarmodelsController : ControllerBase
    {
        private readonly CarsContext _context;
        public CarmodelsController(CarsContext context)
        {
            this._context = context;
        }

        //GET: api/carmodel
        [HttpGet]
        public IEnumerable<Carmodel> Get()
        {
            var carmodels = _context.CarModels.ToList<Carmodel>();
            var query = (from c in carmodels
                         select c).ToList<Carmodel>();
            return query;
        }

        // GET: api/carmodel/1001
        [HttpGet("{id}")]
        public IEnumerable<Carmodel> Get(int id)
        {
            var carmodels = _context.CarModels.ToList<Carmodel>();
            var query = (from c in carmodels
                         where c.code == id
                         select c).ToList<Carmodel>();
            return query;
        }
    }
}
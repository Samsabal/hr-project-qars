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
    public class CustomersController : ControllerBase
    {
        private readonly CarsContext context;



        public CustomersController(CarsContext _context)
        {
            this.context = _context;
        }

        //GET: api/customers
        [HttpGet]
        public IActionResult Get()
        {
            var customers = context.Customers.ToList<Customer>();
            return Ok(customers);
        }

        //GET: api/customers
        [HttpGet("{username}/{password}")]
        public IActionResult Get(string username, string password)
        {
            var customers = context.Customers.ToList<Customer>();
            foreach (Customer customer in customers)
            {
                if (customer.username == username && customer.password == password)
                {
                    return Ok(customer);
                }
            }
            return Ok("customer not found");
        }

        [HttpPost]
        public void Post([FromBody] string value)
        {
            var customers = context.Customers.ToList<Customer>();
            
        }

    }
}
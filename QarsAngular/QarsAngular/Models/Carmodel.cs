using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace QarsAngular.Models
{

    public class Carmodel
    {
        [Key]
        public int code { get; set; }
        public string brand { get; set; }
        public string type { get; set; }
        public string version { get; set; }
        public string category { get; set; }
        public string fueltype { get; set; }
        public double dayrate { get; set; }
        public int freemileage { get; set; }
        public double kmrate { get; set; }
        public int passengers { get; set; }
        public int doors { get; set; }
        public int suitcases { get; set; }
        public string transmission { get; set; }
        public bool airconditioning { get; set; }
        public double efficiency { get; set; }
        public int emission { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        
        [NotMapped]
        public virtual List<Car> Carlist { get; set; }

    }

}

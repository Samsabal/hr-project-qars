using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace QarsAngular.Models
{

    public class Carmodel
    {
        [Required]
        [Key]
        public int code { get; set; }
        [Required]
        public string brand { get; set; }
        [Required]
        public string type { get; set; }
        [Required]
        public string version { get; set; }
        [Required]
        public string category { get; set; }
        [Required]
        public string fueltype { get; set; }
        [Required]
        public double dayrate { get; set; }
        [Required]
        public int freemileage { get; set; }
        [Required]
        public double kmrate { get; set; }
        [Required]
        public int passengers { get; set; }
        [Required]
        public int doors { get; set; }
        [Required]
        public int suitcases { get; set; }
        [Required]
        public string transmission { get; set; }
        [Required]
        public bool airconditioning { get; set; }
        [Required]
        public double efficiency { get; set; }
        [Required]
        public int emission { get; set; }
        [Required]
        public string name { get; set; }
        [Required]
        public string description { get; set; }
        
        [NotMapped]
        public virtual List<Car> Carlist { get; set; }

    }

}

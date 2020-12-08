using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QarsAngular.Models
{
    public class Serviceboeking
    {
        [Required]
        public string licenseplate { get; set; }
        [Required]
        public DateTime startdate { get; set; }
        public DateTime enddate { get; set; }
        [Required]
        public string status { get; set; }
        [Required]
        [Key]
        public string serviceidentification { get; set; }
        [Required]
        public string type { get; set; }
    }
}
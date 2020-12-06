using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QarsAngular.Models
{
    public class Location
    {
        [Required][Key]
        public string code { get; set; }
        [Required]
        public string name { get; set; }
        [Required]
        public string countrycode { get; set; }
        [Required]
        public string city { get; set; }
        [Required]
        public string address { get; set; }
        public string zip { get; set; }
        [Required]
        public string phonenumber { get; set; }
    }
}
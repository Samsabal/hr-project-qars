using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QarsAngular.Models
{
    public class Customer
    {
        [Required]
        [Key]
        public string username { get; set; }
        [Required]
        public string password { get; set; }
        [Required]
        public string givenname { get; set; }
        [Required]
        public string familyname { get; set; }
        [Required]
        public string countrycode { get; set; }
        [Required]
        public string city { get; set; }

        public string address { get; set; }

        public string zip { get; set; }
        [Required]
        public string phonenumber { get; set; }
        [Required]
        public string emailaddress { get; set; }
    }

}
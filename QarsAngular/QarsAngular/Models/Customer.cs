using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QarsAngular.Models
{
    public class Customer
    {
        [Required][Key]
        public string username { get; set; }
        [Required]
        public string password { get; set; }
        [Required]
        public string givenName { get; set; }
        [Required]
        public string familyName { get; set; }
        [Required]
        public string countryCode { get; set; }
        [Required]
        public string city { get; set; }
        [Required]
        public string address { get; set; }
        [Required]
        public string zip { get; set; }
        [Required]
        public string phoneNumber { get; set; }
        [Required]
        public string emailAddress { get; set; }
    }

}
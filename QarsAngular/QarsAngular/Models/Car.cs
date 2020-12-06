using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QarsAngular.Models
{

    public class Car
    {
        [Required]
        public int carmodel { get; set; }
        [Required][Key]
        public string licenseplate { get; set; }

        [Required]
        public int mileage { get; set; }
        [Required]
        public string locationcode { get; set; }

        
        public Carmodel Carmodellink { get; set; }

    }

}

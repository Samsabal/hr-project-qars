using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QarsAngular.Models
{

    public class Car
    {
        public int carmodel { get; set; }
        [Key]
        public string licenseplate { get; set; }
        public int mileage { get; set; }
        public string locationcode { get; set; }
        
        [NotMapped]
        public virtual Carmodel Carmodellink { get; set; }

    }

}

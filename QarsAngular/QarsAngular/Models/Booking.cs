using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QarsAngular.Models
{
    public class Booking {
        [Required][Key]
        public string carlicenceplate { get; set; }
        [Required]
        public string customerusername { get; set; }
        [Required]
        public string pickuplocationcode { get; set; }
        [Required]
        public string dropofflocationcode { get; set; }
        [Required]
        public double totalamount { get; set; }
        [Required]
        public DateTime bookingdate { get; set; }
        [Required]
        public DateTime begindate { get; set; }
        [Required]
        public int enddate { get; set; }
    }
}
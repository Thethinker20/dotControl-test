using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace dotApplication.Models
{
    [Table("Orders")]
    public class OrderModel
    {
        [Key]
        [Required]
        public int id { get; set; }
        public int customerId { get; set; }
        public DateTime date { get; set; }
        public String dateDispatch { get; set; }
        public String products { get; set; }
        public decimal orderPrice { get; set; }
        public decimal productPrice { get; set; }
    }
}


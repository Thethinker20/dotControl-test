using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace dotApplication.Models
{
    [Table("Products")]
    public class ProductModel
    {
        [Key]
        [Required]
        public int id { get; set; }
        public String productName { get; set; }
        public int quantity { get; set; }
        public decimal price { get; set; }
    }
}

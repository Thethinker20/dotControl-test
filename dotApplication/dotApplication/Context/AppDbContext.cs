using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotApplication.Models;
using Microsoft.EntityFrameworkCore;

namespace dotApplication.Context
{
    public class AppDbContext : DbContext
    {
        public DbSet<OrderModel> Orders { get; set; }
        public AppDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<dotApplication.Models.ProductModel> ProductModel { get; set; }
    }
}

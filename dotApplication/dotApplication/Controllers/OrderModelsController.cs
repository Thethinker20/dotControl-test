using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotApplication.Context;
using dotApplication.Models;

namespace dotApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderModelsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public OrderModelsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/OrderModels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrderModel>>> GetOrders()
        {
            return await _context.Orders.ToListAsync();
        }

        // GET: api/OrderModels/5
        [HttpGet("{dateDispatch}")]
        public async Task<ActionResult<OrderModel>> GetOrderModel(String dateDispatch)
        {
            var orderModel = await _context.Orders.FindAsync(dateDispatch);

            if (orderModel == null)
            {
                return NotFound();
            }

            return orderModel;
        }

        private bool OrderModelExists(string dateDispatch)
        {
            return _context.Orders.Any(e => e.dateDispatch == dateDispatch);
        }
    }
}

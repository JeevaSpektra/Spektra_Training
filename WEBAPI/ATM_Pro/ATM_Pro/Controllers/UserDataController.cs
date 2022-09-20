using ATM_Pro.Data;
using ATM_Pro.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ATMSoftware.API.Controllers
{
    [ApiController]
    [Route("api/getBalance")]
    public class CustomersDataController : Controller
    {
        private readonly SystemDatabase _SystemDbContext;
        public CustomersDataController(SystemDatabase bankingSystemDbContext)
        {
            _SystemDbContext = bankingSystemDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCustomers()
        {
            var customers = await _SystemDbContext.UserData.ToListAsync();

            return Ok(customers);
        }

        [HttpPost]
        public async Task<IActionResult> AddCustomer([FromBody] UserData customerRequest)
        {
            customerRequest.Id = Guid.NewGuid();
            await _SystemDbContext.UserData.AddAsync(customerRequest);
            await _SystemDbContext.SaveChangesAsync();

            return Ok(customerRequest);
        }

        [HttpGet]
        [Route("{AccountNumber:long}")]

        public async Task<IActionResult> GetBalance([FromRoute] long AccountNumber, int CardPIN)
        {
            var customerInfo =
                await _SystemDbContext.UserData.FirstOrDefaultAsync(x => x.AccountNumber == AccountNumber);

            if (customerInfo == null)
            {
                return NotFound();
            }

            if (customerInfo.CardPin != CardPIN)
            {
                return Unauthorized();
            }

            float balance = customerInfo.TotalBalance;
            string name = customerInfo.FullName;

            return Ok(new { name, balance });
        }
    }
}

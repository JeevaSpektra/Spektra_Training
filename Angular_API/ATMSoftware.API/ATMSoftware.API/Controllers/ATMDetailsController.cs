
using ATMSoftware.API.Data;
using ATMSoftware.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ATMAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ATMDetailsController : Controller
    {
        private readonly ATMDbContext _ATMDbContext;
        public ATMDetailsController(ATMDbContext aTMDbContext)
        {
            _ATMDbContext = aTMDbContext;
        }


        [HttpGet]
        public async Task<IActionResult> GetAllATMDetails()
        {
            var details = await _ATMDbContext.AtmDetails.ToListAsync();
            return Ok(details);
        }
        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody] ATMDetails atmDetailsRequest)
        {
            atmDetailsRequest.UserPin = Guid.NewGuid();

            await _ATMDbContext.AtmDetails.AddAsync(atmDetailsRequest); 
            await _ATMDbContext.SaveChangesAsync();
            return Ok(atmDetailsRequest);
        }
    }
}

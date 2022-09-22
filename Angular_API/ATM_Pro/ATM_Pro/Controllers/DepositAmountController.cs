using ATM_Pro.Data;
using Microsoft.AspNetCore.Mvc;
using ATM_Pro.Models;
using Microsoft.EntityFrameworkCore;
namespace ATMSoftware.API.Controllers
{
    [ApiController]
    [Route("api/setDeposit")]
    public class DepositAmountController : Controller
    {
        private readonly SystemDatabase _bSystemDbContext;

        public DepositAmountController(SystemDatabase SystemDbContext)
        {
            _bSystemDbContext = SystemDbContext;
        }

        [HttpPut]
        [Route("{AccountNumber:long}")]

        public async Task<IActionResult> SetDeposit([FromRoute] long AccountNumber, int CardPIN, float DepositeAmount)
        {
            var updateInfo =
                await _bSystemDbContext.UserData.FirstOrDefaultAsync(x => x.AccountNumber == AccountNumber);

            if (updateInfo == null)
            {

                return NotFound();
            }

            if (updateInfo.CardPin != CardPIN)
            {
                return Unauthorized();
            }

            updateInfo.TotalBalance += DepositeAmount;
            float balance = updateInfo.TotalBalance;
            string name = updateInfo.FullName;

            await _bSystemDbContext.SaveChangesAsync();
            return Ok(new { name, balance });
        }
    }
}
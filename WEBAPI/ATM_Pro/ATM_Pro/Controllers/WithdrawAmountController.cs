
using Microsoft.AspNetCore.Mvc;
using ATM_Pro.Models;
using Microsoft.EntityFrameworkCore;
using ATM_Pro.Data;

namespace ATMSoftware.API.Controllers
{
    [ApiController]
    [Route("api/setWithdraw")]
    public class WithdrawAmountController : Controller
    {
        private readonly SystemDatabase _SystemDbContext;

        public WithdrawAmountController(SystemDatabase bankSystemDbContext)
        {
            _SystemDbContext = bankSystemDbContext;
        }

        [HttpPut]
        [Route("{AccountNumber:long}")]
        public async Task<IActionResult> SetDeposit([FromRoute] long AccountNumber, int CardPIN, float WithdrawalMoney)
        {
            var updateInfo =
                await _SystemDbContext.UserData.FirstOrDefaultAsync(x => x.AccountNumber == AccountNumber);

            if (updateInfo == null)
            {
                return NotFound();
            }

            if (updateInfo.CardPin != CardPIN)
            {
                return Unauthorized();
            }

            if (updateInfo.TotalBalance < WithdrawalMoney)
            {
                return NotFound();
            }
            else
            {
                updateInfo.TotalBalance -= WithdrawalMoney;
            }

            float balance = updateInfo.TotalBalance;
            string name = updateInfo.FullName;

            await _SystemDbContext.SaveChangesAsync();
            return Ok(new { name, balance });
        }
    }
}
using ATM_Pro.Data;
using ATM_Pro.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ATMSoftware.API.Controllers
{
    [ApiController]
    [Route("api/viewTransactions")]
    public class TransactionController : Controller
    {
        private readonly SystemDatabase SystemDbContext;
        public TransactionController(SystemDatabase bankSystemDbContext)
        {
            SystemDbContext = bankSystemDbContext;
        }
        [HttpPut]
        [Route("{SenderAccountNumber:long}")]
        
        public async Task<IActionResult> SetTransaction([FromRoute] long SenderAccountNumber, int CardPIN,long BenifiAccountNumber, float TransactionMoney)
        {
            var updateInfo =
                await SystemDbContext.UserData.FirstOrDefaultAsync(x => x.AccountNumber == SenderAccountNumber);

            var updateInfoB =
               await SystemDbContext.UserData.FirstOrDefaultAsync(x => x.AccountNumber == BenifiAccountNumber);

            if (updateInfo == null && updateInfoB == null)
            {
                return NotFound();
            }

            if (updateInfo.CardPin != CardPIN)
            {
                return Unauthorized();
            }

            if (updateInfo.TotalBalance < TransactionMoney)
            {
                return NotFound();
            }
            else
            {
                updateInfo.TotalBalance -= TransactionMoney;
                updateInfoB.TotalBalance += TransactionMoney;

            }

            float balance = updateInfo.TotalBalance;
            string name = updateInfo.FullName;

            await SystemDbContext.SaveChangesAsync();
            return Ok(new{ name, balance });
        }
        //}
        //[HttpPost]
        //public async Task<IActionResult> StoreTransaction([FromBody] Transactions transactionRequest)
        //{
        //    Random rnd = new Random();
        //    transactionRequest.TransactionId = rnd.Next(1, 7);
        //    await SystemDbContext.TransactionsData.AddAsync(transactionRequest);
        //    await SystemDbContext.SaveChangesAsync();

        //    return Ok(transactionRequest);
        //}
    }
}

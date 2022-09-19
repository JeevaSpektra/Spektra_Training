using ATMSoftware.API.Models;
using Microsoft.EntityFrameworkCore;

namespace ATMSoftware.API.Data
{
    public class ATMDbContext : DbContext
    {
        public ATMDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<ATMDetails> AtmDetails { get; set; }
    }
}

using ATM_Pro.Models;
using Microsoft.EntityFrameworkCore;

namespace ATM_Pro.Data
{
    public class SystemDatabase : DbContext
    {
        public SystemDatabase(DbContextOptions options) : base(options)
        {
        }
        public DbSet<UserData> UserData { get; set; }
        public DbSet<Transactions> TransactionsData { get; set; }

    }
}

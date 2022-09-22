using System.ComponentModel.DataAnnotations;

namespace ATM_Pro.Models
{
    public class Transactions
    {
        [Key]
        public int TransactionId { get; set; }
        public long AccountNumber { get; set; }
        public long Beneficiary { get; set; }
        public string BranchName { get; set; }
        public float TransferAmount { get; set; }
    }
}


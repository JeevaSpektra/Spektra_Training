using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Numerics;

namespace ATMSoftware.API.Models
{
   
    public class ATMDetails
    {
        [Key]
        public Guid UserPin { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string IFSCCODE { get; set; }
        public string BranchName { get; set; }
        public long PhoneNumber { get; set; }
        public string Address { get; set; }
        public long Balance { get; set; }
    }
}

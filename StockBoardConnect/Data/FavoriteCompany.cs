using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace StockBoardConnect.Data
{
    public class FavoriteCompany
    {
        public long Id { get; set; }

        [ForeignKey("User")]
        public string UserId { get; set; }

        public ApplicationUser User { get; set; }

        [ForeignKey("Company")]
        public Guid CompanyId { get; set; }

        public Company Company { get; set; }

        public DateTimeOffset CreatedAt { get; set; }

        public DateTimeOffset LastReadAt { get; set; }
    }
}

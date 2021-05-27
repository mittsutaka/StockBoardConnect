using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockBoardConnect.Areas.Api.Models
{
    public class PostRequestModel
    {
        public Guid CompanyId { get; set; }

        public string Text { get; set; }
    }
}

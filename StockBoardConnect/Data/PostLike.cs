using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace StockBoardConnect.Data
{
    public class PostLike
    {
        public ApplicationUser User { get; set; }

        [ForeignKey("User")]
        public string UserId { get; set;}

        public Post Post { get; set; }

        [ForeignKey("Post")]
        public long PostId { get; set; }

        public bool IsLike { get; set; }
    }
}

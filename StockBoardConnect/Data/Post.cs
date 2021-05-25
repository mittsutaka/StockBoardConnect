using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace StockBoardConnect.Data
{
    public class Post
    {
        public long Id { get; set; }

        public ApplicationUser User { get; set; }

        [ForeignKey("User")]
        public string UserId { get; set; }

        public string Text { get; set; }

        public Company Company { get; set; }

        [ForeignKey("Company")]
        public Guid CompanyId { get; set; }

        public DateTimeOffset CreatedAt { get; set; }

        public DateTimeOffset? UpdatedAt { get; set; }

        public PostPosition PostPosition { get; set; }

        public ICollection<PostLike> PostLikes { get; set; }
    }

    public enum PostPosition
    {
        Neutral,
        Long,
        Short
    }
}

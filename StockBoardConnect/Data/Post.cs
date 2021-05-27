using Newtonsoft.Json;
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

        [JsonProperty("text")]
        public string Text { get; set; }

        public Company Company { get; set; }

        [ForeignKey("Company")]
        public Guid CompanyId { get; set; }

        [JsonProperty("createdAt")]
        public DateTimeOffset CreatedAt { get; set; }

        public DateTimeOffset? UpdatedAt { get; set; }

        public PostPosition PostPosition { get; set; }

        public ICollection<PostLike> PostLikes { get; set; }

        [NotMapped]
        [JsonProperty("userName")]
        public string UserName { get; set; }

        [NotMapped]
        [JsonProperty("good")]
        public int Good { get; set; }

        [NotMapped]
        [JsonProperty("bad")]
        public int Bad { get; set; }


    }

    public enum PostPosition
    {
        Neutral,
        Long,
        Short
    }
}

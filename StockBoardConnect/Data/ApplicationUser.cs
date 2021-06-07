using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;

namespace StockBoardConnect.Data
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser
    {
        [Required]
        [JsonProperty("displayName")]
        public string DisplayName { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }

        [JsonProperty("avatarFileKey")]
        public string AvatarFileKey { get; set; }

        [JsonProperty("extension")]
        public string Extension { get; set; }

        [NotMapped]
        [JsonProperty("avatarFilePath")]
        public string AvatarFilePath => AvatarFileKey != null ? Path.Combine("img", "avatars", $"{AvatarFileKey}.{Extension}") : "";

        [JsonProperty("posts")]
        public ICollection<Post> Posts { get; set; }

        [NotMapped]
        [JsonProperty("avatarFileTempPath")]
        public string AvatarFileTempPath { get; set; }

    }
}

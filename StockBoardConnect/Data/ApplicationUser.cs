using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace StockBoardConnect.Data
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser
    {
        [Required]
        public string DisplayName { get; set; }

        public string Description { get; set; }

        public string AvatarFileKey { get; set; }

        public string Extension { get; set; }

        [NotMapped]
        public string AvatarFilePath => AvatarFileKey != null ? $"/img/avatars/{AvatarFileKey}.{Extension}" : "";

    }
}

using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace StockBoardConnect.Models.AccountViewModels
{
    public class RegisterViewModel
    {
        [Required(ErrorMessage ="{0}の入力は必須です。")]
        [EmailAddress(ErrorMessage="有効なメールアドレスを入力してください")]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "{0}の入力は必須です。")]
        [StringLength(100, ErrorMessage = "{2}文字以上のパスワードを入力してください", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [Compare("Password", ErrorMessage = "パスワードが不一致です。")]
        public string ConfirmPassword { get; set; }
        
        [Required(ErrorMessage = "{0}の入力は必須です。")]
        public string DisplayName { get; set; }

        public string ErrorMessage { get; set; }
    }
}

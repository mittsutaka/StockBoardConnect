using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using StockBoardConnect.Data;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace StockBoardConnect.Areas.Api.Services
{
    public class UsersService
    {
        private readonly ApplicationDbContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;

        public UsersService(ApplicationDbContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            _hostEnvironment = hostEnvironment;
        }

        public async Task<string> StoreAvatarImageAsync(string id, IFormFile file)
        {
            var dirPath = Path.Combine(_hostEnvironment.WebRootPath, "tmp", id);
            if (Directory.Exists(dirPath)) Directory.Delete(dirPath, true);
            Directory.CreateDirectory(dirPath);
            var filePath = Path.Combine(dirPath, file.FileName);
            using (var fs = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(fs);
            }

            return Path.Combine("tmp", id, file.FileName);
        }

        public bool AddAvatarImage(ApplicationUser user,string avatarTempPath)
        {
            var isSuccess = false;
            var dirPath = Path.Combine(_hostEnvironment.WebRootPath, "img", "avatars");
            Directory.CreateDirectory(dirPath);
            var oldPath = Path.Combine(_hostEnvironment.WebRootPath, user.AvatarFilePath);
            user.AvatarFileKey = Guid.NewGuid().ToString();
            user.Extension = Path.GetExtension(avatarTempPath).Replace(".","");

            var sourcePath = Path.Combine(_hostEnvironment.WebRootPath, avatarTempPath);
            var destPath = Path.Combine(_hostEnvironment.WebRootPath, user.AvatarFilePath);
            if (File.Exists(sourcePath))
            {
                try
                {
                    File.Copy(sourcePath, destPath);
                }
                catch(Exception e) { return isSuccess; }
                File.Delete(oldPath);
                isSuccess = true;
            }
            return isSuccess;
        }
    }
}

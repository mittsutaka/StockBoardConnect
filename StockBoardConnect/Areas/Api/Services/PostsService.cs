using Microsoft.EntityFrameworkCore;
using StockBoardConnect.Areas.Api.Models;
using StockBoardConnect.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockBoardConnect.Areas.Api.Services
{
    public class PostsService
    {
        private readonly ApplicationDbContext _context;
        public PostsService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<bool> AddAsync(Guid companyId, string userId, string text, PostPosition position = PostPosition.Neutral)
        {
            var post = new Post
            {
                CompanyId = companyId,
                UserId = userId,
                Text = text,
                CreatedAt = DateTimeOffset.Now,
                PostPosition = position,
            };

            await _context.AddAsync(post);
            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<List<PostViewModel>> GetPostsAsync(Guid companyId)
        {
            return await (from enp in _context.Posts
                          where enp.CompanyId == companyId
                          orderby enp.CreatedAt descending
                          select new PostViewModel
                          {
                              UserName = enp.User.DisplayName,
                              Text = enp.Text,
                              At = enp.CreatedAt.ToString("yyyy/MM/dd HH:mm:ss"),
                              Bad = 20,
                              Good = 10,
                              AvatarFilePath = enp.User.AvatarFilePath
                          }).ToListAsync();
        }

        public async Task<List<PostViewModel>> GetPostsByUserIdAsync(string userId)
        {
            return await (from enu in _context.Users
                          where enu.Id == userId
                          from enp in enu.Posts
                          orderby enp.CreatedAt descending
                          select new PostViewModel
                          {
                              UserName = enp.User.DisplayName,
                              Text = enp.Text,
                              At = enp.CreatedAt.ToString("yyyy/MM/dd HH:mm:ss"),
                              Bad = 20,
                              Good = 10,
                              AvatarFilePath = enp.User.AvatarFilePath,
                              companyId = enp.CompanyId,
                              companyName = enp.Company.Name
                          }).ToListAsync();
        }
    }
}

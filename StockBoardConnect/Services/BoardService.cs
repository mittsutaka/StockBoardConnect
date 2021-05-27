using CsvHelper;
using Microsoft.AspNetCore.Hosting;
using StockBoardConnect.Data;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace StockBoardConnect.Services
{
    public class BoardService
    {
        private readonly ApplicationDbContext _context;
        public BoardService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<bool> AddPostAsync(Guid companyId, string userId, string text, PostPosition position = PostPosition.Neutral)
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


    }
}

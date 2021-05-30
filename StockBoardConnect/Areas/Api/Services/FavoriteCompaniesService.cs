using Microsoft.EntityFrameworkCore;
using StockBoardConnect.Areas.Api.Models;
using StockBoardConnect.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockBoardConnect.Areas.Api.Services
{
    public class FavoriteCompaniesService
    {
        private readonly ApplicationDbContext _context;
        public FavoriteCompaniesService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task AddAsync(Guid companyId,string userId)
        {
            var fc = new FavoriteCompany
            {
                CompanyId = companyId,
                UserId = userId,
                CreatedAt = DateTimeOffset.Now,
                LastReadAt = DateTimeOffset.Now
            };
            await _context.FavoriteCompanies.AddAsync(fc);
            await _context.SaveChangesAsync();
        } 
    }
}

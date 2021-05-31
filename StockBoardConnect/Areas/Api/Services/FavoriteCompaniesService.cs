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

        public async Task<FavoriteCompany> GetAsync(Guid companyId, string userId)
        {
            return await _context.FavoriteCompanies.Where(t => t.UserId == userId && t.CompanyId == companyId).Include(t => t.Company).FirstOrDefaultAsync();
        }

        public async Task<List<FavoriteCompany>> GetFavoriteCompaniesAsync(string userId)
        {
            return await _context.FavoriteCompanies.Where(t => t.UserId == userId).Include(t => t.Company).ToListAsync();
        }

        public async Task<FavoriteCompany> AddAsync(Guid companyId, string userId)
        {
            try
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

                return fc;
            }
            catch { return null; }
        }

        public async Task<bool> RemoveAsync(FavoriteCompany fc)
        {
            try
            {
                _context.FavoriteCompanies.Remove(fc);
                await _context.SaveChangesAsync();

                return true;
            }
            catch { return false; }
        }
    } 
}

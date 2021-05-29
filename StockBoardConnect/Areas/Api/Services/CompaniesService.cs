using Microsoft.EntityFrameworkCore;
using StockBoardConnect.Areas.Api.Models;
using StockBoardConnect.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockBoardConnect.Areas.Api.Services
{
    public class CompaniesService
    {
        private readonly ApplicationDbContext _context;
        public CompaniesService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Company>> GetCompaniesAsync(string keyword, int take)
        {
            return await (from enc in _context.Companies
                          where enc.Code.ToString().Contains(keyword) || enc.Name.Contains(keyword)
                          select enc).Take(take).ToListAsync();
        }
    }
}

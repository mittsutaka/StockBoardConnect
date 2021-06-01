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
    public class ActionService
    {
        private readonly ApplicationDbContext _context;
        private IWebHostEnvironment _hostEnvironment;
        public ActionService(ApplicationDbContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            _hostEnvironment = hostEnvironment;

        }

        public async Task<List<Company>> StoreCompaniesAsync()
        {
            var path = Path.Combine(_hostEnvironment.ContentRootPath, "StaticFiles", "datas", "Companies-210521.csv");
            var list = new List<Company>();
            using (var sr = new StreamReader(path))
            using (var csv = new CsvReader(sr, new CultureInfo("ja-JP", false)))
            {
                csv.Read();
                csv.ReadHeader();
                list = csv.GetRecords<Company>().ToList();
            }

            var createdAt = DateTimeOffset.Now;

            list.ForEach(t => t.CreatedAt = createdAt);

            await _context.Companies.AddRangeAsync(list);
            await _context.SaveChangesAsync();

            return list;
        }


    }
}

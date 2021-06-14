using AngleSharp.Html.Parser;
using CsvHelper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using StockBoardConnect.Data;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net.Http;
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

        public async Task CollectStockPriceAsync()
        {
            var codePrices = new Dictionary<int, double>();

            var tasks = new List<Task>();
            for (var i = 1; i <= 40; i++)
            {
                if (37 <= i && i <= 39) continue;

                await Task.Delay(100);
                tasks.Add(GetCompanyPricesAsync(i, codePrices));
            }
            await Task.WhenAll(tasks);

            var companies = await _context.Companies.ToListAsync();

            foreach (var company in companies)
            {
                if (!codePrices.TryGetValue(company.Code.Value, out double price)) continue;
                company.LastPrice = company.CurrentPrice;
                company.CurrentPrice = price;
            }

            await _context.SaveChangesAsync();
        }

        private static async Task GetCompanyPricesAsync(int index, Dictionary<int, double> codePrices)
        {
            var baseUrl = "https://minkabu.jp/stock/stocksitemap/";
            var client = new HttpClient();
            for (var j = 1; j < 40; j++)
            {
                var url = Path.Combine(baseUrl, $"{index}?page={j}");

                if (!await GetPricesAsync(url, codePrices, client)) return;
            }
        }

        private static async Task<bool> GetPricesAsync(string url, Dictionary<int, double> codePrices, HttpClient client)
        {
            var res = await client.GetAsync(url);
            if (!res.IsSuccessStatusCode) return false;
            var source = await res.Content.ReadAsStringAsync();
            var parser = new HtmlParser();

            var doc = await parser.ParseDocumentAsync(source);

            var elements = doc.QuerySelectorAll("#contents .md_table tr");
            for (var i = 1; i < elements.Length; i++)
            {
                var elementHtml = elements[i].InnerHtml;
                var trDoc = await parser.ParseDocumentAsync(elementHtml);

                if (!int.TryParse(trDoc.QuerySelectorAll(".md_sub")[0].TextContent.Trim(), out int code))
                {
                    continue;
                }

                if (!double.TryParse(trDoc.QuerySelectorAll(".ly_col")[0].TextContent.Trim(), out double price))
                {
                    continue;
                }

                codePrices.Add(code, price);
            }
            return true;
        }
    }
}

using CsvHelper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace StockBoardConnect.Controllers
{
    public class ActionController : Controller
    {
        private IWebHostEnvironment _hostEnvironment;

        public ActionController(IWebHostEnvironment hostEnvironment)
        {
            _hostEnvironment = hostEnvironment;
        }
        public async Task<IActionResult> StoreCompanies()
        {
            var path = Path.Combine(_hostEnvironment.ContentRootPath, "StaticFiles", "datas", "Companies-210521.csv");
            var list = new List<string>();
            using (var sr = new StreamReader(path))
            using (var csv = new CsvReader(sr, null))
            {
                var row = sr.ReadLine();
                list = csv.GetRecords<string>().ToList();
            }
            return Content(JsonConvert.SerializeObject(list));
        }
    }
}

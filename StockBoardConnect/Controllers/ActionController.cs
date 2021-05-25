using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using StockBoardConnect.Services;
using System.Threading.Tasks;

namespace StockBoardConnect.Controllers
{
    public class ActionController : Controller
    {

        private ActionService _service;

        public ActionController(ActionService service)
        {
            _service = service;
        }
        public async Task<IActionResult> StoreCompanies()
        {
            var res = await _service.StoreCompaniesAsync();

            return Content(JsonConvert.SerializeObject(res));
        }
    }
}

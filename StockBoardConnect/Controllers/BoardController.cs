using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockBoardConnect.Controllers
{
    [Authorize]
    public class BoardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [Route("[controller]/{id}")]
        public IActionResult Board(int id)
        {
            return View(id);
        }
    }
}

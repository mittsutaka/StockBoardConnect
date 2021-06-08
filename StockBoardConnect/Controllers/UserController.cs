using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockBoardConnect.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Details(string id)
        {
            return View("Details");
        }

        public IActionResult Test()
        {
            return View();
        }
    }
}

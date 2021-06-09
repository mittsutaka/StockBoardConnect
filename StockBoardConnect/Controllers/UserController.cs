using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace StockBoardConnect.Controllers
{
    [Authorize]
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Details(string id)
        {
            if (id == User.FindFirst(ClaimTypes.NameIdentifier).Value)
            {
                return RedirectToAction("index");
            }

            return View("Details", id);
        }

        public IActionResult Test()
        {
            return View();
        }
    }
}

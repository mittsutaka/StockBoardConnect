using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockBoardConnect.Controllers
{
    [Authorize]
    public class FriendController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

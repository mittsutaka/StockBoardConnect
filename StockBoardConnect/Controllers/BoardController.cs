using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StockBoardConnect.Data;
using StockBoardConnect.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using static StockBoardConnect.Models.ControllerModels.BoardModels;

namespace StockBoardConnect.Controllers
{
    [Authorize]
    public class BoardController : Controller
    {
        private BoardService _service;

        public BoardController(BoardService service)
        {
            _service = service;
        }
        public IActionResult Index(Guid? id)
        {
            return View(id);
        }
    }
}

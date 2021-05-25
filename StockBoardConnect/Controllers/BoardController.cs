using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StockBoardConnect.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

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
        public IActionResult Index()
        {
            return View();
        }

        [Route("[controller]/{id}")]
        public async Task<IActionResult> Board(int id)
        {
            return View(id);
        }

        public async Task<IActionResult> PostAjax(Guid companyId,string text)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            await _service.AddPostAsync(companyId, userId, text);

            return new JsonResult("test");
        }
    }
}

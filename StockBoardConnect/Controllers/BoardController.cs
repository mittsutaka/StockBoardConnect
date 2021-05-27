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
        public IActionResult Index()
        {
            return View();
        }

        [Route("[controller]/{id:int}")]
        public async Task<IActionResult> Board(int id)
        {
            return View(id);
        }

        [HttpPost]
        public async Task<IActionResult> PostAjax([FromBody] PostRequestModel model)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            await _service.AddPostAsync(model.CompanyId, userId, model.Text);

            return new JsonResult(true);
        }

        [HttpGet]
        public async Task<IActionResult> GetPostsAjax(Guid companyId)
        {
            if (companyId == Guid.Empty) return new JsonResult(null);
            var posts = new List<Post>()
            {
                new Post
                {
                    Text = "こんにちは",
                    CreatedAt = DateTimeOffset.Now,
                    UserName = "mittsutaka",
                    Good = 20,
                    Bad = 20
                },
                new Post
                {
                    Text = "mittsutakaさんこんにちは",
                    CreatedAt = DateTimeOffset.Now,
                    UserName = "mittsutaka",
                    Good = 200,
                    Bad = 20
                },
            };

            return new JsonResult(posts);
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using StockBoardConnect.Areas.Api.Models;
using StockBoardConnect.Areas.Api.Services;
using StockBoardConnect.Data;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace StockBoardConnect.Areas.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private PostsService _service;

        public PostsController(PostsService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> Get(Guid companyId)
        {
            if (companyId == Guid.Empty) return new JsonResult(null);
            var posts = new List<Post>()
            {
                new Post
                {
                    Text = "こんにちは",
                    At = DateTimeOffset.Now.ToString("yyyy/MM/dd HH:mm:ss"),
                    UserName = "mittsutaka",
                    Good = 20,
                    Bad = 20
                },
                new Post
                {
                    Text = "mittsutakaさんこんにちは",
                    At = DateTimeOffset.Now.ToString("yyyy/MM/dd HH:mm:ss"),
                    UserName = "mittsutaka",
                    Good = 200,
                    Bad = 20
                },
            };

            return new JsonResult(posts);
        }

        public async Task<IActionResult> Post([FromBody] PostRequestModel model)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            await _service.AddPostAsync(model.CompanyId, userId, model.Text);

            return new JsonResult(true);
        }
    }
}

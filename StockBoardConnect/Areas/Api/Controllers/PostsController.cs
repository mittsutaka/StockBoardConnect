using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using StockBoardConnect.Areas.Api.Models;
using StockBoardConnect.Areas.Api.Services;
using StockBoardConnect.Hubs;
using System;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;

namespace StockBoardConnect.Areas.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private PostsService _service;
        private readonly IHubContext<BoardHub> _hubContext;

        public PostsController(PostsService service, IHubContext<BoardHub> hubContext)
        {
            _service = service;
            _hubContext = hubContext;
        }

        [HttpGet]
        public async Task<IActionResult> Get(Guid companyId)
        {
            if (companyId == Guid.Empty) return new JsonResult(null);
            var posts = await _service.GetPostsAsync(companyId);

            return new JsonResult(posts);
        }

        public async Task<IActionResult> Post([FromBody] PostRequestModel model)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            await _service.AddAsync(model.CompanyId, userId, model.Text);

            await _hubContext.Clients.All.SendAsync("ReceiveMessage");

            Response.StatusCode = (int)HttpStatusCode.Created;

            return new JsonResult(true);
        }
    }
}

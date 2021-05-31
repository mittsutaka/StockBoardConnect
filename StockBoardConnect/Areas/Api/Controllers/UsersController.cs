using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using StockBoardConnect.Areas.Api.Services;
using StockBoardConnect.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockBoardConnect.Areas.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UsersService _service;
        private readonly UserManager<ApplicationUser> _userManager;

        public UsersController(UserManager<ApplicationUser> userManager,UsersService service)
        {
            _userManager = userManager;
            _service = service;
        }
        [HttpGet("me")]
        public async Task<IActionResult> GetMe()
        {
            return new JsonResult(await _userManager.GetUserAsync(User));
        }
    }
}

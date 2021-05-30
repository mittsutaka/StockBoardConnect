using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StockBoardConnect.Areas.Api.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace StockBoardConnect.Areas.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoriteCompaniesController : ControllerBase
    {
        private FavoriteCompaniesService _service;

        public FavoriteCompaniesController(FavoriteCompaniesService service)
        {
            _service = service;
        }

        public async Task<IActionResult> Post(Guid companyId)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier).Value;

            await _service.AddAsync(companyId, userId);

            return new JsonResult("");
        }
    }
}

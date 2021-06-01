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
    public class CompaniesController : ControllerBase
    {
        private readonly CompaniesService _service;

        public CompaniesController(CompaniesService service)
        {
            _service = service;
        }

        public async Task<IActionResult> Get(string keyword, int take)
        {
            var companies = await _service.GetCompaniesAsync(keyword, take);
            return new JsonResult(companies);
        }
    }
}

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using StockBoardConnect.Areas.Api.Models;
using StockBoardConnect.Areas.Api.Services;
using StockBoardConnect.Areas.Api.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
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

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            var favoriteCompanies = await _service.GetFavoriteCompaniesAsync(userId);
            
            Response.StatusCode = (int)HttpStatusCode.OK;

            return new JsonResult(favoriteCompanies);
        }

        public async Task<IActionResult> Post([FromBody] FavoriteCompaniesRequestModel model)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier).Value;

            var fc = await _service.AddAsync(model.CompanyId, userId);

            if (fc != null)
            {
                Response.StatusCode = (int)HttpStatusCode.Created;
                return new JsonResult((await _service.GetAsync(model.CompanyId, userId)));
            }

            Response.StatusCode = (int)HttpStatusCode.InternalServerError;

            return new JsonResult("エラーが発生しました。");
        }
    }
}

﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using StockBoardConnect.Areas.Api.Models;
using StockBoardConnect.Areas.Api.Services;
using StockBoardConnect.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace StockBoardConnect.Areas.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UsersController : ControllerBase
    {
        private readonly UsersService _service;
        private readonly UserManager<ApplicationUser> _userManager;

        public UsersController(UserManager<ApplicationUser> userManager, UsersService service)
        {
            _userManager = userManager;
            _service = service;
        }

        [HttpGet("me")]
        public async Task<IActionResult> GetMe()
        {
            var user = await _userManager.GetUserAsync(User);

            var model = new UserResponseModel()
            {
                Id = user.Id,
                DisplayName = user.DisplayName,
                AvatarFilePath = user.AvatarFilePath,
                Description = user.Description,
                Email = user.Email
            };

            return new JsonResult(model);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            var user = await _userManager.FindByIdAsync(id);

            var model = new UserResponseModel()
            {
                Id = user.Id,
                DisplayName = user.DisplayName,
                AvatarFilePath = user.AvatarFilePath,
                Description = user.Description,
                Email = user.Email
            };

            return new JsonResult(model);
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> Patch(string id, ApplicationUser editUser)
        {
            if (id != editUser.Id)
            {
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return new JsonResult("エラー");
            }

            var user = await _userManager.GetUserAsync(User);
            user.Description = editUser.Description;
            user.DisplayName = editUser.DisplayName;
            user.Email = editUser.Email;

            try
            {
                if (!string.IsNullOrWhiteSpace(editUser.AvatarFileTempPath))
                {
                    _service.AddAvatarImage(user, editUser.AvatarFileTempPath);
                }
                else
                {
                    user.AvatarFileKey = user.AvatarFileKey;
                    user.Extension = user.Extension;
                }

                var res = await _userManager.UpdateAsync(user);

                Response.StatusCode = (int)HttpStatusCode.OK;

                var model = new UserResponseModel()
                {
                    Id = user.Id,
                    DisplayName = user.DisplayName,
                    AvatarFilePath = user.AvatarFilePath,
                    Description = user.Description,
                    Email = user.Email
                };

                return new JsonResult(model);
            }
            catch
            {
                Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                return new JsonResult("エラーが発生しました");
            }
        }

        [HttpPost("{id}/Files/Avatar")]
        public async Task<IActionResult> PostAvatarImage(string id, IFormFile file)
        {
            if (!_service.ValidateFileSize(file))
            {
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return new JsonResult("選択した画像は3MBを越えています。");
            }

            var url = await _service.StoreAvatarImageAsync(id, file);

            return new JsonResult(url);
        }
    }
}

﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockBoardConnect.Areas.Api.Models
{
    public class PostRequestModel
    {
        public Guid CompanyId { get; set; }

        public string Text { get; set; }
    }

    public class PostViewModel
    {
        [JsonProperty("userName")]
        public string UserName { get; set; }

        [JsonProperty("text")]
        public string Text { get; set; }

        [JsonProperty("good")]
        public int Good { get; set; }

        [JsonProperty("bad")]
        public int Bad { get; set; }

        [JsonProperty("at")]
        public string At { get; set; }
    }
}
using CsvHelper.Configuration.Attributes;
using System;

namespace StockBoardConnect.Data
{
    public class Company
    {
        [Ignore]
        public Guid Id { get; set; }

        [Index(2)]
        public string Name { get; set; }

        [Ignore]
        public string AlphabetName { get; set; }

        [Index(1)]
        public int? Code { get; set; }

        [Index(3)]
        public string MarketName { get; set; }

        [Index(4)]
        public int? TypeCodeMain { get; set; }

        [Index(5)]
        public string TypeCodeMainString { get; set; }

        [Index(6)]
        public int? TypeCodeSub { get; set; }

        [Index(7)]
        public string TypeCodeSubString { get; set; }
        
        [Index(8)]
        public int? ScaleCode { get; set; }
        
        [Index(9)]
        public string ScaleCodeName { get; set; }

        [Ignore]
        public double CurrentPrice { get; set; }
        
        [Ignore]
        public double LastPrice { get; set; }

        [Ignore]
        public DateTimeOffset CreatedAt { get; set; }

        [Ignore]
        public DateTimeOffset? UpdatedAt { get; set; }
    }
}

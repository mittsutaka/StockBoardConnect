using Microsoft.EntityFrameworkCore.Migrations;

namespace StockBoardConnect.Data.Migrations
{
    public partial class AddPriceToCompany : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CurrentPrice",
                table: "Companies",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "LastPrice",
                table: "Companies",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CurrentPrice",
                table: "Companies");

            migrationBuilder.DropColumn(
                name: "LastPrice",
                table: "Companies");
        }
    }
}

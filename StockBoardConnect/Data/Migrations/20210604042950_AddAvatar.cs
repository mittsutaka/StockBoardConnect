using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace StockBoardConnect.Data.Migrations
{
    public partial class AddAvatar : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "AvatarFileKey",
                table: "AspNetUsers",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Extension",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AvatarFileKey",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Extension",
                table: "AspNetUsers");
        }
    }
}

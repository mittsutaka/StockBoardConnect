using Microsoft.EntityFrameworkCore.Migrations;

namespace StockBoardConnect.Data.Migrations
{
    public partial class AddUsersDisplayName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DisplayName",
                table: "AspNetUsers",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_DisplayName",
                table: "AspNetUsers",
                column: "DisplayName",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_DisplayName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "DisplayName",
                table: "AspNetUsers");
        }
    }
}

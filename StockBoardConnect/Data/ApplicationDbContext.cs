using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace StockBoardConnect.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        { }

        public DbSet<Company> Companies { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<PostLike> PostLikes { get; set; }
        public DbSet<FavoriteCompany> FavoriteCompanies { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<PostLike>()
                .HasKey(c => new { c.PostId, c.UserId });

            modelBuilder.Entity<FavoriteCompany>()
                .HasKey(c => new { c.UserId, c.CompanyId });

            modelBuilder.Entity<ApplicationUser>()
                .HasIndex(c => c.DisplayName).IsUnique();
        }
    }
}

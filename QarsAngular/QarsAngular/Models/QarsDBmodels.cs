using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace QarsAngular.Models
{
    public class CarsContext : DbContext
    {

        //this is actual entity object linked to the Cars in our DB
        [NotMapped]
        public DbSet<Car> Cars { get; set; }


        //this is actual entity object linked to the Carmodels in our DB
        [NotMapped]
        public DbSet<Carmodel> CarModels { get; set; }


       // protected override void OnModelCreating(ModelBuilder modelBuilder)
       // {
       //     modelBuilder.Entity<Car>().HasKey(c => c.licenseplate);
       //     modelBuilder.Entity<Carmodel>().HasKey(cm => cm.code);
//
       //     modelBuilder.Entity<Car>()
       //     .HasOne<Carmodel>(c => c.Carmodellink)
       //     .WithMany(cm => cm.Carlist);
       //     modelBuilder.Entity<Carmodel>()
       //     .HasMany<Car>(cm => cm.Carlist)
       //     .WithOne(c => c.Carmodellink);
       // }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //here we define the name of our database (make sure to put the correct password)
            optionsBuilder.UseNpgsql("UserID=postgres;Password=46183;Host=localhost;Port=5432;Database=QarsDB;Pooling=true;");
        }
    }
}

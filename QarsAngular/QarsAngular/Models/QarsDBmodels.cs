using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace QarsAngular.Models
{
    public class CarsContext : DbContext
    {

        //these are the actual entity objects linked to the Tables in our QarsDB
        public DbSet<Car> Cars { get; set; }
        public DbSet<Carmodel> CarModels { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Serviceboeking> ServiceBoekings { get; set; }

        public CarsContext(DbContextOptions<CarsContext> dbContextOptions) : base(dbContextOptions)
        {

        }
        public CarsContext()
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Car>().HasKey(c => c.licenseplate);
            modelBuilder.Entity<Carmodel>().HasKey(cm => cm.code);
            modelBuilder.Entity<Booking>().HasKey(b => b.carlicenceplate);
            modelBuilder.Entity<Location>().HasKey(l => l.code);
            modelBuilder.Entity<Customer>().HasKey(cu => cu.username);
            modelBuilder.Entity<Serviceboeking>().HasKey(sb => sb.serviceidentification);

            modelBuilder.Entity<Car>()
            .HasOne(c => c.Carmodellink)
            .WithMany(cm => cm.Carlist)
            .HasForeignKey(c => c.carmodel);
        }
    }
}

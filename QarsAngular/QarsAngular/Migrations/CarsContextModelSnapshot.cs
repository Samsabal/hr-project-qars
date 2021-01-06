﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using QarsAngular.Models;

namespace QarsAngular.Migrations
{
    [DbContext(typeof(CarsContext))]
    partial class CarsContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn)
                .HasAnnotation("ProductVersion", "3.1.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("QarsAngular.Models.Booking", b =>
                {
                    b.Property<string>("carlicenceplate")
                        .HasColumnType("text");

                    b.Property<DateTime>("begindate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<DateTime>("bookingdate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("customerusername")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("dropofflocationcode")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("enddate")
                        .HasColumnType("integer");

                    b.Property<string>("pickuplocationcode")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<double>("totalamount")
                        .HasColumnType("double precision");

                    b.HasKey("carlicenceplate");

                    b.ToTable("Bookings");
                });

            modelBuilder.Entity("QarsAngular.Models.Car", b =>
                {
                    b.Property<string>("licenseplate")
                        .HasColumnType("text");

                    b.Property<int>("carmodel")
                        .HasColumnType("integer");

                    b.Property<string>("locationcode")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("mileage")
                        .HasColumnType("integer");

                    b.HasKey("licenseplate");

                    b.HasIndex("carmodel");

                    b.ToTable("Cars");
                });

            modelBuilder.Entity("QarsAngular.Models.Carmodel", b =>
                {
                    b.Property<int>("code")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<bool>("airconditioning")
                        .HasColumnType("boolean");

                    b.Property<string>("brand")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("category")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<double>("dayrate")
                        .HasColumnType("double precision");

                    b.Property<string>("description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("doors")
                        .HasColumnType("integer");

                    b.Property<double>("efficiency")
                        .HasColumnType("double precision");

                    b.Property<int>("emission")
                        .HasColumnType("integer");

                    b.Property<int>("freemileage")
                        .HasColumnType("integer");

                    b.Property<string>("fueltype")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<double>("kmrate")
                        .HasColumnType("double precision");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("passengers")
                        .HasColumnType("integer");

                    b.Property<int>("suitcases")
                        .HasColumnType("integer");

                    b.Property<string>("transmission")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("type")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("version")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("code");

                    b.ToTable("CarModels");
                });

            modelBuilder.Entity("QarsAngular.Models.Customer", b =>
                {
                    b.Property<string>("username")
                        .HasColumnType("text");

                    b.Property<string>("address")
                        .HasColumnType("text");

                    b.Property<string>("city")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("countryCode")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("emailAddress")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("familyName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("givenName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("password")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("phoneNumber")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("zip")
                        .HasColumnType("text");

                    b.HasKey("username");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("QarsAngular.Models.Location", b =>
                {
                    b.Property<string>("code")
                        .HasColumnType("text");

                    b.Property<string>("address")
                        .HasColumnType("text");

                    b.Property<string>("city")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("countrycode")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("phonenumber")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("zip")
                        .HasColumnType("text");

                    b.HasKey("code");

                    b.ToTable("Locations");
                });

            modelBuilder.Entity("QarsAngular.Models.Serviceboeking", b =>
                {
                    b.Property<string>("serviceidentification")
                        .HasColumnType("text");

                    b.Property<DateTime>("enddate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("licenseplate")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("startdate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("status")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("type")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("serviceidentification");

                    b.ToTable("ServiceBoekings");
                });

            modelBuilder.Entity("QarsAngular.Models.Car", b =>
                {
                    b.HasOne("QarsAngular.Models.Carmodel", "Carmodel")
                        .WithMany("Carlist")
                        .HasForeignKey("carmodel")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}

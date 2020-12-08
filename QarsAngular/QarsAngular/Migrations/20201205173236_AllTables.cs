using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace QarsAngular.Migrations
{
    public partial class AllTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Bookings",
                columns: table => new
                {
                    carlicenceplate = table.Column<string>(nullable: false),
                    customerusername = table.Column<string>(nullable: false),
                    pickuplocationcode = table.Column<string>(nullable: false),
                    dropofflocationcode = table.Column<string>(nullable: false),
                    totalamount = table.Column<double>(nullable: false),
                    bookingdate = table.Column<DateTime>(nullable: false),
                    begindate = table.Column<DateTime>(nullable: false),
                    enddate = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bookings", x => x.carlicenceplate);
                });

            migrationBuilder.CreateTable(
                name: "CarModels",
                columns: table => new
                {
                    code = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    brand = table.Column<string>(nullable: false),
                    type = table.Column<string>(nullable: false),
                    version = table.Column<string>(nullable: false),
                    category = table.Column<string>(nullable: false),
                    fueltype = table.Column<string>(nullable: false),
                    dayrate = table.Column<double>(nullable: false),
                    freemileage = table.Column<int>(nullable: false),
                    kmrate = table.Column<double>(nullable: false),
                    passengers = table.Column<int>(nullable: false),
                    doors = table.Column<int>(nullable: false),
                    suitcases = table.Column<int>(nullable: false),
                    transmission = table.Column<string>(nullable: false),
                    airconditioning = table.Column<bool>(nullable: false),
                    efficiency = table.Column<double>(nullable: false),
                    emission = table.Column<int>(nullable: false),
                    name = table.Column<string>(nullable: false),
                    description = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarModels", x => x.code);
                });

            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    username = table.Column<string>(nullable: false),
                    password = table.Column<string>(nullable: false),
                    givenName = table.Column<string>(nullable: false),
                    familyName = table.Column<string>(nullable: false),
                    countryCode = table.Column<string>(nullable: false),
                    city = table.Column<string>(nullable: false),
                    address = table.Column<string>(nullable: false),
                    zip = table.Column<string>(nullable: false),
                    phoneNumber = table.Column<string>(nullable: false),
                    emailAddress = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.username);
                });

            migrationBuilder.CreateTable(
                name: "Locations",
                columns: table => new
                {
                    code = table.Column<string>(nullable: false),
                    name = table.Column<string>(nullable: false),
                    countrycode = table.Column<string>(nullable: false),
                    city = table.Column<string>(nullable: false),
                    address = table.Column<string>(nullable: false),
                    zip = table.Column<string>(nullable: true),
                    phonenumber = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Locations", x => x.code);
                });

            migrationBuilder.CreateTable(
                name: "ServiceBoekings",
                columns: table => new
                {
                    serviceidentification = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    licenseplate = table.Column<string>(nullable: false),
                    startdate = table.Column<DateTime>(nullable: false),
                    enddate = table.Column<DateTime>(nullable: false),
                    status = table.Column<string>(nullable: false),
                    type = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceBoekings", x => x.serviceidentification);
                });

            migrationBuilder.CreateTable(
                name: "Cars",
                columns: table => new
                {
                    licenseplate = table.Column<string>(nullable: false),
                    carmodel = table.Column<int>(nullable: false),
                    mileage = table.Column<int>(nullable: false),
                    locationcode = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cars", x => x.licenseplate);
                    table.ForeignKey(
                        name: "FK_Cars_CarModels_carmodel",
                        column: x => x.carmodel,
                        principalTable: "CarModels",
                        principalColumn: "code",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cars_carmodel",
                table: "Cars",
                column: "carmodel");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Bookings");

            migrationBuilder.DropTable(
                name: "Cars");

            migrationBuilder.DropTable(
                name: "Customers");

            migrationBuilder.DropTable(
                name: "Locations");

            migrationBuilder.DropTable(
                name: "ServiceBoekings");

            migrationBuilder.DropTable(
                name: "CarModels");
        }
    }
}

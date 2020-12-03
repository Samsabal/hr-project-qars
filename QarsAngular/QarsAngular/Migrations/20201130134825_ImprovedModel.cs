using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace QarsAngular.Migrations
{
    public partial class ImprovedModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                name: "Cars",
                columns: table => new
                {
                    licenseplate = table.Column<string>(nullable: false),
                    carmodel = table.Column<int>(nullable: false),
                    mileage = table.Column<int>(nullable: false),
                    locationcode = table.Column<string>(nullable: false),
                    Carmodellinkcode = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cars", x => x.licenseplate);
                    table.ForeignKey(
                        name: "FK_Cars_CarModels_Carmodellinkcode",
                        column: x => x.Carmodellinkcode,
                        principalTable: "CarModels",
                        principalColumn: "code",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cars_Carmodellinkcode",
                table: "Cars",
                column: "Carmodellinkcode");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cars");

            migrationBuilder.DropTable(
                name: "CarModels");
        }
    }
}

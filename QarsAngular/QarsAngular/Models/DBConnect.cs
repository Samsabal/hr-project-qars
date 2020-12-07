using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace QarsAngular.Models{
    public class DBConnect: DbContext{

        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){
            optionsBuilder.UseNpgsql("User ID=postgres; Password=123; Host=localhost; Port=5432; Database=qars; Pooling=true;");
            
        }
        
    }
}




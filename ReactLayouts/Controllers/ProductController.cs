using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactLayouts.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpPost]
        [Route("get")]
        public async Task<IActionResult> GetData() 
        {
            return await Task.Run(() => {
                List<object> list = new List<object> {
                    new {
                        code= "1",
                        name= "Belarus",
                        category= "Трактори",
                        price= 100000,
                        image= "1.jpg"
                    },
                    new {
                        code= "2",
                        name= "ЛУАЗ",
                        category= "Легкові машини",
                        price= 44000,
                        image= "2.jpg"
                    }
                };
                return Ok(new { 
                    list
                });
            });
        }
    }
}

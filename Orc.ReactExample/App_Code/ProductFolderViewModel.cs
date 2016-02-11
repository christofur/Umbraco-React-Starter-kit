using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Orc.ReactExample.Models
{
    public class ProductFolderViewModel
    {
        public ProductFolderViewModel()
        {
            Products = new List<ProductViewModel>();
        }
        public List<ProductViewModel> Products { get; set; }
    }

  
}
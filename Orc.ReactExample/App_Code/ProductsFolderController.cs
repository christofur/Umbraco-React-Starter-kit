using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Orc.ReactExample.Helpers;
using Orc.ReactExample.Models;
using Umbraco.Web;
using Umbraco.Web.Models;

namespace Orc.ReactExample.Controllers
{
    public class ProductsFolderController : Umbraco.Web.Mvc.RenderMvcController
    { 
        public override ActionResult Index(RenderModel model)
        {
            var products = model.Content.Children();
            var viewModel = new ProductFolderViewModel();
            
            foreach (var productContent in products)
            {
                var productModel = new ProductViewModel();

                productModel.Content= productContent.GetPropertyValue<string>("bodyText")
                    .ScrubHtml()
                    .Truncate(200, true, true);

                productModel.UrlName = productContent.UrlName;
                productModel.Title = productContent.Name;
                productModel.NumberOfComments = productContent.Descendants("Comment").Count();
                viewModel.Products.Add(productModel);
            }

            if (Request.IsAjaxRequest())
            {
                return Json(viewModel);
            }

            ViewBag.Model = viewModel;
            
            //Do some stuff here, then return the base method
            return base.Index(model);
        }

    }
}
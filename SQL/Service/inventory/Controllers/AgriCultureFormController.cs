using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using inventory.Models;

namespace inventory.Controllers
{
    public class AgriCultureFormController : ApiController
    {
        AgriCultureFormBL objAgriCultureFormBL = new AgriCultureFormBL();
        [HttpPost]
        public HttpResponseMessage Post(AgriCultureForm objAgriCultureForm)
        {
            //Address address = new Address();
            //string strId = addressData.id;
            try
            {
                //if (Convert.ToInt32(strId) == 0)
                //{
                objAgriCultureFormBL.PostAgriculturalForm(objAgriCultureForm);
                //}
                //else
                //{
                //    ObjAddressBL.updateAddressToDb(addressData, Convert.ToInt32(strId));
                //}

                return Request.CreateResponse(HttpStatusCode.Created);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
    }
}

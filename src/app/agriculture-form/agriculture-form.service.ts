import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgricultureFormService {
  // private BASE_URL = 'http://localhost:55547/';
  private BASE_URL = 'http://203.112.144.38/uat_InventoryService/';
  private ADMIN_BASE_URL = 'http://203.112.144.38/uat_AdminApi/api/';

  private INSER_AGRICULTURE_FORM = this.BASE_URL + 'api/AgriCultureForm';
  private GET_ADDRESS_BASED_ON_PINCODE = this.ADMIN_BASE_URL + 'Pincode/GetCityState';

  constructor(
    public http: HttpClient
  ) { }

  insertAgricultureForm(agricultureFrom) {
    return this.http.post(this.INSER_AGRICULTURE_FORM, agricultureFrom);
  }

  getAddressDetailsBasedOnPinCode(pinCode: string) {
    const data = { 'pincode': pinCode }
    let reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.GET_ADDRESS_BASED_ON_PINCODE, data, { headers: reqHeader });
  }


}

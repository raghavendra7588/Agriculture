import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgricultureFormService {


  private INSER_AGRICULTURE_FORM = environment.ADMIN_URL + 'User/AddFarmerorFPO';

  private GET_ADDRESS_BASED_ON_PINCODE = environment.ADMIN_BASE_URL + 'Pincode/GetCityState';
  private GET_FARMER_MASTER_DATA = environment.ADMIN_APP_API + 'JsonFiles/farmerMasterData.json';
  private GET_ALL_FPO_LIST = environment.ADMIN_BASE_URL + 'User/AllFPO';

  constructor(
    public http: HttpClient
  ) { }

  insertAgricultureForm(agricultureFrom) {
    console.log(this.INSER_AGRICULTURE_FORM);
    return this.http.post(this.INSER_AGRICULTURE_FORM, agricultureFrom);
  }

  getAddressDetailsBasedOnPinCode(pinCode: string) {
    const data = { 'pincode': pinCode }
    let reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.GET_ADDRESS_BASED_ON_PINCODE, data, { headers: reqHeader });
  }

  getFarmerMasterData() {
    return this.http.get(this.GET_FARMER_MASTER_DATA);
  }

  getAllFpoList() {
    return this.http.get(this.GET_ALL_FPO_LIST);
  }
}

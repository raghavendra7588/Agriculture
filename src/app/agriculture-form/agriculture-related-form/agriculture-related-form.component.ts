import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAgricultureRelatedFormComponent } from '../dialog-agriculture-related-form/dialog-agriculture-related-form.component';

import { FormBuilder, FormGroup, Validators, FormControl, NumberValueAccessor } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AgricultureForm } from '../agriculture-form.model'
// import { AppDateAdapter, APP_DATE_FORMATS } from './date.adapter';
import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from "@angular/material/core";
import { AppDateAdapter, APP_DATE_FORMATS } from './date.adapter';
import { AgricultureFormService } from '../agriculture-form.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as _ from "lodash";
import { EmitterService } from 'src/app/shared/emitter.service';
import { DialogResponseSavedComponent } from '../dialog-response-saved/dialog-response-saved.component';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-agriculture-related-form',
  templateUrl: './agriculture-related-form.component.html',
  styleUrls: ['./agriculture-related-form.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: APP_DATE_FORMATS
    }
  ]
})
export class AgricultureRelatedFormComponent implements OnInit {

  waterLevel: any;
  cropType: any;
  saveAgricultureForm: FormGroup;
  agricultureForm: AgricultureForm = new AgricultureForm();
  maxLengthPhone = 10;
  maxLengthPinCode = 6;
  maxLengthAadharCard = 12;
  maxLengthPanCard = 10;
  maxLengthYearOfPurchase = 4;
  well: any = [];
  liveStock: any = [];
  facebookData: any = [];
  isLiveStockDetails: boolean = false;
  districtJSON: any = [];
  prevDistrictJSON: any = [];
  onlyDistrictJSON: any = [];
  prevOnlyDistrictJSON: any = [];
  farmerMasterData: any = [];
  areaData: any = [];
  waterArrangement: any = [];
  productType: any = [];
  majorCropType: any = [];
  minorCropType: any = [];
  tractorData: any = [];

  fpoList: any = [];
  filteredListFpo: any = [];

  selectedFpoID: string = '';
  selectedFpoName: string = '';
  isIndividualFarmerYN: string = 'N';
  maxDate: any;
  apiResponse: any;
  isClickedOnce: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    public dialog: MatDialog,
    private agricultureFormService: AgricultureFormService,
    private toastr: ToastrService,
    public router: Router,
    public emitterService: EmitterService) {

    this.saveAgricultureForm = this.formBuilder.group({
      fpo: [''],
      firstname: [''],
      lastname: [''],
      dob: [''],
      panno: [''],
      aadharno: [''],
      mobileno: [''],
      emailid: [''],
      address: [''],
      area: [''],
      gaon: [''],
      taluka: [''],
      district: [''],
      state: [''],
      pincode: [''],
      areainguntha: [''],
      well: [''],
      waterlevel: [''],
      croptype: [''],
      productType: [''],
      nooftimesinyear: [''],
      majorcrop: [''],
      majorcropType: [''],
      minorcrop: [''],
      minorcropType: [''],
      majorcroparea: [''],
      smallcroparea: [''],
      majorcropoutput: [''],
      smallcropoutput: [''],
      livestock: [''],
      livestocksdetails: [''],
      tractor: [''],
      make: [''],
      model: [''],
      yearofpurchase: [''],
      capacity: [''],
      trollies: [''],
      permanentlabour: [''],
      temporarylabour: [''],
      facebookselect: [''],
      facebook: [''],
      areainacre: [''],
      fpodistrict: ['']
    });
    this.saveAgricultureForm.controls.livestocksdetails.disable();
    this.saveAgricultureForm.controls.facebook.disable();
    this.saveAgricultureForm.controls.make.disable();
    this.saveAgricultureForm.controls.model.disable();
    this.saveAgricultureForm.controls.yearofpurchase.disable();
    this.saveAgricultureForm.controls.capacity.disable();

    this.emitterService.isLanguageChanged.subscribe(val => {
      if (val) {
        this.toastr.success('Your Response Is Submitted');
        this.clearValues();
      }
    });
  }

  ngOnInit(): void {
    this.maxDate = new Date();
    this.getFarmerMasterData();
    this.getAllFpoList();

    this.cropType = [
      { id: 0, title: 'Rabbi' },
      { id: 1, title: 'Kharip' },
      { id: 2, title: 'Both' },
    ];

    this.well = [
      { id: 0, title: 'Yes' },
      { id: 1, title: 'No' },
    ];

    this.liveStock = [
      { id: 0, title: 'Yes' },
      { id: 1, title: 'No' },
    ];
    this.tractorData = [
      { id: 0, title: 'Yes' },
      { id: 1, title: 'No' }
    ];
    this.facebookData = [
      { id: 0, title: 'Yes' },
      { id: 1, title: 'No' },
    ];



  }

  saveForm() {
    this.isClickedOnce = true;
    if (this.agricultureForm.fpo === null || this.agricultureForm.fpo === undefined || this.agricultureForm.fpo === '') {
      this.agricultureForm.fpo = "";
    }

    if (this.agricultureForm.fpoDistrictName === null || this.agricultureForm.fpoDistrictName === undefined || this.agricultureForm.fpoDistrictName === '') {
      this.agricultureForm.fpoDistrictName = "";
    }

    if (this.agricultureForm.firstName === null || this.agricultureForm.firstName === undefined || this.agricultureForm.firstName === '') {
      this.agricultureForm.firstName = "";
    }

    if (this.agricultureForm.lastName === null || this.agricultureForm.lastName === undefined || this.agricultureForm.lastName === '') {
      this.agricultureForm.lastName = "";
    }

    if (this.agricultureForm.panNo === null || this.agricultureForm.panNo === undefined || this.agricultureForm.panNo === '') {
      this.agricultureForm.panNo = "";
    }

    if (this.agricultureForm.aadharNo === null || this.agricultureForm.aadharNo === undefined || this.agricultureForm.aadharNo === '') {
      this.agricultureForm.aadharNo = "";
    }


    if (this.agricultureForm.dob === null || this.agricultureForm.dob === undefined || this.agricultureForm.dob === '') {
      this.agricultureForm.dob = "";
    }
    else {
      let fullDate
      fullDate = this.valueChanged();
      this.agricultureForm.dob = fullDate.toString();
    }

    if (this.agricultureForm.emailId === null || this.agricultureForm.emailId === undefined || this.agricultureForm.emailId === '') {
      this.agricultureForm.emailId = "";
    }

    if (this.agricultureForm.mobileNo === null || this.agricultureForm.mobileNo === undefined || this.agricultureForm.mobileNo === '') {
      this.agricultureForm.mobileNo = "";
    }


    if (this.agricultureForm.address === null || this.agricultureForm.address === undefined || this.agricultureForm.address === '') {
      this.agricultureForm.address = "";
    }

    if (this.agricultureForm.gaon === null || this.agricultureForm.gaon === undefined || this.agricultureForm.gaon === '') {
      this.agricultureForm.gaon = "";
    }

    if (this.agricultureForm.taluka === null || this.agricultureForm.taluka === undefined || this.agricultureForm.taluka === '') {
      this.agricultureForm.taluka = "";
    }

    if (this.agricultureForm.district === null || this.agricultureForm.district === undefined || this.agricultureForm.district === '') {
      this.agricultureForm.district = "";
    }

    if (this.agricultureForm.state === null || this.agricultureForm.state === undefined || this.agricultureForm.state === '') {
      this.agricultureForm.state = "";
    }

    if (this.agricultureForm.pincode === null || this.agricultureForm.pincode === undefined || this.agricultureForm.pincode === '') {
      this.agricultureForm.pincode = "";
    }

    if (this.agricultureForm.areaGuntha === null || this.agricultureForm.areaGuntha === undefined || this.agricultureForm.areaGuntha === '') {
      this.agricultureForm.areaGuntha = "";
    }


    if (this.agricultureForm.well === null || this.agricultureForm.well === undefined || this.agricultureForm.well === '') {
      this.agricultureForm.well = "";
    }

    if (this.agricultureForm.waterLevelPerYear === null || this.agricultureForm.waterLevelPerYear === undefined || this.agricultureForm.waterLevelPerYear === '') {
      this.agricultureForm.waterLevelPerYear = "";
    }

    if (this.agricultureForm.cropType === null || this.agricultureForm.cropType === undefined || this.agricultureForm.cropType === '') {
      this.agricultureForm.cropType = "";
    }

    if (this.agricultureForm.noOfTimesInYear === null || this.agricultureForm.noOfTimesInYear === undefined || this.agricultureForm.noOfTimesInYear === '') {
      this.agricultureForm.noOfTimesInYear = "";
    }


    if (this.agricultureForm.majorCrop === null || this.agricultureForm.majorCrop === undefined || this.agricultureForm.majorCrop === '') {
      this.agricultureForm.majorCrop = "";
    }

    if (this.agricultureForm.minorCrop === null || this.agricultureForm.minorCrop === undefined || this.agricultureForm.minorCrop === '') {
      this.agricultureForm.minorCrop = "";
    }

    if (this.agricultureForm.majorCropArea === null || this.agricultureForm.majorCropArea === undefined || this.agricultureForm.majorCropArea === '') {
      this.agricultureForm.majorCropArea = "";
    }

    if (this.agricultureForm.smallCropArea === null || this.agricultureForm.smallCropArea === undefined || this.agricultureForm.smallCropArea === '') {
      this.agricultureForm.smallCropArea = "";
    }
    if (this.agricultureForm.majorCropOutput === null || this.agricultureForm.majorCropOutput === undefined || this.agricultureForm.majorCropOutput === '') {
      this.agricultureForm.majorCropOutput = "";
    }


    if (this.agricultureForm.smallCropOutput === null || this.agricultureForm.smallCropOutput === undefined || this.agricultureForm.smallCropOutput === '') {
      this.agricultureForm.smallCropOutput = "";
    }

    if (this.agricultureForm.liveStock === null || this.agricultureForm.liveStock === undefined || this.agricultureForm.liveStock === '') {
      this.agricultureForm.liveStock = "";
    }

    if (this.agricultureForm.tractor === null || this.agricultureForm.tractor === undefined || this.agricultureForm.tractor === '') {
      this.agricultureForm.tractor = "";
    }

    if (this.agricultureForm.make === null || this.agricultureForm.make === undefined || this.agricultureForm.make === '') {
      this.agricultureForm.make = "";
    }
    if (this.agricultureForm.model === null || this.agricultureForm.model === undefined || this.agricultureForm.model === '') {
      this.agricultureForm.model = "";
    }
    if (this.agricultureForm.yearOfPurchase === null || this.agricultureForm.yearOfPurchase === undefined || this.agricultureForm.yearOfPurchase === '') {
      this.agricultureForm.yearOfPurchase = "";
    }

    if (this.agricultureForm.capacity === null || this.agricultureForm.capacity === undefined || this.agricultureForm.capacity === '') {
      this.agricultureForm.capacity = "";
    }

    if (this.agricultureForm.trollies === null || this.agricultureForm.trollies === undefined || this.agricultureForm.trollies === '') {
      this.agricultureForm.trollies = "";
    }

    if (this.agricultureForm.permanentLabour === null || this.agricultureForm.permanentLabour === undefined || this.agricultureForm.permanentLabour === '') {
      this.agricultureForm.permanentLabour = "";
    }
    if (this.agricultureForm.temporaryLabour === null || this.agricultureForm.temporaryLabour === undefined || this.agricultureForm.temporaryLabour === '') {
      this.agricultureForm.temporaryLabour = "";
    }
    if (this.agricultureForm.liveStockDetails === null || this.agricultureForm.liveStockDetails === undefined || this.agricultureForm.liveStockDetails === '') {
      this.agricultureForm.liveStockDetails = "";
    }

    if (this.agricultureForm.FaceBookDetails === null || this.agricultureForm.FaceBookDetails === undefined || this.agricultureForm.FaceBookDetails === '') {
      this.agricultureForm.FaceBookDetails = "";
    }

    if (this.agricultureForm.FaceBookID === null || this.agricultureForm.FaceBookID === undefined || this.agricultureForm.FaceBookID === '') {
      this.agricultureForm.FaceBookID = "";
    }

    if (this.agricultureForm.areaInAcre === null || this.agricultureForm.areaInAcre === undefined || this.agricultureForm.areaInAcre === '') {
      this.agricultureForm.areaInAcre = "";
    }


    if (this.agricultureForm.area === null || this.agricultureForm.area === undefined || this.agricultureForm.area === '') {
      this.agricultureForm.area = "";
    }

    if (this.agricultureForm.productType === null || this.agricultureForm.productType === undefined || this.agricultureForm.productType === '') {
      this.agricultureForm.productType = "";
    }

    if (this.agricultureForm.majorcropType === null || this.agricultureForm.majorcropType === undefined || this.agricultureForm.majorcropType === '') {
      this.agricultureForm.majorcropType = "";
    }
    if (this.agricultureForm.minorcropType === null || this.agricultureForm.minorcropType === undefined || this.agricultureForm.minorcropType === '') {
      this.agricultureForm.minorcropType = "";
    }

    if (this.selectedFpoName === 'Individual') {
      this.isIndividualFarmerYN = 'Y';
    }
    else {
      this.isIndividualFarmerYN = 'N';
    }



    let agriculturalFormDetail = {
      "isFarmerYN": "Y",
      "isMasterDataSavedYN": "Y",
      "goan": this.agricultureForm.gaon.toString(),
      "taluka": this.agricultureForm.taluka.toString(),
      "area": this.agricultureForm.area.toString(),
      "waterArrangement": this.agricultureForm.well.toString(),
      "type": this.agricultureForm.productType.toString(),
      "cropTimes": this.agricultureForm.noOfTimesInYear.toString(),
      "majorCropName": this.agricultureForm.majorCrop.toString(),
      "majorCropType": this.agricultureForm.majorcropType.toString(),
      "majorCropArea": this.agricultureForm.majorCropArea.toString(),
      "majorCropExpectedOutput": this.agricultureForm.majorCropOutput.toString(),
      "minorCropName": this.agricultureForm.minorCrop.toString(),
      "minorCropType": this.agricultureForm.minorcropType.toString(),
      "minorCropArea": this.agricultureForm.smallCropArea.toString(),
      "minorCropExpectedOutput": this.agricultureForm.smallCropOutput.toString(),
      "isLiveStockYN": this.agricultureForm.liveStock.toString(),
      "liveStockDetails": this.agricultureForm.liveStockDetails.toString(),
      "isTractorYN": this.agricultureForm.tractor.toString(),
      "make": this.agricultureForm.make.toString(),
      "model": this.agricultureForm.model.toString(),
      "purchaseYear": this.agricultureForm.yearOfPurchase.toString(),
      "capacity": this.agricultureForm.capacity.toString(),
      "trollies": this.agricultureForm.trollies.toString(),
      "permanentLabour": this.agricultureForm.permanentLabour.toString(),
      "temporaryLabour": this.agricultureForm.temporaryLabour.toString(),
      "panCardNo": this.agricultureForm.panNo.toString(),
      "adharCardNo": this.agricultureForm.aadharNo.toString(),
      "dob": this.agricultureForm.dob.toString(),
      "waterLevel": this.agricultureForm.waterLevelPerYear.toString(),
      "isFacebookIdAvailable": this.agricultureForm.FaceBookDetails.toString(),
      "facebookEmailid": this.agricultureForm.FaceBookID.toString(),
      "isIndividualFarmerYN": this.isIndividualFarmerYN.toString(),
      "isFPO": "N",
      "id": this.agricultureForm.smallCropOutput.toString(),
      "password": this.agricultureForm.mobileNo.toString(),
      "role": "Seller",
      "name": this.agricultureForm.firstName.toString() + ' ' + this.agricultureForm.lastName.toString(),
      "emailid": this.agricultureForm.emailId.toString(),
      "mobilenumber": this.agricultureForm.mobileNo.toString(),
      "address": this.agricultureForm.address.toString(),
      "pincode": this.agricultureForm.pincode.toString(),
      "state": this.agricultureForm.state.toString(),
      "city": this.agricultureForm.district.toString(),
      "IsActive": "1",
      "userid": "0",
      "pickup": "Y",
      "homedelivery": "N",
      "homedeliverylimit": "0",
      "referenceCode": this.selectedFpoID.toString()
    }

    console.log('agriculturalFormDetail', agriculturalFormDetail);


    this.agricultureFormService.insertAgricultureForm(agriculturalFormDetail).subscribe(response => {
      this.apiResponse = response;
      if (this.apiResponse == 'Email id already Exists') {
        this.toastr.error('Email ID Already Exists');
        return;
      }
      else {
        this.dialog.open(DialogResponseSavedComponent, {
          disableClose: true,
          height: '220px',
          width: '400px',
        });
        this.clearValues();
      }

    },
      err => {
        let errorMsg = err.error.toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
        this.toastr.error(errorMsg);
        this.isClickedOnce = false;
      });

  }
  valueChanged() {
    let date = new Date(this.agricultureForm.dob);
    const year = date.getFullYear()
    const month = `${date.getMonth() + 1}`.padStart(2, "0")

    const day = `${date.getDate()}`.padStart(2, "0")

    const stringDate = [day, month, year].join("/");
    let fullDate = stringDate;
    return fullDate
  }

  selectedLevelFromList(response: any) {
    // console.log('selected level from List', response);
  }
  selectedTypeFromList(response: any) {
    // console.log('selected type from List', response);
  }

  selectedWellFromList(response: any) {
    // console.log('selected Well from List', response);
  }

  selectedLiveStockFromList(response: any) {

    if (response.title === 'Yes') {
      this.saveAgricultureForm.controls.livestocksdetails.enable();
    }
    if (response.title === 'No') {
      this.saveAgricultureForm.controls.livestocksdetails.disable();
      this.agricultureForm.liveStockDetails = '';
    }

  }

  selectedFacebookFromList(response) {
    if (response.title === 'Yes') {
      this.saveAgricultureForm.controls.facebook.enable();
    }
    if (response.title === 'No') {
      this.saveAgricultureForm.controls.facebook.disable();
      this.agricultureForm.FaceBookID = '';
    }

  }

  clearValues() {
    this.isClickedOnce = false;
    this.agricultureForm.fpo = '';
    this.agricultureForm.fpoDistrictName = '';
    this.agricultureForm.firstName = '';
    this.agricultureForm.lastName = '';
    this.agricultureForm.dob = '';
    this.agricultureForm.panNo = '';
    this.agricultureForm.aadharNo = '';
    this.agricultureForm.mobileNo = '';
    this.agricultureForm.emailId = '';
    this.agricultureForm.address = '';
    this.agricultureForm.gaon = '';
    this.agricultureForm.taluka = '';
    this.agricultureForm.district = '';
    this.agricultureForm.state = '';
    this.agricultureForm.pincode = '';
    this.agricultureForm.areaGuntha = '';
    this.agricultureForm.well = '';
    this.agricultureForm.waterLevelPerYear = '';
    this.agricultureForm.cropType = '';
    this.agricultureForm.noOfTimesInYear = '';
    this.agricultureForm.majorCrop = '';
    this.agricultureForm.minorCrop = '';
    this.agricultureForm.majorCropArea = '';
    this.agricultureForm.smallCropArea = '';
    this.agricultureForm.majorCropOutput = '';
    this.agricultureForm.smallCropOutput = '';
    this.agricultureForm.liveStock = '';
    this.agricultureForm.tractor = '';
    this.agricultureForm.make = '';
    this.agricultureForm.model = '';
    this.agricultureForm.yearOfPurchase = '';
    this.agricultureForm.capacity = '';
    this.agricultureForm.trollies = '';
    this.agricultureForm.permanentLabour = '';
    this.agricultureForm.temporaryLabour = '';
    this.agricultureForm.FaceBookDetails = '';
    this.agricultureForm.FaceBookID = '';
    this.agricultureForm.liveStockDetails = '';
    this.agricultureForm.areaInAcre = '';
    this.agricultureForm.fpo = '';
    this.agricultureForm.area = '';
    this.agricultureForm.productType = '';
    this.agricultureForm.majorcropType = '';
    this.agricultureForm.minorcropType = '';
    this.districtJSON = this.prevDistrictJSON;
  }


  getPinCode() {
    let pinCodeBasedData: any = [];
    this.agricultureFormService.getAddressDetailsBasedOnPinCode(this.agricultureForm.pincode.toString()).subscribe(response => {
      pinCodeBasedData = response;
      this.agricultureForm.state = pinCodeBasedData.state;
    });
  }

  gunthaToAcre() {
    this.agricultureForm.areaInAcre = (Number(this.agricultureForm.areaGuntha) / 40).toString();
    if ((Number(this.agricultureForm.areaGuntha) / 40).toString() == 'NaN') {
      this.agricultureForm.areaInAcre = '';
    }
  }

  selectedFpoDistrictFromList(response) {
    let fpoNamesArray: any = [];
    for (let i = 0; i < this.prevDistrictJSON.length; i++) {
      if ((response.district_name) === (this.prevDistrictJSON[i].district_name)) {

        fpoNamesArray.push(this.prevDistrictJSON[i]);
      }
    }
    this.districtJSON = fpoNamesArray;
  }
  selectedFpoFromList(response) {
    this.selectedFpoID = response.id;
    this.selectedFpoName = response.name;
  }

  getFarmerMasterData() {
    this.agricultureFormService.getFarmerMasterData().subscribe(res => {
      this.farmerMasterData = res;
      this.areaData = this.farmerMasterData.Area;
      this.waterArrangement = this.farmerMasterData.WaterArrangement;
      this.waterLevel = this.farmerMasterData.WaterLevel;
      this.productType = this.farmerMasterData.ProductType;
      this.cropType = this.farmerMasterData.CropType;

      this.majorCropType = this.farmerMasterData.CropType;
      this.minorCropType = this.farmerMasterData.CropType;
    });
  }

  selectedTractorFromList(res) {
    if (res.title == 'Yes') {
      this.saveAgricultureForm.controls.make.enable();
      this.saveAgricultureForm.controls.model.enable();
      this.saveAgricultureForm.controls.yearofpurchase.enable();
      this.saveAgricultureForm.controls.capacity.enable();
    }
    else {
      this.saveAgricultureForm.controls.make.disable();
      this.saveAgricultureForm.controls.model.disable();
      this.saveAgricultureForm.controls.yearofpurchase.disable();
      this.saveAgricultureForm.controls.capacity.disable();
    }
  }

  getAllFpoList() {
    this.agricultureFormService.getAllFpoList().subscribe(res => {
      this.fpoList = res;
      this.fpoList = this.generateFpoList();
      this.filteredListFpo = this.fpoList.slice();
    });
    this.filteredListFpo = this.fpoList.slice();
  }

  generateFpoList() {
    let indivudualFpo = {
      IsActive: "True",
      SellerNameCode: "",
      TotalAmount: "",
      TotalCustomer: null,
      TotalOrder: null,
      TotalProductMapped: null,
      TotalSeller: "",
      address: "I Test",
      addresses: [],
      adharCardNo: null,
      area: "",
      capacity: "",
      cashYN: "",
      categories: null,
      city: "I city",
      creditLimit: "",
      creditYN: "",
      cropTimes: "",
      customerId: "",
      dob: null,
      emailid: "individual",
      facebookEmailid: null,
      goan: "",
      homedelivery: "",
      homedeliverylimit: "0",
      id: "4100",
      isFPO: "N",
      isFacebookIdAvailable: "",
      isFarmerYN: "Y",
      isIndividualFarmerYN: "N",
      isLiveStockYN: "",
      isMasterDataSavedYN: "N",
      isTractorYN: "",
      liveStockDetails: "",
      majorCropArea: "",
      majorCropExpectedOutput: "",
      majorCropName: null,
      majorCropType: "",
      make: "",
      menus: [],
      minorCropArea: "",
      minorCropExpectedOutput: "",
      minorCropName: null,
      minorCropType: "",
      mobilenumber: "7588641864",
      model: "",
      name: "Individual",
      newmobilenumber: null,
      onlineYN: "",
      panCardNo: null,
      password: "",
      permanentLabour: "",
      pickup: "",
      pincode: "431004",
      purchaseYear: "",
      referenceCode: "",
      role: "",
      state: "MAHARASHTRA",
      taluka: "",
      temporaryLabour: "",
      token: "",
      trollies: "",
      type: "",
      userid: null,
      username: "",
      vendorcode: "GV10010",
      waterArrangement: "",
      waterLevel: null
    };
    this.fpoList.push(indivudualFpo);
    return this.fpoList;
  }


}

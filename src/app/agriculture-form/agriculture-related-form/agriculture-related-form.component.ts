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
  well: any = [];
  liveStock: any = [];
  facebookData: any = [];
  isLiveStockDetails: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    // private dialogRef: MatDialogRef<DialogAgricultureRelatedFormComponent>,
    private agricultureFormService: AgricultureFormService,
    private toastr: ToastrService,
    public router: Router) {

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
      gaon: [''],
      taluka: [''],
      district: [''],
      state: [''],
      pincode: [''],
      areainguntha: [''],
      well: [''],
      waterlevel: [''],
      croptype: [''],
      nooftimesinyear: [''],
      majorcrop: [''],
      minorcrop: [''],
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
      facebook: ['']
    });
    this.saveAgricultureForm.controls.livestocksdetails.disable();
    this.saveAgricultureForm.controls.facebook.disable();
    // livestocksdetails
  }

  ngOnInit(): void {
    this.waterLevel = [
      { id: 0, title: 'Excess' },
      { id: 1, title: 'Adequate' },
      { id: 2, title: 'Limited' },
      { id: 2, title: 'Very Low' },
    ];

    this.cropType = [
      { id: 0, title: 'Rabbi' },
      { id: 1, title: 'Kharip' }
    ];

    this.well = [
      { id: 0, title: 'Yes' },
      { id: 1, title: 'No' },
    ];

    this.liveStock = [
      { id: 0, title: 'Yes' },
      { id: 1, title: 'No' },
    ];

    this.facebookData = [
      { id: 0, title: 'Yes' },
      { id: 1, title: 'No' },
    ];
  }

  saveForm() {

    if (this.agricultureForm.fpo === null || this.agricultureForm.fpo === undefined || this.agricultureForm.fpo === '') {
      this.agricultureForm.fpo = "NULL";
    }
    if (this.agricultureForm.firstName === null || this.agricultureForm.firstName === undefined || this.agricultureForm.firstName === '') {
      this.agricultureForm.firstName = "NULL";
    }

    if (this.agricultureForm.lastName === null || this.agricultureForm.lastName === undefined || this.agricultureForm.lastName === '') {
      this.agricultureForm.lastName = "NULL";
    }

    if (this.agricultureForm.panNo === null || this.agricultureForm.panNo === undefined || this.agricultureForm.panNo === '') {
      this.agricultureForm.panNo = "NULL";
    }

    if (this.agricultureForm.aadharNo === null || this.agricultureForm.aadharNo === undefined || this.agricultureForm.aadharNo === '') {
      this.agricultureForm.aadharNo = "NULL";
    }


    if (this.agricultureForm.dob === null || this.agricultureForm.dob === undefined || this.agricultureForm.dob === '') {
      this.agricultureForm.dob = "NULL";
    }
    else {
      let fullDate
      fullDate = this.valueChanged();
      this.agricultureForm.dob = fullDate.toString();
    }

    if (this.agricultureForm.emailId === null || this.agricultureForm.emailId === undefined || this.agricultureForm.emailId === '') {
      this.agricultureForm.emailId = "NULL";
    }

    if (this.agricultureForm.mobileNo === null || this.agricultureForm.mobileNo === undefined || this.agricultureForm.mobileNo === '') {
      this.agricultureForm.mobileNo = "NULL";
    }


    if (this.agricultureForm.address === null || this.agricultureForm.address === undefined || this.agricultureForm.address === '') {
      this.agricultureForm.address = "NULL";
    }

    if (this.agricultureForm.gaon === null || this.agricultureForm.gaon === undefined || this.agricultureForm.gaon === '') {
      this.agricultureForm.gaon = "NULL";
    }

    if (this.agricultureForm.taluka === null || this.agricultureForm.taluka === undefined || this.agricultureForm.taluka === '') {
      this.agricultureForm.taluka = "NULL";
    }

    if (this.agricultureForm.district === null || this.agricultureForm.district === undefined || this.agricultureForm.district === '') {
      this.agricultureForm.district = "NULL";
    }

    if (this.agricultureForm.state === null || this.agricultureForm.state === undefined || this.agricultureForm.state === '') {
      this.agricultureForm.state = "NULL";
    }

    if (this.agricultureForm.pincode === null || this.agricultureForm.pincode === undefined || this.agricultureForm.pincode === '') {
      this.agricultureForm.pincode = "NULL";
    }

    if (this.agricultureForm.areaGuntha === null || this.agricultureForm.areaGuntha === undefined || this.agricultureForm.areaGuntha === '') {
      this.agricultureForm.areaGuntha = "NULL";
    }


    if (this.agricultureForm.well === null || this.agricultureForm.well === undefined || this.agricultureForm.well === '') {
      this.agricultureForm.well = "NULL";
    }

    if (this.agricultureForm.waterLevelPerYear === null || this.agricultureForm.waterLevelPerYear === undefined || this.agricultureForm.waterLevelPerYear === '') {
      this.agricultureForm.waterLevelPerYear = "NULL";
    }

    if (this.agricultureForm.cropType === null || this.agricultureForm.cropType === undefined || this.agricultureForm.cropType === '') {
      this.agricultureForm.cropType = "NULL";
    }

    if (this.agricultureForm.noOfTimesInYear === null || this.agricultureForm.noOfTimesInYear === undefined || this.agricultureForm.noOfTimesInYear === '') {
      this.agricultureForm.noOfTimesInYear = "NULL";
    }


    if (this.agricultureForm.majorCrop === null || this.agricultureForm.majorCrop === undefined || this.agricultureForm.majorCrop === '') {
      this.agricultureForm.majorCrop = "NULL";
    }

    if (this.agricultureForm.minorCrop === null || this.agricultureForm.minorCrop === undefined || this.agricultureForm.minorCrop === '') {
      this.agricultureForm.minorCrop = "NULL";
    }

    if (this.agricultureForm.majorCropArea === null || this.agricultureForm.majorCropArea === undefined || this.agricultureForm.majorCropArea === '') {
      this.agricultureForm.majorCropArea = "NULL";
    }

    if (this.agricultureForm.smallCropArea === null || this.agricultureForm.smallCropArea === undefined || this.agricultureForm.smallCropArea === '') {
      this.agricultureForm.smallCropArea = "NULL";
    }
    if (this.agricultureForm.majorCropOutput === null || this.agricultureForm.majorCropOutput === undefined || this.agricultureForm.majorCropOutput === '') {
      this.agricultureForm.majorCropOutput = "NULL";
    }


    if (this.agricultureForm.smallCropOutput === null || this.agricultureForm.smallCropOutput === undefined || this.agricultureForm.smallCropOutput === '') {
      this.agricultureForm.smallCropOutput = "NULL";
    }

    if (this.agricultureForm.liveStock === null || this.agricultureForm.liveStock === undefined || this.agricultureForm.liveStock === '') {
      this.agricultureForm.liveStock = "NULL";
    }

    if (this.agricultureForm.tractor === null || this.agricultureForm.tractor === undefined || this.agricultureForm.tractor === '') {
      this.agricultureForm.tractor = "NULL";
    }

    if (this.agricultureForm.make === null || this.agricultureForm.make === undefined || this.agricultureForm.make === '') {
      this.agricultureForm.make = "NULL";
    }
    if (this.agricultureForm.model === null || this.agricultureForm.model === undefined || this.agricultureForm.model === '') {
      this.agricultureForm.model = "NULL";
    }
    if (this.agricultureForm.yearOfPurchase === null || this.agricultureForm.yearOfPurchase === undefined || this.agricultureForm.yearOfPurchase === '') {
      this.agricultureForm.yearOfPurchase = "NULL";
    }

    if (this.agricultureForm.capacity === null || this.agricultureForm.capacity === undefined || this.agricultureForm.capacity === '') {
      this.agricultureForm.capacity = "NULL";
    }

    if (this.agricultureForm.trollies === null || this.agricultureForm.trollies === undefined || this.agricultureForm.trollies === '') {
      this.agricultureForm.trollies = "NULL";
    }

    if (this.agricultureForm.permanentLabour === null || this.agricultureForm.permanentLabour === undefined || this.agricultureForm.permanentLabour === '') {
      this.agricultureForm.permanentLabour = "NULL";
    }
    if (this.agricultureForm.temporaryLabour === null || this.agricultureForm.temporaryLabour === undefined || this.agricultureForm.temporaryLabour === '') {
      this.agricultureForm.temporaryLabour = "NULL";
    }
    if (this.agricultureForm.liveStockDetails === null || this.agricultureForm.liveStockDetails === undefined || this.agricultureForm.liveStockDetails === '') {
      this.agricultureForm.liveStockDetails = "NULL";
    }

    if (this.agricultureForm.FaceBookDetails === null || this.agricultureForm.FaceBookDetails === undefined || this.agricultureForm.FaceBookDetails === '') {
      this.agricultureForm.FaceBookDetails = "NULL";
    }

    if (this.agricultureForm.FaceBookID === null || this.agricultureForm.FaceBookID === undefined || this.agricultureForm.FaceBookID === '') {
      this.agricultureForm.FaceBookID = "NULL";
    }

    console.log(this.agricultureForm);
    this.agricultureFormService.insertAgricultureForm(this.agricultureForm).subscribe(response => {
      this.toastr.success('Your Response Is Submitted');
      this.clearValues();

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
    console.log('selected level from List', response);
  }
  selectedTypeFromList(response: any) {
    console.log('selected type from List', response);
  }

  selectedWellFromList(response: any) {
    console.log('selected Well from List', response);
  }

  selectedLiveStockFromList(response: any) {
    console.log('selected Live Stock from List', response);
    // title: 'Yes'
    if (response.title === 'Yes') {
      this.saveAgricultureForm.controls.livestocksdetails.enable();
    }
    if (response.title === 'No') {
      this.saveAgricultureForm.controls.livestocksdetails.disable();
      this.agricultureForm.liveStockDetails = '';
    }

  }

  selectedFacebookFromList(response) {
    console.log('selected facebook from List', response);
    if (response.title === 'Yes') {
      this.saveAgricultureForm.controls.facebook.enable();
    }
    if (response.title === 'No') {
      this.saveAgricultureForm.controls.facebook.disable();
      this.agricultureForm.FaceBookID = '';
    }

  }

  clearValues() {
    this.agricultureForm.fpo = '';
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
  }


  getPinCode() {
    let pinCodeBasedData: any = [];
    this.agricultureFormService.getAddressDetailsBasedOnPinCode(this.agricultureForm.pincode.toString()).subscribe(response => {
      pinCodeBasedData = response;
      console.log('response', response);
      this.agricultureForm.state = pinCodeBasedData.state;
      // this.agricultureForm.taluka=pinCodeBasedData.city
      // this.address.area = pinCodeBasedData.city;
      // this.address.state = pinCodeBasedData.state;
    });
  }
}

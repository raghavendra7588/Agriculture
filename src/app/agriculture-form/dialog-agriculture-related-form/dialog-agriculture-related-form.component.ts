import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, NumberValueAccessor } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AgricultureForm } from '../agriculture-form.model'
// import { AppDateAdapter, APP_DATE_FORMATS } from './date.adapter';
import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from "@angular/material/core";
import { AppDateAdapter, APP_DATE_FORMATS } from './date.adapter';
import { AgricultureFormService } from '../agriculture-form.service';

@Component({
  selector: 'app-dialog-agriculture-related-form',
  templateUrl: './dialog-agriculture-related-form.component.html',
  styleUrls: ['./dialog-agriculture-related-form.component.css'],
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
export class DialogAgricultureRelatedFormComponent implements OnInit {

  waterLevel: any;
  cropType: any;
  saveAgricultureForm: FormGroup;
  agricultureForm: AgricultureForm = new AgricultureForm();

  constructor(
    public formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogAgricultureRelatedFormComponent>,
    private agricultureFormService: AgricultureFormService) {

    this.saveAgricultureForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
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
      tractor: [''],
      make: [''],
      model: [''],
      yearofpurchase: [''],
      capacity: [''],
      trollies: [''],
      permanentlabour: [''],
      temporarylabour: ['']
    });
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
  }

  saveForm() {

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
    console.log(this.agricultureForm);
    this.agricultureFormService.insertAgricultureForm(this.agricultureForm).subscribe(response => {
      console.log('inserted', this.agricultureForm);
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

}

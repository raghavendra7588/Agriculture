import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgricultureRelatedFormComponent } from './agriculture-related-form/agriculture-related-form.component';



import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DialogAgricultureRelatedFormComponent } from './dialog-agriculture-related-form/dialog-agriculture-related-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { NumberDirective } from './number.directive';
import { MatSelectFilterModule } from 'mat-select-filter';
import { DialogResponseSavedComponent } from './dialog-response-saved/dialog-response-saved.component';
@NgModule({
  declarations: [AgricultureRelatedFormComponent, DialogAgricultureRelatedFormComponent, NumberDirective, DialogResponseSavedComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatTableModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule,
    MatDialogModule,
    MatRadioModule,
    MatDatepickerModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatSelectFilterModule,
    ToastrModule.forRoot({
      timeOut: 700,
      preventDuplicates: true,
    })
  ],
  exports: [AgricultureRelatedFormComponent, DialogAgricultureRelatedFormComponent, DialogResponseSavedComponent],
  entryComponents: [DialogAgricultureRelatedFormComponent, DialogResponseSavedComponent]
})
export class AgricultureFormModule { }

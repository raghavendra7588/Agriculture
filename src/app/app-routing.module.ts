import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgricultureRelatedFormComponent } from './agriculture-form/agriculture-related-form/agriculture-related-form.component';
import { DialogAgricultureRelatedFormComponent } from './agriculture-form/dialog-agriculture-related-form/dialog-agriculture-related-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/agriculture/agricultureDetails', pathMatch: 'full' },
  { path: 'agriculture/agricultureDetails', component: AgricultureRelatedFormComponent },
  // { path: 'agriculture/agricultureForm', component: DialogAgricultureRelatedFormComponent },
  { path: '**', redirectTo: '/agriculture/agricultureDetails' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

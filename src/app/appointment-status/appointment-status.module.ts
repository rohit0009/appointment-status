import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppointmentStatusComponent } from './appointment-status.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppointmentStatusComponent],
  exports: [AppointmentStatusComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppointmentStatusComponent
      }
    ]),
    MatSelectModule,
    MatButtonModule
  ]
})
export class AppointmentStatusModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MzCalendarComponent } from './mz-calendar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'calendar', component: MzCalendarComponent }
    ])
  ],
  declarations: [MzCalendarComponent]
})
export class MzCalendarModule { }

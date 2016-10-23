import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MzCalendarModule } from './mz-calendar/mz-calendar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '**', redirectTo: 'calendar' }
    ]),
    MzCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

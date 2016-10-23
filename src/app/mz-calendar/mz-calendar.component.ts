import { Component, OnInit } from '@angular/core';

import BookingService from '../shared/booking.service';
import Day from '../shared/day';

@Component({
    selector    : 'app-mz-calendar',
    templateUrl : './mz-calendar.component.html',
    styleUrls   : [ './mz-calendar.component.css' ],
    providers   : [ BookingService ]
})
export class MzCalendarComponent implements OnInit {
    private bookingService: BookingService;

    public days: Array<Day>;

    constructor(bookingService: BookingService) {
        this.bookingService = bookingService;
        this.days           = [];
    }

    ngOnInit() {
        // generate calendar days
        for (var i = 0; i < 7; i++) {
            var date = new Date();
            date.setDate(date.getDate() + i);

            this.days.push(
                new Day(
                    date,
                    this.bookingService.getByDate(date)
                )
            );
        }
    }
}

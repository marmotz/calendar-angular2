import { Injectable } from '@angular/core';

import Booking from './booking';

@Injectable()
export default class BookingService {
    private cpt = 1;

    private getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min)) + min;
    }

    private getRandomBooking(date) {
        let datetime = new Date(date);
        datetime.setHours(
            this.getRandomInt(9, 18),
            this.getRandomInt(0, 4) * 15
        );

        return new Booking(
            datetime,
            'Booking #' + (this.cpt++)
        );
    }

    public getByDate(date) {
        let bookings: Array<Booking> = [];

        let nbBookings = this.getRandomInt(0, 10);
        for (let i = 0; i < nbBookings; i++) {
            bookings.push(
                this.getRandomBooking(date)
            );
        }

        return bookings.sort(
            function(a, b) {
                return a.datetime.getTime() - b.datetime.getTime();
            }
        );
    }
}

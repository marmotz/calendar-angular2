import Booking from './booking';

export default class Day {
    public date     : Date;
    public bookings : Array<Booking>;

    constructor(date, bookings) {
        this.date     = date;
        this.bookings = bookings;
    }
}

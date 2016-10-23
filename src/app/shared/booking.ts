export default class Booking {
    public datetime: Date;
    public label: string;

    constructor(datetime, label) {
        this.datetime = datetime;
        this.label    = label;
    }
}

import {Component, Input, EventEmitter, Output} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-datepicker-customday',
    templateUrl: "datepicker-customday.html",
    styleUrls: ["datepicker-customday.css"]
})
export class NgbdDatepickerCustomday {
    model: NgbDateStruct;
    @Output() emitValue = new EventEmitter();

    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }
    constructor(){
    }
    changeValue(selected) {
        this.emitValue.emit(selected);
        console.log("model in shilde" + "" + selected);
    }
}


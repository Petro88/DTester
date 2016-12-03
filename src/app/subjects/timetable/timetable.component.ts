import {Location} from "@angular/common";
import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {ChartComponent} from "../../shared/chart/component/chart.component";

@Component({
    selector: "timetable-container",
    templateUrl: "timetable.component.html"
})

export class TimeTableComponent implements AfterViewInit {
    // common variables
    pageTitle: string = "Розклад тестів по предмету: ";
    data = {
        color1: '#ED1B2D',
        color2: 'green'
    };

    constructor(private location: Location) {
    }

    @ViewChild(ChartComponent)
    private chartComponent: ChartComponent;

    ngAfterViewInit() {
    }

    goBack(): void {
        this.location.back();
    }

}


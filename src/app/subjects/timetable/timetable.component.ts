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
        color2: 'green',
        width: 400,
        height: 285,
        dataPercent: [70, 61, 49, 8, 5]
    };

    constructor(private location: Location) {
    }

    @ViewChild(ChartComponent)
    private chartComponent: ChartComponent;

    ngAfterViewInit() {
    }

    setLargeSize() {
        this.data.width = 400;
        this.data.height = 285;
        this.chartComponent.redrawChart();
    }

    setSmallSize() {
        this.data.width = 250;
        this.data.height = 185;
        this.chartComponent.redrawChart();
    }

    goBack(): void {
        this.location.back();
    }

}


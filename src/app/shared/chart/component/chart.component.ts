import {Component, OnInit, ElementRef, Input, OnChanges} from '@angular/core';
import {ChartConfigService} from "../service/chart-config.service";
// import {Store} from "@ngrx/store";
const Highcharts = require('highcharts');
const HighchartsMore = require('highcharts-more');
HighchartsMore(Highcharts);

@Component({
    selector: "chart-container",
    templateUrl: "chart.component.html",
    providers: [ChartConfigService]
})

export class ChartComponent implements OnInit, OnChanges {
    // common variables
    pageTitle: string = "Розклад тестів по предмету: ";
    @Input() color: string;
    data:any = {};

    constructor(private el: ElementRef,
                private chartConfigService: ChartConfigService) {
    }

    ngOnInit() {
        this.redrawChart();
}

    ngOnChanges() {
        this.data.color = this.color;
    }

    redrawChart() {
        // Highcharts.chart(this.el.nativeElement, this.chartConfigService.getBarChartConfig(this.data));
        this.chartConfigService.getBarChartConfig(this.el.nativeElement, this.data);
    }

    // private hidePercent(chart) {
    //     chart.series.forEach((i,serie) => {
    //         serie.data.forEach((j,data) => {
    //             if(data.yBottom - data.plotY < 25 && i > 0)
    //                 data.dataLabel.destroy();
    //         })
    //     })
    // }
    //
    // function(chart){
    //
    //     chart.series.forEach((i,serie) => {
    //         serie.data.forEach((j,data) => {
    //             if(data.yBottom - data.plotY < 25 && i > 0)
    //                 data.dataLabel.destroy();
    //         })
    //     })
    //
    // }
}


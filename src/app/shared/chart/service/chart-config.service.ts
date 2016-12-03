import {Injectable} from '@angular/core';
const Highcharts = require('highcharts');


@Injectable()
export class ChartConfigService {

    constructor() {
    }

    dataUnit = [2, 200];
    dataPercent = [70, 61];
    categories = ['Seasonal Gardening', 'Fixing'];
    max = 150;
    height = 200;

    public getBarChartConfig(container, data) {
        var chart;
        return chart = new Highcharts.Chart(container, {
            chart: {
                events: {
                    redraw: function () {
                        this.series[1].data.forEach((data) => {
                            if (data.yBottom - data.plotY < 32) {
                                data.dataLabel.hide();
                            } else {
                                data.dataLabel.show();
                            }
                        });
                        this.series[0].data.forEach((data) => {
                            if (data.yBottom < 45) {
                                data.dataLabel.hide();
                            } else {
                                data.dataLabel.show();
                            }
                        })
                    },
                    load: function () {
                        this.series.forEach((data) => {
                            if(data._i == 1) {
                                var max = Math.max(...data.yData);
                                data.yAxis.options.max = max + max/4;
                                debugger;
                            }
                        });
                        this.series[1].data.forEach((data) => {
                            if (data.yBottom - data.plotY < 32) {
                                data.dataLabel.hide();
                            } else {
                                data.dataLabel.show();
                            }
                        });
                        this.series[0].data.forEach((data) => {
                            data.options.color = 'blue';
                            //chart.series[0].options.color = "#008800";
                            data.update(data.options);
                            if (data.yBottom < 45) {
                                data.dataLabel.hide();
                            } else {
                                data.dataLabel.show();
                            }
                        })
                    }
                },
                type: 'bar',
                width: 350,
                height: this.height,
                spacingTop: 30,
                spacingBottom: 30,
                marginRight: 30,
                spacingLeft: 10
            },
            title: {
                text: null
            },
            xAxis: {
                gridLineWidth: 1,
                categories: this.categories,
                labels: {
                    style: {
                        color: "#A9A9A9",
                        fontSize: '13px'
                    }
                },
                tickLength: 0,
                lineWidth: 0,
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                max: this.max,
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                }
            },
            plotOptions: {
                series: {
                    stacking: 'stacked',
                    animation: false,
                    borderRadius: 2,
                    borderWidth: 0,
                    grouping: false,
                    pointWidth: 25,
                    dataLabels: {
                        style: {
                            "fontSize": "13px",
                            "fontWeight": "normal"
                        },
                        enabled: true,
                        overflow: 'none',
                        crop: false,
                        padding: 0
                    }
                }
            },
            tooltip: {
                formatter: function(args) {
                    var this_point_index = this.series.data.indexOf( this.point );
                    var this_series_index = this.series.index;
                    var that_series_index = this.series.index == 0 ? 1 : 0; // assuming 2 series
                    var that_series = args.chart.series[that_series_index];
                    var that_point = that_series.data[this_point_index];
                    return '<br/>' + this.x +
                        '<br/>' + this.y + '%' +
                        '<br/>' + that_point.y + '$';
                },
                borderColor: '#d8d8d8',
                borderRadius: '5',
                borderWidth: 0,
                backgroundColor: "#f9eded",
                useHTML: true,
                style: {
                    padding: 0
                }
            },
            credits: {
                enabled: true
            },
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 400
                    },
                    chartOptions: {
                        title: {
                            x: 80
                        }
                    }
                }]
            },
            series: [{
                type: 'bar',
                showInLegend: false,
                color: '#fffefe',
                data: this.dataPercent,
                dataLabels: {
                    formatter: function () {
                        return "$" + this.y;
                    },
                    style: {
                        color: "#4A4A4A",
                        textOutline: false
                    },
                    enabled: true,
                    align: "left",
                    x: 10
                },
            },
                {
                    type: 'bar',
                    showInLegend: false,
                    color: '#ED1B2D',
                    data: this.dataUnit,
                    dataLabels: {
                        formatter: function () {
                            return this.y +"%";
                        },
                        style: {
                            color: "#F4828C",
                            textOutline: false
                        },
                        enabled: true,
                        align: "left",
                        x: 5
                    },
                }],
        })

    }

}



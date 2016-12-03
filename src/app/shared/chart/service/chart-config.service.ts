import {Injectable} from '@angular/core';
const Highcharts = require('highcharts');


@Injectable()
export class ChartConfigService {

    constructor() {
    }

    dataUnit = [2.345, 2.050, 1.45, 25.1, 25.1];
    dataPercent = [70, 61, 49, 15, 14];
    categories = ['Seasonal Gardening', 'Fixing', 'Winter', 'Good', 'FD'];

    public getBarChartConfig(container, data) {
        var chart;
        return chart = new Highcharts.Chart(container, {
            chart: {
                events: {
                    load: function () {
                        this.series[1].data.forEach((data) => {
                                if (data.yBottom - data.plotY < 30)
                                    data.dataLabel.hide();
                            })
                    }
                },
                type: 'bar',
                width: 320,
                height: 220,
                spacingTop: 30,
                spacingBottom: 30,
                marginRight: 30,
                spacingLeft: 10
            },
            title: {
                text: 'MORE THAN 27 WEEKS SUPPLY',
                margin: 0,
                align: 'left',
                x: 130,
                style: {
                    fontSize: '12px',
                    color: "#A9A9A9",
                }
            },
            xAxis: {
                gridLineWidth: 1,
                categories: this.categories,
                labels: {
                    style: {
                        color: "#A9A9A9",
                        fontSize: '12px'
                    }
                },
                tickLength: 0,
                lineWidth: 0,
                title: {
                    text: null
                }
            },
            yAxis: {
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
                    animation: false,
                    borderRadius: 2,
                    borderWidth: 0,
                    grouping: false,
                    stacking: 'normal',
                    pointWidth: 25,
                    dataLabels: {
                        style: {
                            "fontSize": "12px",
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
                formatter: function () {
                    return this.x + "<br>" + this.y + "%";
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
                        maxWidth: 350
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
                data: this.dataUnit,
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
                    color: data.color,
                    data: this.dataPercent,
                    dataLabels: {
                        formatter: function () {
                            return this.y + "%";
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



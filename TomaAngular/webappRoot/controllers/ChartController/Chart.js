$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#container').highcharts({
            chart: {
                type: 'line',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                backgroundColor: "#2E1713",
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 500);
                    }
                }
            },
            title: {
                text: 'Live random data'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 500
            },
            yAxis: {
                title: {
                    text: 'Temperature'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#000000'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data: (function () {
                    // generate an array of random data
                    var data = [];

                    for (i = 0; i <= 100; i += 1) {
                        data.push({
                            x: 1,
                            y: 1
                        });
                    }
                    return data;
                }()),
                lineWidth: 5
            }]
        });
    });
});
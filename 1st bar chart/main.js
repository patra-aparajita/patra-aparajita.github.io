document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit(s) eaten'
            }
        },
        series: [{
            name: 'Robert',
            data: [1, 0, 4]
        }, {
            name: 'Jane',
            data: [5, 7, 3]
        }],
    });
});
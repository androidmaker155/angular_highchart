angular.module('chartApp', [])
    		.controller('myController', function ($scope) {
				Highcharts.chart('mygraph', {

				   chart: {
							plotBackgroundColor: null,
							plotBorderWidth: null,
							plotShadow: false,
							type: 'pie'
						},
					title: {
							text: 'Internet Browser Statistics '
						   },
					
					
					 plotOptions: {
						pie: {
							allowPointSelect: true,
							cursor: 'pointer',
							dataLabels: {
								enabled: true,
								color: '#000000',
								connectorColor: 'green',
								formatter: function() 
								{
									return '<b>' + this.point.name + '</b>: ' + Highcharts.numberFormat(this.percentage, 2) +' % ';
								}
							},
							showInLegend: true
						}
						
					},

				    series: [{
								name: 'Brands',
								data: [{
									name: 'Chrome',
									y: 50,
									sliced: true,
									selected: true
								}, {
									name: 'Firefox',
									y: 25
									
								}, {
									name: 'Safari',
									y: 15
								}, {
									name: 'Opera',
									y: 5
								},  {
									name: 'Konqueror',
									y: 5
								}]
							}]
				});
    		});
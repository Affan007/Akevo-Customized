/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.sides')
      .controller('DashLineChartCtrl', DashLineChartCtrl);



  /** @ngInject */
  function DashLineChartCtrl(baConfig, layoutPaths, baUtil,$scope,User) {
    $scope.OverviewSalesGraph= function() {
        $scope.chartData=[]
        User.OverviewSalesGraph()
            .success(function(data) {
               console.log(data)
               for(var keyName in data) {
                   var key = keyName;

                   var data1={}
                   data1.date = new Date(key)
                  //  console.log(data1);
                   data1.value = data[key];
                  //  dataReqtemp2 .User_V = i;
                  //  i++;
                  //  if(dataReqtemp2.user_id !=$scope.dataget.admin._id){
                  //      $scope.ChatData.push(dataReqtemp2);
                  //  }
                   $scope.chartData.push(data1);

               }
                console.log($scope.chartData);
               $scope.chartData.sort(function(a, b) {
                  a = new Date(a.date);
                  b = new Date(b.date);
                  return a<b ? -1 : a>b ? 1 : 0;
              });
               console.log($scope.chartData);
               var layoutColors = baConfig.colors;
               var graphColor = baConfig.theme.blur ? '#000000' : layoutColors.primary;
               var chartData = [
                 { date: new Date("Fri Apr 14 2017 00:00:00 GMT+0000 (Coordinated Universal Time"), value: 0, value0: 0 },
                 { date: new Date("Fri Apr 14 2017 00:00:00 GMT+0000 (Coordinated Universal Time"), value: 15000, value0: 19000},
                 { date: new Date("Fri Apr 14 2017 00:00:00 GMT+0000 (Coordinated Universal Time"), value: 30000, value0: 20000},


               ];

               $scope.chart = AmCharts.makeChart('amchart', {
                 type: 'serial',
                 theme: 'blur',
                 marginTop: 15,
                 marginRight: 15,
                 dataProvider: $scope.chartData,
              //    dataSets: [{
              //    dataLoader: {
              //         url: $scope.chartData,
              //         format: "json",
              //         async:false
              //    }
              //  }],
                 categoryField: 'date',
                 categoryAxis: {
                   parseDates: true,
                   gridAlpha: 0,
                   color: layoutColors.defaultText,
                   axisColor: layoutColors.defaultText
                 },
                 valueAxes: [
                   {
                     minVerticalGap: 50,
                     gridAlpha: 0,
                     color: layoutColors.defaultText,
                     axisColor: layoutColors.defaultText
                   }
                 ],
                 graphs: [

                   {
                     id: 'g1',
                     bullet: 'none',
                     useLineColorForBulletBorder: true,
                     lineColor: baUtil.hexToRGB(graphColor, 0.5),
                     lineThickness: 1,
                     negativeLineColor: layoutColors.danger,
                     type: 'smoothedLine',
                     valueField: 'value',
                     fillAlphas: 1,
                     fillColorsField: 'lineColor'
                   }
                 ],
                 chartCursor: {
                   categoryBalloonDateFormat: 'MM D',
                   categoryBalloonColor: '#4285F4',
                   categoryBalloonAlpha: 0.7,
                   cursorAlpha: 0,
                   valueLineEnabled: true,
                   valueLineBalloonEnabled: true,
                   valueLineAlpha: 0.5
                 },
                 dataDateFormat: 'MM D',
                 export: {
                   enabled: true
                 },
                 creditsPosition: 'bottom-right',
                 zoomOutButton: {
                   backgroundColor: '#fff',
                   backgroundAlpha: 0
                 },
                 zoomOutText: '',
                 pathToImages: layoutPaths.images.amChart
               });

            })
            .error(function(data) {
                console.log(data)
            })
    }




    // function zoomChart() {
    //   chart.zoomToDates(new Date(2016, 6,3), new Date());
    // }
    //
    // chart.addListener('rendered', zoomChart);
    // zoomChart();
    // if (chart.zoomChart) {
    //   chart.zoomChart();
    // }
  }
})();

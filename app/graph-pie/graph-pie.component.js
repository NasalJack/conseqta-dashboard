angular.
  module('graphPie').
  component('graphPie', {
    templateUrl: 'graph-pie/graph-pie.template.html',
    controller: function graphPieController() {
    }
  })

  angular.module("graphPie").controller("graphPieController", graphPieController);
  
  function graphPieController ($scope) {
    $scope.labels = ["In-progress", "New"];
    $scope.data = {
      // Chart.js data structure goes here
      // e.g. Pie Chart Data Structure http://www.chartjs.org/docs/#doughnut-pie-chart-data-structure
      labels: [
        "New",
        "In-Progress"
      ],
      datasets: [
        {
          data: [300, 120],
          backgroundColor: [
            "#003b68",
            "#04d380"
          ]
        }
      ]
    };
    $scope.options = {
          legend: {
              display: true,
              position: 'right'
              // labels: {
              //     fontColor: 'rgb(255, 99, 132)'
              // }
          },
          title: {
              display: false,
              text: 'Summary of My Items'
          },
          cutoutPercentage: 75,
          maintainAspectRatio: false
    }
  }  

  // angular.
//   module('graphPie').
//   component('graphPie', {
//     templateUrl: 'graph-pie/graph-pie.template.html',
//     controller: function PhoneListController($http) {
//       var self = this;
//       self.orderProp = 'age';

//       $http.get('graphs/phones.json').then(function(response) {
//         self.phones = response.data;
//         console.log(self.phones)
//       });
//     }
//   })
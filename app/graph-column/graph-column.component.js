angular.
  module('graphColumn').
  component('graphColumn', {
    templateUrl: 'graph-column/graph-column.template.html',
    controller: function graphColumnController() {
    }
  })

  angular.module("graphColumn").controller("graphColumnController", graphColumnController);
  
  function graphColumnController ($scope) {
    $scope.labels = ["", ""];
    $scope.data = {
      labels: ["", ""],
      datasets: [{ 
          data: [100, 60],
          backgroundColor: "#00b3d9"
        }
      ]
  }
    $scope.options = {
      title: {
        display: false,
        text: 'Comparison of These Things'
      },
      scales: {
        xAxes: [{
            stacked: true,
            gridLines: {
              display: false
            },
            barThickness : 67,
            // display: false
        }],
        yAxes: [{
            stacked: true,
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
          },
          // display: false
          ticks: {
            display: false
          }
        }]
    },
    maintainAspectRatio: false
    // responsive: false
    }
  }  
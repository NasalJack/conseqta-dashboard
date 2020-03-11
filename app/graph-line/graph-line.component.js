angular.
  module('graphLine').
  component('graphLine', {
    templateUrl: 'graph-line/graph-line.template.html',
    controller: function SidebarController() {
    }
  })

  angular.module("graphLine").controller("graphLineController", graphLineController);
  
  function graphLineController ($scope) {
  // $scope.labels = ["", "Dec", "", "", "Mar", "", "", "Jun", "", "", "Sept"];
  // $scope.series = ['Series A', 'Series B'];
  // $scope.data = [
  //   [3, 2, 8, 4, 7, 2, 2, 8, 3, 2, 9],
  //   [9, 5, 9, 10, 5, 4, 2, 8, 6, 9, 8]
  // ];
  $scope.data = {
      labels: ["", "Dec", "", "", "Mar", "", "", "Jun", "", "", "Sept"],
      datasets: [{ 
          data: [3, 2, 8, 4, 7, 2, 2, 8, 3, 2, 9],
          label: "Africa",
          borderColor: "#62a8c3",
          fill: false
        }, { 
          data: [9, 5, 9, 10, 5, 4, 2, 8, 6, 9, 8],
          label: "Asia",
          borderColor: "#d3d3d3",
          fill: false
        }
      ]
  }
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  // $scope.datasetOverride = { yAxisID: 'y-axis-1' };
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left',
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            drawBorder: false,
        },
        ticks: {
          beginAtZero: true
        }
        }
      ],
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: true
        }
      }]
    },
    elements: {
      point:{
        radius: 0
      },
      line: {
        tension: 0
      }
    },
    // responsive: false,
    maintainAspectRatio: false
  };
  }  
  
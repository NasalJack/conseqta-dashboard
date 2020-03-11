angular.
  module('graphChart').
  component('graphChart', {
    templateUrl: 'graph-chart/graph-chart.template.html',
    controller: function SidebarController() {
    }
  })

  angular.module("graphChart").controller("graphChartController", graphChartController);
  
  function graphChartController ($scope) {
    $scope.labels = ["a", "b", "c", "d", "e"];
    $scope.data = [225, 627, 500, 462, 300];
    $scope.options = {
          title: {
              display: true,
              text: 'Amount of Something'
          },
          // responsive: false
    }
  }  
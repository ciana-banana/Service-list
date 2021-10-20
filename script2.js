// Code goes here
angular.module('myapp', ['psi.sortable']);

function ctrl($scope) {
  setTimeout(function () {
    $scope.$apply(function () {
      $scope.list = [
        {
          Name: "Oggetto 1",
          Ordera: [
            {
              num: "1",
              cod: "987654321"
            },
            {
              num: "2",
              cod: "564378652"
            }]
        },
        { Name: "Oggetto 2", Order: 2 },
        { Name: "Oggetto 3", Order: 3 },
        { Name: "Oggetto 4", Order: 4 },
        { Name: "Oggetto 5", Order: 5 },
        { Name: "Oggetto 6", Order: 6 },
        { Name: "Oggetto 7", Order: 7 },
        { Name: "Oggetto 8", Order: 8 },
        { Name: "Oggetto 9", Order: 9 },
        { Name: "Oggetto 10", Order: 10 }
      ];
    });

  })
};
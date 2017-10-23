function boxesController($scope, boxes) {
    $scope.boxes;
    boxes.getBoxes().then(function (response) {
        $scope.boxes = response.data.boxes;
        boxes.setBoxes(response.data.boxes);
    }, function (error) {
        console.error(error);
    });
}

function singleController($scope, boxes, $location, $routeParams) {
    $scope.boxes = boxes.data.boxes;
}

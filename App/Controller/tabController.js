app.controller('tabController', ['$scope', 'ajaxServer', '$stateParams', function ($scope, ajaxServer, $stateParams) {
    ajaxServer.ajax('get', 'http://localhost:8050?data' + $stateParams.id).then(function (result) {
        $scope.tabInfo = JSON.parse(result.data.data)
    });
}]);
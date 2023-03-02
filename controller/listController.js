var listController = function ($scope, $http) {
    $scope.ListUser = []
    $scope.onGetList = () => {
        $http.get(API_URL + "/users").then(
            (res) => { $scope.ListUser = res.data },
        )
    }
    $scope.onGetList()
    $scope.onDelete = (id) => {
        $http.delete(API_URL + "/users/" + id).then((res) => {
            $scope.onGetList()
        })
    }

}
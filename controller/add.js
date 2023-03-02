var add = function ($scope, $http, $location) {
    $scope.input = {
        name: "anhbanthien",
        age: 20
    }
    $scope.Add = () => {
        $http.post(
            API_URL + "/users",
            JSON.stringify({ name: $scope.input.name, age: $scope.input.age, image: document.getElementById("getUpload").src })
        ).then(
            $location.path('/list')
        )
    }
}
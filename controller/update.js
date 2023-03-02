var update = function ($scope, $http, $location, $routeParams) {
    var id = $routeParams.id;

    $http.get(
        API_URL + "/users/" + id
    ).then(
        (res) => {
            $scope.input = res.data
            console.log(res);
            document.getElementById("getUpload").src = res.data.image
        }
    )
    $scope.update = () => {
        $http.put(API_URL + "/users/" + id, JSON.stringify(
            { name: $scope.input.name, age: $scope.input.age, image: document.getElementById("getUpload").src }
        )).then(
            (res) => {
                $location.path("/list")
            }
        )
    }
}
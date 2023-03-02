var app = angular.module(
    "rou", ["ngRoute"]
)
app.config(($routeProvider) => {
    $routeProvider.when("/list", {
        templateUrl: "./pages/list.html",
        controller: listController,
    }).when("/add", {
        templateUrl: "./pages/add.html",
        controller: add
    })
        .when("/Update/:id", {
            templateUrl: "./pages/update.html",
            controller: update
        })
})


var app = angular.module('task', []);

app.controller('TaskController', function($scope) {

    $scope.saved = localStorage.getItem('tasks');

    $scope.tasks = (localStorage.getItem('tasks') !== null) ?
        JSON.parse($scope.saved) : [{
        text: "todo",
        complete: false
    }];
    localStorage.setItem('tasks', JSON.stringify($scope.tasks));

    $scope.addTask = function() {
        if ($scope.newtask) {
            $scope.tasks.push({
                text: $scope.newtask,
                complete: false
            });
        };
        $scope.newtask = '';

        localStorage.setItem('tasks', JSON.stringify($scope.tasks));
    };

    $scope.clearComplete = function() {

        var completedTask = $scope.tasks;
        $scope.tasks = [];
        angular.forEach(completedTask, function(tasks) {
            if (!tasks.complete) {
                $scope.tasks.push(tasks);
            }
        });
        localStorage.setItem('tasks', JSON.stringify($scope.tasks));
    };

    $scope.save = function() {
        localStorage.setItem('tasks', JSON.stringify($scope.tasks));
    };
});
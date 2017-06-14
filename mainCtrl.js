dp.controller('mainCtrl', function($scope, mainService){

    $scope.test = "Two-way data binding!"

    $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

    $scope.announceDay = function(lesson, day){
        alert(lesson + day + '.')
    };
});

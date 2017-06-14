dp.directive('lessonHider', function(){

    return {
        templateUrl: 'lessonHider.html',
        restrict: 'E',
        scope: {
            lesson: '=',
            dayAlert: '&'
        },
        controller: function($scope, mainService){
            $scope.getSchedule = mainService.getSchedule();
        },
        link: function($scope, element, attribute){

            $scope.getSchedule.then(function(response){
                $scope.schedule = response.data;

            $scope.schedule.forEach(function(scheduleDay) {
                if (scheduleDay.lesson === $scope.lesson){
                    $scope.lessonDay = scheduleDay.weekday;
                    element.css('text-decoration', 'line-through');
                    return;
                }
                });
            });
        }
    }
});
dp.service('mainService', function($http){

    this.getSchedule = getSchedule;
    
    function getSchedule(){
        return $http.get('schedule.json');

    }
});
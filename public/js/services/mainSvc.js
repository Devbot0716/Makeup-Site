angular.module('app')
  .service('mainSvc', function($http){

    // const localhost = 'http://localhost:3000';
    // function test (){
    //   $http.get('/test')
    //   .then( (res) => console.log(res) );
    // }
    // test();

        var localhost = 'http://localhost:3000';

        this.send = function(email) {
          return $http({
            method: "POST",
            url: '/api/send_email',
            data: email
          }).then(function(response) {
              console.log('response', response)
          })
        }

        this.getInfo = function(){ //API Call
          return $http.get(localhost + "/getAll")
        }

        this.getImages = function(type){
          return $http ({
            method: "GET",
            url: localhost + "/getImages/" + type
          }).then(function(response){
            return response.data;
          })
        }

        this.getDetails = (ID)=>{
          return $http ({
            method: 'GET',
            url: localhost + '/getDetails/' + ID

          }).then(function(response){
            return response.data;
          })
        }
  });

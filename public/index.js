angular.module('app',[])
	.controller('AppController',function($http){
      
      var iot = this
            getiot ()
        iot.regis=function(input){
          console.log(input)
        }

      iot.submit = function (data) {
      $http.post('/api/iot', data)
        .then(function success (response) {
          console.log(response)
          getiot()
          alert('Success')
        }, function error (response) {
          alert(response.data.message)
        })
    }	

       function getiot () {
       $http.get('/api/iot')
        .then(function success (response) {
          iot.val = response.data
          console.log(response)
        }, function error (response) {
          alert(response.data.message)
        })
    }

iot.graph = function(){
             
      console.log("graph working") 
      $http.get('/api/iot')
              .then(function success (response) {
         
                  var data = {
                              labels: [],
                              datasets: [
                                  {
                                      label: "temperature",
                                      fillColor: "rgba(255,0,0,0.1)",
                                      strokeColor: "rgba(255,0,0,1)",
                                      pointColor: "rgba(255,0,0,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(220,220,220,1)",
                                      data: []
                                  },
                                  {
                                      label: "relative_humidity",
                                      fillColor: "rgba(69,187,91,0.1)",
                                      strokeColor: "rgba(69,187,91,1)",
                                      pointColor: "rgba(69,187,91,1)",
                                      pointStrokeColor: "#fff",
                                      pointHighlightFill: "#fff",
                                      pointHighlightStroke: "rgba(151,187,205,1)",
                                      data: []
                                  }
                              ]
                          };

               var ctx = document.getElementById("iot").getContext("2d")
               var myLineChart = new Chart(ctx).Line(data);

               
                  for(var i =0;i<response.data.length;i++){
                    if (response.data[i].iot_id==1){
                         myLineChart.addData([response.data[i].temperature, response.data[i].relative_humidity] ,response.data[i].timestamp);
                       }
                   
                }
               

              }, function error (response) {
                alert(response.data.message)
              }) 
      
    }

    iot.toThaiDateTime = function(date){
       return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }

	})


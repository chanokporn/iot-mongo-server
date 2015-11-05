angular.module('app',[])
	.controller('AppController',function($http){
      
      var iot = this
            getiot ()
      iot.toRegis = function(){

        window.location = 'register.html'

      }

        iot.regis=function(input){
          console.log(input)
          $http.post('/api/member', input)
          .then(function success (response) {
            console.log(response)
           
            alert('Success')
          }, function error (response) {
            alert(response.data.message)
          })



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

iot.showGraph = function(){
    iot.graph()

}

iot.graph = function(){
             
      console.log("graph working") 
      $http.get('/api/iot')
              .then(function success (response) {
                var hu1avg = 0 ,tem1avg = 0 ,c1=0
                var hu2avg = 0 ,tem2avg = 0 ,c2=0
                var hu3avg = 0 ,tem3avg = 0 ,c3=0
                var hu4avg = 0 ,tem4avg = 0 ,c4=0
                var hu5avg = 0 ,tem5avg = 0 ,c5=0
                var hu6avg = 0 ,tem6avg = 0 ,c6=0
                var hu7avg = 0 ,tem7avg = 0 ,c7=0
                var hu8avg = 0 ,tem8avg = 0 ,c8=0
                var hu9avg = 0 ,tem9avg = 0 ,c9=0
                var hu10avg = 0 ,tem10avg = 0 ,c10=0

            
               
                for(var i =0;i<response.data.length;i++){
                      if(response.data[i].iot_id ==0){
                        hu1avg = hu1avg + response.data[i].relative_humidity
                        tem1avg = tem1avg + response.data[i].temperature

                        c1 = c1+ 1


                            
                        }
                        if(response.data[i].iot_id ==1){
                        hu2avg = hu2avg + response.data[i].relative_humidity
                        tem2avg = tem2avg + response.data[i].temperature

                        c2 = c2+ 1
                            

                        }
                        if(response.data[i].iot_id ==2){
                        hu3avg = hu3avg + response.data[i].temperature
                        tem3avg = tem1avg + response.data[i].temperature

                        c3 = c3+ 1
                            

                        }
                        if(response.data[i].iot_id ==3){
                        hu4avg = hu4avg + response.data[i].relative_humidity
                        tem4avg = tem3avg + response.data[i].temperature

                        c4 = c4+ 1
                            

                        }
                        if(response.data[i].iot_id ==4){
                        hu5avg = hu5avg + response.data[i].relative_humidity
                        tem5avg = tem4avg + response.data[i].temperature

                        c5 = c5+ 1
                            

                        }
                        if(response.data[i].iot_id ==5){
                        hu6avg = hu6avg + response.data[i].relative_humidity
                        tem6avg = tem5avg + response.data[i].temperature

                        c6 = c6+ 1
                            

                          
                        }
                      if(response.data[i].iot_id ==6){
                        hu7avg = hu7avg + response.data[i].relative_humidity
                        tem7avg = tem1avg + response.data[i].temperature

                        c7 = c7+ 1
                            

                        }
                      if(response.data[i].iot_id ==7){
                        hu8avg = hu8avg + response.data[i].relative_humidity
                        tem8avg = tem8avg + response.data[i].temperature

                        c8 = c8+ 1
                            

                            
                        }
                       if(response.data[i].iot_id ==8){
                        hu9avg = hu9avg + response.data[i].relative_humidity
                        tem9avg = tem9avg + response.data[i].temperature

                        c9 = c9+ 1
                            

                            
                        }
                      if(response.data[i].iot_id == 9){
                        hu10avg = hu10avg + response.data[i].relative_humidity
                        tem10avg = tem10avg + response.data[i].temperature

                        c10 = c10+ 1
                            

                           
                        }
                        
                        
                      
                }
                hu1avg = hu1avg/c1
                hu2avg = hu2avg/c2
                hu3avg = hu3avg/c3
                hu4avg = hu4avg/c4
                hu5avg = hu5avg/c5
                hu6avg = hu6avg/c6
                hu7avg = hu7avg/c7
                hu8avg = hu8avg/c8
                hu9avg = hu9avg/c9
                hu10avg = hu10avg/c10
               

                tem1avg = tem1avg/c1
                tem2avg = tem2avg/c2
                tem3avg = tem3avg/c3
                tem4avg = tem4avg/c4
                tem5avg = tem5avg/c5
                tem6avg = tem6avg/c6
                tem7avg = tem7avg/c7
                tem8avg = tem8avg/c8
                tem9avg = tem9avg/c9
                tem10avg = tem10avg/c10
                
            // bar chart data
            var barData = {
                labels : ["IoT-0","IoT-1","IoT-2","IoT-3","IoT-4","IoT-5","IoT-6","IoT-7","IoT-8",'IoT-9'],
                datasets : [
                  
                    {
                        fillColor : "rgba(0,0,255,0.9)",
                        strokeColor : "rgba(72,174,209,0.4)",
                        data : [tem1avg,tem2avg,tem3avg,tem4avg,tem5avg,tem6avg,tem7avg,tem8avg,tem9avg,tem10avg]
                    },

                    {
                        fillColor : "rgba(73,188,170,0.9)",
                        strokeColor : "rgba(72,174,209,0.9)",
                        data : [hu1avg,hu2avg,hu3avg,hu4avg,hu5avg,hu6avg,hu7avg,hu8avg,hu9avg,hu10avg]
                    }
                   
                ]
            }
            // get bar chart canvas
            var iot = document.getElementById("iot").getContext("2d");
            // draw bar chart
            new Chart(iot).Bar(barData);

           

        })
}

       
      
    
    

iot.toThaiDateTime = function(date){
       return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }

iot.delete = function (id, index) {
      console.log(id)
      $http.delete('/api/iot/' + id)
        .success(function (data) {
          alert('delete')
          iot.val.splice(index, 1)
        })
        .error(function (data) {
          alert('error')
          console.log('Error: ' + data)
        })
    }


iot.login = function (data) {
      console.log(data.username+" "+data.password)
         $http.post('/login', {username : data.username , password : data.password })
            .then(function success (response) {
              console.log(response)
              if(response.data[0].username == data.username && response.data[0].password == data.password){
                console.log("have user")
                window.location = 'report.html    '
              }
              else {
                window.location = 'index.html'
              }
              alert('Success')
            }, function error (response) {
              alert(response.data.message)
            })

    } 

	})


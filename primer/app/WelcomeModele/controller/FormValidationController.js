/**
 * Created by csalazar on 02/05/2016.
 */
//Generar nuestro modulo

var app = angular.module('LoginFormModule',[]);


//Controller
app.controller('LoginFormController',function ($scope,$http){
    //modelo, entidad generada para sustentar la vista
    $scope.formModel = {};

    //funcion que llama al submit

    $scope.onSubmit = function(){
      console.log("Llegue, !primer submit con AngularJs");
                    console.log($scope.formModel);

        //mas adelante, veremos llamadas http

    };

    
});

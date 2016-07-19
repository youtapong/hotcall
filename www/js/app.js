// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.controller('PhoneController', ['$scope', function($scope) {

    $scope.profiles = [
      {name:'Youtapong TOT', tel: '0819462636'},
      {name:'Youtapong AIS ', tel: '0899492636'},
      {name:'Prapa TOT', tel: '0893006463'},
      {name:'Prapa AIS', tel: '0818096336'},
      {name:'Title', tel: '0814078777'},
      {name:'Titon', tel: '0859077999'},
      {name:'GrandMOM', tel: '0814465999'},
      {name:'Thong', tel: '0835454265'},
      {name:'NumPhung', tel: '0805965466'},
      {name:'Father Tong', tel: '0871329053'}
    ];

}])

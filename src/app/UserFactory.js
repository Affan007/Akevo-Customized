/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
// (function() {
	'use strict';

	angular.module('BlurAdmin.authService', [])
		.factory('User', ['$http', '$location', '$q', '$rootScope', '$window', function ($http, $location, $q, $rootScope, $window ) {


			var ServerAdress = 'http://hhj.net';



			return {

				// Login : function(){
				// 	//userdata=UserData;
				// 	recivedData=getObject('encrypteddata');
				// 	token=recivedData;
				// 	return $http.get(ServerAdress+'/abc',{
				// 		headers: {'Content-Type':'application/json','cache-control': 'no-cache','xxx-access':token }
				// 	}).success(function(data){
				// 		console.log(data);
				// 	});
				// },


			}
		}]);
// })

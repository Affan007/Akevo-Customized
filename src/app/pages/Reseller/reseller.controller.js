/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.sides.reseller')
      .controller('resellerCtrl', resellerCtrl);
  function resellerCtrl($scope, $state, $window, $timeout,User,$document) {
    console.log("hi");


    $scope.standardItem = {};
    $scope.standardSelectItems = [
      {label: 'Active', value: 'active'},
      {label: 'In-Active', value:'In-Active'}
    ];

    $scope.commisionSelectItems = [
      {label: 'Persentage', value: 'Persentage'},
      {label: 'Fixed', value:'Fixed'}
    ];
    $scope.selectedcommision=$scope.commisionSelectItems[0];
    $scope.smartTablePageSize = 10;

    $scope.smartTableData = [
      {
        id: 1,
        Count: '1',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 2,
        Count: '2',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 3,
        Count: '3',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 4,
        Count: '4',
        amount: '2000',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 5,
        Count: '5',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 6,
        Count: '6',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 7,
        Count: '7',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 8,
        Count: '8',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 9,
        Count: '9',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 11,
        Count: '11',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 12,
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 13,
        Count: '13',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 14,
        Count: '14',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 15,
        Count: '15',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 16,
        Count: '16',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 17,
        Count: '17',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 18,
        Count: '18',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 19,
        Count: '19',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 20,
        Count: '20',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 21,
        Count: '21',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 22,
        Count: '22',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 23,
        Count: '23',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 24,
        Count: '24',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 25,
        Count: '25',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 26,
        Count: '26',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 27,
        Count: '27',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 28,
        Count: '28',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 29,
        Count: '29',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 30,
        Count: '30',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 31,
        Count: '31',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 32,
        Count: '32',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 33,
        Count: '33',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 34,
        Count: '34',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 35,
        Count: '35',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      },
      {
        id: 36,
        Count: '36',
        name: 'Chaudery',
        mobile: '03419695949',
        email: 'chaudery@yahoo.com',
        pass: 'asdfg',
        currentBalance: '300',
        dueBalance: '200'
      }


    ];




    $scope.stats={
      Credits: 539,
      Debits: 339,
      Balance: 1000
    }
    $document.ready(function(){
      $scope.type=User.GetUser()
      if($scope.type =='Partner'){
        $timeout(function () {
          // var auth = document.getElementsByClassName('a.al-sidebar-list-link').style.display = "none";
          var elems = document.querySelectorAll("a.al-sidebar-list-link");

          var n = 5;
          elems.item(5).style.display = "none";

     }, 100);
      }
      else if ($scope.type =='Reseller') {
        $timeout(function () {
          // var auth = document.getElementsByClassName('a.al-sidebar-list-link').style.display = "none";
          var elems = document.querySelectorAll("a.al-sidebar-list-link");

          var n = 5;

          elems.item(0).style.display = "none";
            elems.item(2).style.display = "none";
            elems.item(5).style.display = "none";
            // elems.item(1).style.display = "none";
              var elems1 = document.querySelectorAll(".ba-sidebar-sublist-item");
            elems1.item(3).style.display = "none";
              elems1.item(4).style.display = "none";
            console.log(elems1);
          console.log(elems);
     }, 100);
      }
      else{
        var elems = document.querySelectorAll("a.al-sidebar-list-link");
        var n = 5;
        elems.item(5).style.display = "block";
        console.log(elems);
      }


    });

    }
  /** @ngInject */


})();

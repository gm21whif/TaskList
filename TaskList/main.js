var app = angular.module("TasksList", []);
app.controller("TasksController", function ($scope) {
  $scope.ToDoArr = [];
  $scope.addTodo = function () {
    if ($scope.td != "") {
      $scope.ToDoArr.push($scope.td);
      $scope.td = [];
    } else {
      alert("Please Enter Something...");
    }
  };

  $scope.deleteItem = function (index) {
    $scope.ToDoArr.splice(index, 1);
  };

  $scope.DoingArr = [];
  $scope.addDoing = function () {
    if ($scope.di != "") {
      $scope.DoingArr.push($scope.di);
      $scope.di = [];
    } else {
      alert("Please Enter Something...");
    }
  };

  $scope.deleteItemDoing = function (index) {
    $scope.DoingArr.splice(index, 1);
  };

  $scope.DoneArr = [];
  $scope.addDone = function () {
    if ($scope.dn != "") {
      $scope.DoneArr.push($scope.dn);
      $scope.dn = [];
    } else {
      alert("Please Enter Something...");
    }
  };

  $scope.deleteItemDone = function (index) {
    $scope.DoneArr.splice(index, 1);
  };
});

/*===== DRAG and DROP =====*/

const dropItems = document.getElementById("drop-items");

new Sortable(dropItems, {
  animation: 350,
  chosenClass: "sortable-chosen",
  dragClass: "sortable-drag",
});

const dropItems1 = document.getElementById("drop-items1");

new Sortable(dropItems1, {
  animation: 350,
  chosenClass: "sortable-chosen",
  dragClass: "sortable-drag",
});

const dropItems2 = document.getElementById("drop-items2");

new Sortable(dropItems2, {
  animation: 350,
  chosenClass: "sortable-chosen",
  dragClass: "sortable-drag",
});

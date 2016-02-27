'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.$scope = $scope;
    this.awesomeThings = [];

    $http.get('/api/things/').then(res => {
      this.$scope.awesomeThings = res.data;
      socket.syncUpdates('thing', this.$scope.awesomeThings);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things/', { name: this.$scope.newThing });
      this.$scope.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('generatorAngularFullstackApp')
  .controller('MainController', MainController);

})();

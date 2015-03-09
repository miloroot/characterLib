app.controller("wowController", ["$http", "$scope", function($http, $scope) {
  console.log("wowController is ACTIVE.");

  //$scope.characters = {};

  // get local .json-file
  //$http.get("data/characters.json").
  //success(function(data) {
  //  console.log("Characters.json data", data);

  //  $scope.characters = data;
  //  return $scope.characters;
  //});

  //
  // get wowAPI (dev.battle.net) .json-file
  //

  // suavemente
  $scope.suavemente = {};
  $http.jsonp("https://eu.api.battle.net/wow/character/Agamaggan/Suavemente?fields=stats,talents&locale=en_GB&jsonp=JSON_CALLBACK&apikey=y4793mxkjn5y5s8evtqd59h3byh7f24z").
  success(function(data) {
    console.log("Suavemente wowAPI data JSONP: ", data);

    $scope.suavemente = data;
    return $scope.suavemente;
  });

  // magustroll
  $scope.magustroll = {};
  $http.jsonp("https://eu.api.battle.net/wow/character/Agamaggan/Magustroll?fields=stats,talents&locale=en_GB&jsonp=JSON_CALLBACK&apikey=y4793mxkjn5y5s8evtqd59h3byh7f24z").
  success(function(data) {
    console.log("Magustroll wowAPI data JSONP: ", data);

    $scope.magustroll = data;
    return $scope.magustroll;
  });

  // benjamin
  $scope.benjamin = {};
  $http.jsonp("https://eu.api.battle.net/wow/character/Uldum/Benjamin?fields=stats,talents&locale=es_ES&jsonp=JSON_CALLBACK&apikey=y4793mxkjn5y5s8evtqd59h3byh7f24z").
  success(function(data) {
    console.log("Benjamin wowAPI data JSONP: ", data);

    $scope.benjamin = data;
    return $scope.benjamin;
  });

  // marselus
  $scope.marselus = {};
  $http.jsonp("https://eu.api.battle.net/wow/character/Uldum/Marselus?fields=stats,talents&locale=es_ES&jsonp=JSON_CALLBACK&apikey=y4793mxkjn5y5s8evtqd59h3byh7f24z").
  success(function(data) {
    console.log("Marselus wowAPI data JSONP: ", data);

    $scope.marselus = data;
    return $scope.marselus;
  });

}]);

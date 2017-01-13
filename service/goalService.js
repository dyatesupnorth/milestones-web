angular.module('milestones').factory('goalService',function($http) {

	var goalService = {};

	return {
		get: function () {
			return $http.get('http://localhost:8000/v1/goals');
		},
		getFeed: function (token) {
			return $http.get('http://localhost:8000/v1/feed/?token=' + token);
		},
		show: function (id) {
			return $http.get('http://localhost:8000/v1/blether/' + id);
		},
		save: function (goal) {
			console.log(goal);

			return $http({
				method: 'POST',
				url: 'http://localhost:8000/v1/goals/',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				//params: {token: bletherData.token},
				data: $.param(goal)
			});
		},
		destroy: function (id) {
			return $http.delete('http://localhost:8000/v1/blether/' + id);
		}
	};
});
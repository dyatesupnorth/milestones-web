angular.module('milestones').factory('milestoneService',function($http, URL) {

	var milestoneService = {};



	return {
		get: function () {
			return $http.get(URL.DOMAIN + '/v1/milestones');
		},
		getFeed: function (token) {
			return $http.get(URL.DOMAIN + '/v1/feed/?token=' + token);
		},
		show: function (id) {
			return $http.get(URL.DOMAIN + '/v1/blether/' + id);
		},
		update: function (milestone) {
			return $http({
				method: 'PUT',
				url: URL.DOMAIN + '/v1/milestones/' + milestone._id,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				//params: {id: milestone._id},
				data: $.param(milestone)
			});
			//return $http.put("http://localhost:8000/v1/milestones/", $.param(milestone));
			//return $http.put('http://localhost:8000/v1/milestones/' + milestone._id);
		},
		store: function (milestone) {
			return $http({
				method: 'POST',
				url: URL.DOMAIN + '/v1/milestones/',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				//params: {token: bletherData.token},
				data: $.param(milestone)
			});
		},
		destroy: function (id) {
			return $http.delete(URL.DOMAIN + '/v1/milestones/' + id);
		}
	};
});
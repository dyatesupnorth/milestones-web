angular.module('milestones').factory('categoryService',function($http, URL) {

	var categoryService = {};
console.log(URL.DOMAIN);
	return {
		get: function () {
			return $http.get(URL.DOMAIN + '/v1/categories');
		},
		getFeed: function (token) {
			return $http.get(URL.DOMAIN + '/v1/feed/?token=' + token);
		},
		show: function (id) {
			return $http.get(URL.DOMAIN + '/v1/categories/' + id);
		},
		save: function (bletherData) {
			console.log(bletherData.token);

			return $http({
				method: 'POST',
				url: URL.DOMAIN + '/v1/milestones/',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				params: {token: bletherData.token},
				data: $.param(bletherData)
			});
		},
		destroy: function (id) {
			return $http.delete(URL.DOMAIN + '/v1/categories/' + id);
		}
	};
});
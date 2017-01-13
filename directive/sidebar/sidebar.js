angular.module('milestones').directive('sidebar', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: 'directive/sidebar/sidebar.html',
		link: function(scope, element, attrs, fn) {
			$.AdminLTE.tree('.sidebar');

		}
	};
});

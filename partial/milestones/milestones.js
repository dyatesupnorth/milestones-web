angular.module('milestones').controller('MilestonesCtrl', function ($scope, categoryService, goalService, milestoneService) {

    $scope.categories = {};

    $scope.newMilestone = {};

    function getGoalProgressType(goal) {
        var type;

        if (goal.percentage < 25) {
            type = 'danger';
        } else if (goal.percentage <= 99) {
            type = 'warning';
        } else if (goal.percentage === "100" || goal.percentage === 100) {
            type = 'success';
        } else {
            type = 'danger';
        }
        return type;
    }

    function refreshGoal(goal, data){

            goal.percentage = data.goal.percentage;

            goal.progressType = getGoalProgressType(data.goal);

            goal.is_complete = data.goal.is_complete;



    }

    function getMilestones() {
        categoryService.get()
            .success(function (data) {

                $scope.categories = data.categories;

                angular.forEach($scope.categories, function (category) {
                    angular.forEach(category.goals, function (goal) {


                        goal.progressType = getGoalProgressType(goal);

                    });
                });
            }).catch(function(error){
                console.log(error);
            });

    }

    $scope.addGoal = function (category) {

        var goal = {
            "category_id": category._id,
            "goal_name": category.newGoalName,
            "is_complete": false,
            "percentage": 0,
            "created_at": new Date()
        };

        goalService.save(goal).success(function (data) {
            category.goals.push(goal);
            $scope.showAddGoal = false;


        });
    };
    $scope.addMilestone = function (goal) {

        var milestone = {
            "goal_id": goal._id,
            "milestone_name": goal.newMilestoneName,
            "is_complete": false
        };

        milestoneService.store(milestone).success(function (data) {

            goal.milestones.push(milestone);

            refreshGoal(goal,data);


            milestone._id = data.milestone._id;

        });
    };
    $scope.toggleMilestone = function (goal, milestone) {

        milestone.is_complete = !milestone.is_complete;


        console.log(milestone.is_complete);

        milestoneService.update(milestone).success(function (data) {

           refreshGoal(goal,data);

        });

    };

    $scope.deleteMilestone = function (goal, milestone) {

        milestoneService.destroy(milestone._id).success(function (data) {

            console.log(data);


            goal.milestones.splice(goal.milestones.indexOf(milestone), 1);
            refreshGoal(goal,data);

        });

    };
    getMilestones();
});
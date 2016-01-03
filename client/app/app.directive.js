'use strict';

(function(){
    
  angular.module('juridicaWebApp')
    .directive('jmDate', function($filter) {
      return {
        restrict: 'E',
        require: '?ngModel',
        templateUrl: './templates/jmDate.html',
        link: function(scope, element, attrs, ngModel) {
          if (!ngModel) return;

          // GET FROM NG MODEL AND PUT IT IN LOCAL SCOPE
          ngModel.$render = function() {
            scope.date = {
              day: $filter('date')(ngModel.$viewValue, 'dd'),
              month: $filter('date')(ngModel.$viewValue, 'MM'),
              year: $filter('date')(ngModel.$viewValue, 'yyyy')
            };
          };

          // ATTRIBUTES (with default values if not set)
          scope.yearOrder = (attrs.yearOrder && attrs.yearOrder === 'asc') ? false : true; // year order: 'asc' or 'desc', default: desc
          var currentYear = new Date().getFullYear();
          var endYear = currentYear - attrs.minYearsOld || currentYear; // default: this year
          var startYear = currentYear - attrs.maxYearsOld || currentYear - 5; // default: this year - 80

          // INIT YEARS, MONTHS AND DAYS NUMBER
          scope.selects = {

            days: function() {

              // Get number of days based on month + year 
              // (January = 31, February = 28, April = 30, February 2000 = 29) or 31 if no month selected yet
              var nbDays = new Date(scope.date.year, scope.date.month, 0).getDate() || 31;

              var daysList = [];
              for (var i = 1; i <= nbDays; i++) {
                var iS = i.toString();
                daysList.push((iS.length < 2) ? '0' + iS : iS); // Adds a leading 0 if single digit
              }
              return daysList;
            },
            years: function() {
              var yearsList = [];
              for (var i = endYear; i >= startYear; i--) {
                yearsList.push(i.toString());
              }
              return yearsList;
            }
          };

          // WATCH FOR scope.date CHANGES
          scope.$watch('date', function(date) {

            // IF REQUIRED
            if (attrs.required) {

              // VALIDATION RULES
              var yearIsValid = !!date.year && parseInt(date.year) <= endYear && parseInt(date.year) >= startYear;
              var monthIsValid = !!date.month;
              var dayIsValid = !!date.day;

              console.log(yearIsValid, monthIsValid, dayIsValid);

              // SET INPUT VALIDITY
              ngModel.$setValidity('required', yearIsValid || monthIsValid || dayIsValid ? true : false);
              ngModel.$setValidity('yearRequired', yearIsValid ? true : false);
              ngModel.$setValidity('monthRequired', monthIsValid ? true : false);
              ngModel.$setValidity('dayRequired', dayIsValid ? true : false);

              // UPDATE NG MODEL
              if (yearIsValid && monthIsValid && dayIsValid) {
                ngModel.$setViewValue(new Date(date.year, date.month - 1, date.day));
              }
            }

            // IF NOT REQUIRED (still need the 3 values filled to update the model)
            else if (date.year && date.month && date.day) {
              ngModel.$setViewValue(new Date(date.year, date.month - 1, date.day));
            }

          }, true);
        }
      }
    });

}());
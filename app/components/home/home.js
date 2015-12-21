import angular from 'angular';

import { homeDirective } from './home.component';

export default angular.module('myapp-home', [])
	.directive('myappHome', homeDirective);
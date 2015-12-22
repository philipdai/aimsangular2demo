import angular from 'angular';
import { mainContentDirective } from './main-content.component';
import orgDemo from './org-demo/org-demo';

// console.log(orgDemo);

export default angular.module('main-content', [orgDemo.name])
	.directive('mainContent', mainContentDirective);
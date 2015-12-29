import angular from 'angular';
import { mainContentDirective } from './main-content.component';
import orgDemo from './org-demo/org-demo';
import saveContinue from './save-continue/save-continue';

export default angular.module('main-content', [orgDemo.name, saveContinue.name])
	.directive('mainContent', mainContentDirective);
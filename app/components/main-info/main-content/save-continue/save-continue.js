import angular from 'angular';
import { saveContinueDirective } from './save-continue.component';

export default angular.module('save-continue', [])
	.directive('saveContinue', saveContinueDirective);
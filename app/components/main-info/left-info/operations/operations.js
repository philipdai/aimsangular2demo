import angular from 'angular';
import { operationsDirective } from './operations.component';

export default angular.module('operations', [])
	.directive('operations', operationsDirective);
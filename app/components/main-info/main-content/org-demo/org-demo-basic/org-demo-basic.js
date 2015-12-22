import angular from 'angular';
import { orgDemoBasicDirective } from './org-demo-basic.component';

export default angular.module('org-demo-basic', [])
	.directive('orgDemoBasic', orgDemoBasicDirective);
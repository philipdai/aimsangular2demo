import angular from 'angular';
import { orgDemoAddrDirective } from './org-demo-addr.component';

export default angular.module('org-demo-addr', [])
	.directive('orgDemoAddr', orgDemoAddrDirective);
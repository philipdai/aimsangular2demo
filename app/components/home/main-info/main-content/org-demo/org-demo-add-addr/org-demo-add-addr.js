import angular from 'angular';
import { orgDemoAddAddrDirective } from './org-demo-add-addr.component';

export default angular.module('org-demo-add-addr', [])
	.directive('orgDemoAddAddr', orgDemoAddAddrDirective);
import angular from 'angular';
import { orgDemoDirective } from './org-demo.component';
import orgDemoBasic from './org-demo-basic/org-demo-basic';
import orgDemoAddr from './org-demo-addr/org-demo-addr';
import orgDemoAddAddr from './org-demo-add-addr/org-demo-add-addr';

export default angular.module('org-demo', [orgDemoBasic.name, orgDemoAddr.name, orgDemoAddAddr.name])
	.directive('orgDemo', orgDemoDirective);
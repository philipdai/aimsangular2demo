import angular from 'angular';
import { orgDemoAddrDirective } from './org-demo-addr.component';
import OrgDemoAddrService from './org-demo-addr.service';

export default angular.module('org-demo-addr', [])
	.service('addrService', OrgDemoAddrService)
	.directive('orgDemoAddr', orgDemoAddrDirective);
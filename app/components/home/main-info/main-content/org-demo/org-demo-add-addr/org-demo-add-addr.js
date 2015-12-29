import angular from 'angular';
import { orgDemoAddAddrDirective } from './org-demo-add-addr.component';
import OrgDemoAddrService from '../org-demo-addr/org-demo-addr.service';

export default angular.module('org-demo-add-addr', [])
	.service('addrService', OrgDemoAddrService)
	.directive('orgDemoAddAddr', orgDemoAddAddrDirective);
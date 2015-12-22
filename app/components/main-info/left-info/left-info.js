import angular from 'angular';
import { leftInfoDirective } from './left-info.component';
import operations from './operations/operations';
import menus from './menus/menus';



export default angular.module('left-info', [operations.name, menus.name])
	.directive('leftInfo', leftInfoDirective);
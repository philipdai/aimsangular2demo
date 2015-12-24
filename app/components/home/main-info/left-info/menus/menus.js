import angular from 'angular';
import { menusDirective } from './menus.component';

export default angular.module('menus', [])
	.directive('menus', menusDirective);
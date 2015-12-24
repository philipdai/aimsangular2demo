import angular from 'angular';
import { mainInfoDirective } from './main-info.component';
import leftInfo from './left-info/left-info';
import mainContent from './main-content/main-content';

export default angular.module('main-info', [leftInfo.name, mainContent.name])
	.directive('mainInfo', mainInfoDirective);
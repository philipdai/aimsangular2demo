import angular from 'angular';
import { topInfoDirective } from './top-info.component';

export default angular.module('topInfo', [])
  .directive('topInfo', topInfoDirective);
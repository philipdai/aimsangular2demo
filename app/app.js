import angular from 'angular';
import home from './components/home/home';

let myApp = angular.module('myapp', [home.name]);

export default myApp;
import angular from 'angular';
import home from './components/home/home';

console.log(home);
console.log(home.name);

let myApp = angular.module('myapp', [home.name]);

export default myApp;
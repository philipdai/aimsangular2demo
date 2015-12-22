import template from './left-info.html';
import { LeftInfoComponent as controller } from './left-info.component';

export const leftInfoDirective = () => {
	return {
		template: template,
		controller: controller,
		controllerAs: 'vm'
	};
}; 

class LeftInfoComponent {
	constructor() {}
}

export { LeftInfoComponent };
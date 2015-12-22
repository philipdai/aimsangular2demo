import template from './main-info.html';
import { MainInfoComponent as controller } from './main-info.component';

export const mainInfoDirective = () => {
	return {
		template: template,
		controller: controller,
		controllerAs: 'vm'
	};
}; 

class MainInfoComponent {
	constructor() {}
}

export { MainInfoComponent };
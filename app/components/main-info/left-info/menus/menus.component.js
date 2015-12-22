import template from './menus.html';
import { MenusComponent as controller } from './menus.component';

export const menusDirective = () => {
	return {
		template: template,
		controller: controller,
		controllerAs: 'vm'
	};
}; 

class MenusComponent {
	constructor() {}
}

export { MenusComponent };
import template from './main-content.html';
import { MainContentComponent as controller } from './main-content.component';

// console.log(template);

export const mainContentDirective = () => {
	return {
		template: template,
		controller: controller,
		controllerAs: 'vm'
	};
};

class MainContentComponent {
	constructor() {

	}
}

export { MainContentComponent };
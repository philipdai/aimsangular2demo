import template from './save-continue.html';
import { SaveContinueComponent as controller } from './save-continue.component';

export const saveContinueDirective = () => {
	return {
		template: template,
		controller: controller,
		controllerAs: 'vm'
	};
};

class SaveContinueComponent {
	constructor() {}
}

export { SaveContinueComponent };
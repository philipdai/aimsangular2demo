import template from './save-continue.html';
import { orgDemo } from '../org-demo/org-demo.component';
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

	save() {
		console.log('Save button clicked!');
		console.log(orgDemo);
	}

	saveAndContinue() {}
}

export { SaveContinueComponent };
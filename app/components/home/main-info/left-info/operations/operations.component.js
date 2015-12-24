import template from './operations.html';
import { OperationsComponent as controller } from './operations.component';

export const operationsDirective = () => {
	return {
		template: template,
		controller: controller,
		controllerAs: 'vm'
	};
}; 

class OperationsComponent {
	constructor() {}
}

export { OperationsComponent };
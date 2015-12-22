import template from './org-demo-basic.html';
import { OrgDemoBasicComponent as controller } from './org-demo-basic.component';

export const orgDemoBasicDirective = () => {
	return {
		template: template,
		controller: controller,
		controllerAs: 'vm'
	};
};

class OrgDemoBasicComponent {
	constructor() {}
}

export { OrgDemoBasicComponent };
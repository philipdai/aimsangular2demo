import template from './org-demo.html';
import { OrgDemoComponent as controller } from './org-demo.component';

export const orgDemoDirective = () => {
	return {
		template: template,
		controller: controller,
		controllerAs: 'vm'
	};
};

class OrgDemoComponent {
	constructor() {}
}

export { OrgDemoComponent };
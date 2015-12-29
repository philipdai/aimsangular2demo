import template from './org-demo.html';
import { OrgDemoComponent as controller } from './org-demo.component';

export const orgDemoDirective = () => {
	return {
		template: template,
		controller: controller,
		controllerAs: 'vm',
		bindToController: true,
    scope: {
    	orgDemo: '=',
    	addresses: '=',
    	id: "@"
    }
	};
};

export const orgDemo = {
	addresses: []
};

class OrgDemoComponent {
	constructor() {

		this.addresses = [];

	}
}

export { OrgDemoComponent };
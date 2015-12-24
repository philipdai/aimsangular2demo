import template from './org-demo-add-addr.html';
import { OrgDemoAddAddrComponent as controller } from './org-demo-add-addr.component';

export const orgDemoAddAddrDirective = () => {
	return {
		template: template,
		controller: controller,
		controllerAs: 'vm'
	};
};

class OrgDemoAddAddrComponent {
	constructor() {}
}

export { OrgDemoAddAddrComponent };
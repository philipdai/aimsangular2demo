import template from './org-demo-addr.html';
import { OrgDemoAddrComponent as controller } from './org-demo-addr.component';

export const orgDemoAddrDirective = () => {
	return {
		template: template,
		controller: controller,
		controllerAs: 'vm'
	};
};

class OrgDemoAddrComponent {
	constructor() {}
}

export { OrgDemoAddrComponent };
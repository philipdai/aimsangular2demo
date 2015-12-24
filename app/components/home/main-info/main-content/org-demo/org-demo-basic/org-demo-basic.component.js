import template from './org-demo-basic.html';
import { OrgDemoBasicComponent as controller } from './org-demo-basic.component';

export const orgDemoBasicDirective = () => {
	return {
		template: template,
		controller: controller,
		controllerAs: 'vm',
		bindToController: true,
    scope: {
    	orgDemoBasic: '=',
    	disPtnTypes: '='
    }
	};
};

class OrgDemoBasicComponent {
	constructor() {
		this.orgDemoBasic = {
			"disPtnType": '',
			"orgType": '',
			"orgName": ''
		}

		this.disPtnTypes = ['Organization', 'School', 'Hospital'];
		
	}
}

export { OrgDemoBasicComponent };
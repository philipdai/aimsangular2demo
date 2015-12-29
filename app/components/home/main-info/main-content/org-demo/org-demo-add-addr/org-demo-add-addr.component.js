import template from './org-demo-add-addr.html';
import { OrgDemoAddAddrComponent as controller } from './org-demo-add-addr.component';
import { orgDemo } from '../org-demo.component';

export const orgDemoAddAddrDirective = () => {
	return {
		template: template,
		controller: controller,
		controllerAs: 'vm',
		bindToController: true,
    scope: {
      addresses: '='
    }
	};
};

class OrgDemoAddAddrComponent {
	constructor(addrService) {
		this.addrService = addrService;

	}

	// addAddr(address) {
	// 	this.addresses = this.addrService.addAddr(this.addresses, address);
	// }

	addAddress() {

		var newAddrNo = this.addresses.length + 1;

		this.newAddr = {
			'id': "orgDemoAddress" + newAddrNo,
			'addrType': '',
			'attention': ''
		};

		this.addresses.push(this.newAddr);
		orgDemo.addresses.push(this.newAddr);

	}

}

OrgDemoAddAddrComponent.$inject = ['addrService'];

export { OrgDemoAddAddrComponent };
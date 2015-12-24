import template from './top-info.html';
import { TopInfoComponent as controller } from './top-info.component';

export const topInfoDirective = () => {
  return {
    template: template,
    controller: controller,
    controllerAs: 'vm',
    bindToController: true,
    scope: {
    	user: '='
    }
  };
};

class TopInfoComponent {
  constructor() {
  	this.user = {
  		'userId': 'NWIE04973',
  		'date': '12/25/2015'
  	};

  }
}

export { TopInfoComponent };

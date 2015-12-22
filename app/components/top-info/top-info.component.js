import template from './top-info.html';
import { TopInfoComponent as controller } from './top-info.component';

export const topInfoDirective = () => {
  return {
    template: template,
    controller: controller,
    controllerAs: 'vm'
  };
};

class TopInfoComponent {
  constructor() {
    this.userId = 'NWIE04973';
    this.date = '12/25/2015';
  }
}

export { TopInfoComponent };

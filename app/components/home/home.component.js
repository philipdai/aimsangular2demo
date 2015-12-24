import template from './home.html';
import { HomeComponent as controller } from './home.component';

export const homeDirective = () => {
	return {
  	template: template,
  	controller: controller,
  	controllerAs: 'vm'
	};
};

class HomeComponent {

	contructor() {

	}
}

export { HomeComponent };


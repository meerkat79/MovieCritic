import angular from 'angular';
import 'angular-mocks';
import {hello} from './dashboard';

describe('dashboard component', () => {
  beforeEach(() => {
    angular
      .module('fountainHello', ['app/dashboard.html'])
      .component('fountainHello', hello);
    angular.mock.module('fountainHello');
  });
  it('should render hello world', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<fountain-hello>Loading...</fountain-hello>')($rootScope);
    $rootScope.$digest();
    const h1 = element.find('h1');
    expect(h1.html()).toEqual('Hello World!');
  }));
});

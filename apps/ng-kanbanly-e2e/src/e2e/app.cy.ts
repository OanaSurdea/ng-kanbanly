import { getAppName } from '../support/app';

describe('ng-kanbanly', () => {
  beforeEach(() => cy.visit('/'));

  it('should display app name', () => {
    // Function helper example, see `../support/app.po.ts` file
    getAppName().contains('ng kanbanly');
  });
});

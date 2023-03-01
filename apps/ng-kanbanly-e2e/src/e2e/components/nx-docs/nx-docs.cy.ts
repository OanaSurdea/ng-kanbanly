import { getGreeting } from '../../../support/nx-docs.po';

describe('ng-kanbanly', () => {
  beforeEach(() => cy.visit('/nx-docs'));

  it('should display welcome message', () => {
    // Function helper example, see `../support/nx-docs.po.ts` file
    getGreeting().contains('Welcome ng-kanbanly 👋');
  });
});

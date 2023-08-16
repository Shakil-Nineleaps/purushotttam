describe('', () => {
    it('', () => {
        cy.visit('https://pda-stage.socion.io/new/iam/login')


        cy.lighthouse(
            {
      performance: 0,
      accessibility: 0,
      'best-practices': 0,
      seo: 0,
    },
    {
      formFactor: 'desktop',
      screenEmulation: {
        mobile: false,
        disable: false,
        width: Cypress.config('viewportWidth'),
        height: Cypress.config('viewportHeight'),
        deviceScaleRatio: 1,
      },
    },
        )
    });
});
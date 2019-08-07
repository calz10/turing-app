const app = require('../../src/app');

describe('\'buyer\' service', () => {
  it('registered the service', () => {
    const service = app.service('buyer');
    expect(service).toBeTruthy();
  });
});

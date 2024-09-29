import { getBrowserTarget } from './getBrowserTarget';

describe('getBrowserTarget', () => {
  it('should return es2020 for Edge 80', () => {
    expect(getBrowserTarget('Edg/80')).toBe('es2020');
  });
});

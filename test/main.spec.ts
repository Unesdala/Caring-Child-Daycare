
import * as main from '../src/main';

describe('Main', () => {
  it('renders to the root', () => {
    expect(main).toBeDefined();
    expect(document.getElementById('root')).not.toBe(null);
    expect(document.getElementById('root')).not.toBe(undefined);
  });
});

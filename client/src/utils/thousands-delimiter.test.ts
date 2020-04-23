import { delimitThousands } from './thousands-delimiter';

describe('thousands-delimiter', () => {
  it('should delimit thousands', () => {
    expect(delimitThousands(123)).toBe('123');
    expect(delimitThousands(1234)).toBe('1 234');
    expect(delimitThousands(12345678)).toBe('12 345 678');
  });
});

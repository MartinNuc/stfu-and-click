/**
 * @group unit
 */

import { makeTuples } from './make-tuples';

describe('Unit:makeTuples', () => {
  it('should make tuples of even array', () => {
    const input = [1, 2, 3, 4];
    const expected = [
      [1, 2],
      [3, 4],
    ];
    expect(makeTuples(input)).toEqual(expected);
  });

  it('should make tuples of odd array', () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [[1, 2], [3, 4], [5]];
    expect(makeTuples(input)).toEqual(expected);
  });
});

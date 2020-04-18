export function makeTuples<T>(array: T[]) {
  return array.reduce<T[][]>((acc, curr, index) => {
    if (index % 2) {
      // odd numbers go to the second in tuples
      const lastTuple = acc[acc.length - 1];
      lastTuple.push(curr);
    } else {
      // even numbers are forming a new tuple
      acc.push([curr]);
    }
    return acc;
  }, []);
}

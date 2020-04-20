export function delimitThousands(n: number) {
  return n
    .toString()
    .split('')
    .reverse()
    .reduce<string[]>(
      (acc, curr, index) => (index % 3 ? [...acc, curr] : [...acc, ' ', curr]),
      [],
    )
    .reverse()
    .join('')
    .trim();
}

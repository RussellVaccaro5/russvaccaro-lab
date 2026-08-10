/** Return a shuffled copy without mutating the source array. */
export function fisherYates<T>(items: readonly T[]): T[] {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

/**
 * Build a fresh shuffle bag and keep the previous item from immediately
 * repeating at the front when the pool contains alternatives.
 */
export function makeShuffleBag<T>(items: readonly T[], previous?: T): T[] {
  const bag = fisherYates(items);

  if (bag.length > 1 && previous !== undefined && bag[0] === previous) {
    const swapIndex = bag.findIndex((item) => item !== previous);
    [bag[0], bag[swapIndex]] = [bag[swapIndex], bag[0]];
  }

  return bag;
}

import { memoize } from 'lodash-es';
let nbs = (new Array(1_000_000)).fill(0).map(() => Math.random());

function findLowerCount(arrayNbs, val) {
  return arrayNbs.filter((el) => el < val).length;
}

const findLowerCountMemo = memoize(findLowerCount);

// const nbsLowerThan05 = useMemo(() => findLowerCount(nbs, 0.5), [nbs]);

// Sans memoisation
console.time('findLowerCount');
console.log(findLowerCountMemo(nbs, 0.5)); // 498630
console.timeEnd('findLowerCount'); // 71.366ms

console.time('findLowerCount');
console.log(findLowerCountMemo(nbs, 0.5)); // 498630
console.timeEnd('findLowerCount'); // 60.217ms

nbs = [...nbs, 0.2];

console.time('findLowerCount');
console.log(findLowerCountMemo(nbs, 0.5)); // 498630
console.timeEnd('findLowerCount'); // 43.323ms
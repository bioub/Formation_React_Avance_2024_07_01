export function promiseRandomTimeout(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, Math.floor(Math.random() * 1000));
  });
}

function schoolSlides() {
  return ['introduction/introduction.md'];
};

function formation() {
  return [
    ...schoolSlides(),
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}

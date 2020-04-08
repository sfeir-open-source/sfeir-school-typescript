function schoolSlides() {
  return [
    'introduction/introduction.md',
    'introduction/round-table.md',
    'speaker/nicoF.md',
    'speaker/anthonyP.md',
    'speaker/mathieuD.md',
    'introduction/day-planning.md',
  ];
};

function presentationSlides() {
  return [
    'presentation/transition-slide.md',
    'presentation/typescript_base.md',
  ]
}

function formation() {
  return [
    ...schoolSlides(),
    ...presentationSlides(),
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}

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

function firstStepSlides() {
  return [
    'first-step/transition-slide.md',
    'first-step/javascript-types.md',
    'first-step/typescript-types.md',
    'first-step/typescript-variable.md',
    'first-step/typescript-object-function.md',
    'first-step/typescript-function.md',
  ]
}
function formation() {
  return [
    ...schoolSlides(),
    ...presentationSlides(),
    ...firstStepSlides(),
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}

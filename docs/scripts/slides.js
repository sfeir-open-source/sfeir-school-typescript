import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

function schoolSlides() {
  const dir = '00-school';
  return [
    `${dir}/00-TITLE.md`,
    `${dir}/01-wifi.md`,
    `${dir}/02-repository.md`,
    `${dir}/03-repository-lab.md`,
    `${dir}/10-speaker-nfr.md`,
    `${dir}/10-speaker-ape.md`,
    `${dir}/11-tour-de-table.md`,
    `${dir}/20-what-we-will-do.md`
  ];
}

function presentationSlides() {
  const dir = '01-presentation';
  return [
    `${dir}/transition-slide.md`, //
    `${dir}/typescript_base.md` //
  ];
}

function firstStepSlides() {
  const dir = '02-first-step';
  return [
    `${dir}/transition-slide.md`,
    `${dir}/javascript-types.md`,
    `${dir}/javascript-types-lab.md`,
    `${dir}/typescript-types.md`,
    `${dir}/typescript-types-lab.md`,
    `${dir}/typescript-variable.md`,
    `${dir}/typescript-variable-lab.md`,
    `${dir}/typescript-object-function.md`,
    `${dir}/typescript-object-function-lab.md`,
    `${dir}/typescript-function.md`,
    `${dir}/typescript-function-lab.md`
  ];
}

function advancedConceptsSlides() {
  const dir = '03-advanced-concepts';
  return [
    `${dir}/transition-slide.md`, //
    `${dir}/concept-class.md`, //
    `${dir}/concept-class-lab.md`, //
    `${dir}/typescript-es6.md`, //
    `${dir}/typescript-es6-lab.md` //
  ];
}

function integrationSlides() {
  const dir = '04-integration';
  return [
    `${dir}/transition-slide.md`, //
    `${dir}/module.md`, //
    `${dir}/module-lab.md`, //
    `${dir}/definition.md` //
  ];
}

function experimentalSlides() {
  const dir = '05-experimental';
  return [
    `${dir}/transition-slide.md`, //
    `${dir}/decorators.md`, //
    `${dir}/decorators-lab.md` //
  ];
}

function bonusSlides() {
  const dir = '06-bonus';
  return [
    `${dir}/transition-slide.md`, //
    `${dir}/bonus.md` //
  ];
}

function formation() {
  return [
    ...schoolSlides(),
    ...presentationSlides(),
    ...firstStepSlides(),
    ...advancedConceptsSlides(),
    ...integrationSlides(),
    ...experimentalSlides(),
    ...bonusSlides()
  ].map(slidePath => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);

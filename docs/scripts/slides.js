import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

function schoolSlides() {
  return [
    'introduction/introduction.md',
    'introduction/round-table.md',
    'speaker/nicoF.md',
    'speaker/anthonyP.md',
    'speaker/mathieuD.md',
    'introduction/day-planning.md'
  ];
}

function presentationSlides() {
  return ['presentation/transition-slide.md', 'presentation/typescript_base.md'];
}

function firstStepSlides() {
  return [
    'first-step/transition-slide.md',
    'first-step/javascript-types.md',
    'first-step/typescript-types.md',
    'first-step/typescript-variable.md',
    'first-step/typescript-object-function.md',
    'first-step/typescript-function.md'
  ];
}

function advancedConceptsSlides() {
  return [
    'advanced-concepts/transition-slide.md',
    'advanced-concepts/concept-class.md',
    'advanced-concepts/typescript-es6.md'
  ];
}

function integrationSlides() {
  return ['integration/transition-slide.md', 'integration/module.md', 'integration/definition.md'];
}

function experimentalSlides() {
  return ['experimental/transition-slide.md', 'experimental/decorators.md'];
}

function bonusSlides() {
  return ['bonus/transition-slide.md', 'bonus/bonus.md'];
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

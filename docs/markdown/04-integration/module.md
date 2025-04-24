<!-- .slide -->

# Écosystème : modules

<br><br>

## Common JS

<br>

- utilisé dans node JS <br><br>
- <b>require</b> un path pour charger un module qui <b>exports</b> une API<br><br>
- synchrone
  Notes:
- typescriptlang modules: https://www.typescriptlang.org/docs/handbook/modules.html

##==##

<!-- .slide -->

# Écosystème : modules

<br><br>

## AMD

<br>

- utilisé dans le navigateur<br><br>
- <b>require</b> un path pour charger un module qui <b>define</b> une API <br><br>
- asynchrone

##==##

<!-- .slide -->

# Écosystème : modules

<br><br>

## UMD et System JS

<br>

- Tentatives d'unifier le meilleur des deux mondes avant ES6
  <!-- .element: class="full-center" -->

##==##

<!-- .slide -->

# Écosystème : modules

<br><br>

## Module ES6

<br><br>

- standart <br><br>
- <b>import</b> un path pour charger un module qui <b>export</b> une API

##==##

<!-- .slide: class="with-code inconsolata" -->

# Écosystème : modules

<br><br>

```typescript
// file a.ts
import { ZipCodeValidator, LettersValidator } from './modules/validator';

// file ./modules/validator.ts
export class ZipCodeValidator {}

export class LettersValidator {}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Écosystème : modules

<br>

## renaming

<br>

```typescript
// file a.ts
import {ZipCodeValidator, LettersOnlyValidator} from './modules/validator';

// file ./modules/validator.ts
export class ZipCodeValidator {}

export class LettersValidator as LettersOnlyValidator{}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Écosystème : modules

<br>

## default export

<br>

```typescript
// file a.ts
import LettersValidator from './modules/validator';

// file ./modules/validator.ts
export class ZipCodeValidator {}

export default class LettersValidator {}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Écosystème : modules

<br>

## import everything

<br>

```typescript
// file a.ts
import * as validators from './modules/validator';
var letterValidator = new validators.LettersValidator();

// file ./modules/validator.ts
export class ZipCodeValidator {}

export class LettersValidator {}
```

<!-- .element: class="big-code" -->

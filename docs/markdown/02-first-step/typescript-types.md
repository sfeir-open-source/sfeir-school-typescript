<!-- .slide: class="with-code incosolata full-center" -->

# Premier pas : les types en Typescript

<br>

```typescript
const isDone: boolean = false;
function describe(age: number, color: string) { ... }
// Arrays
const list: number[] = [ 1, 2, 3 ];
const hybrid: (number | boolean)[] = [ 2, true ]
// Tuples
const speed: [ number, string ] = [ 10, 'km/h' ]
//enums
enums Cars { Tesla = 1, Renault = 2, Mercedes = 4 }
```

<!-- .element: class="big-code" -->

Notes:

- https://www.typescriptlang.org/docs/handbook/basic-types.html pour les types basiques

##==##

<!-- .slide: class="with-code inconsolata full-center" -->

# Premier pas : les types en Typescript

<br>

```typescript
// your best/worst friend
const $: any  = jQuery
$.ajax(...); $('body');
// what are these for ?
function returnsNothing(): void { console.log(...) }
var nothing: null = null;
var mystery: undefined = undefined;
//there is one more
function neverReturns(): never { throw 'some error'; }
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata full-center" -->

# Premier pas : les types en Typescript

<br>

```typescript
// and if you knew it better...
var something: any = 'a string';
var length = something.lenght; // runtime error!
// ...you stay in control
var aString = <string>something;
aString.lenght; // compile error!
// or (excl. in .tsx)
var aString = something as string;
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="exercice" -->

# Exercice 2 : commençons à typer

## Lab

<br>
<span class="center"><b>02-about-ts-type</b></span>
<br><br>

- Remplacer les <b>\_</b> présents dans les specs afain de faire passer la <b>transpilation</b> et les tests<br><br>
- Pensez aux valeurs par défaut des enums. Les tests ne pourrons passer qu'une fois que la transpilation se passe sans erreurs

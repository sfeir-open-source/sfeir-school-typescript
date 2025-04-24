<!-- .slide: class="with-code inconsolata" -->

# Typescript is es6 - variable declaration

<br><br>

```typescript
function f(shouldInitialize: boolean) {
  if (shouldInitialize) {
    var x = 10;
  } // what if let here ?
  return x;
}
f(true); // returns 10
f(false); // returns undefined
```

<!-- .element: class="big-code" -->

Notes:

- Typescript Lang variable declaration: https://www.typescriptlang.org/docs/handbook/variable-declarations.html

##==##

<!-- .slide: class="with-code inconsolata" -->

# Typescript is es6 - variable declaration

<br><br>

```typescript
function f(input: boolean) {
  let a = 100;
  if (input) {
    let b = a + 1; // Still okay to reference 'a'
    return b;
  }
  return b; // Error: 'b' doesn't exist here
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Typescript is es6 - variable declaration

<br><br>

```typescript
const numLivesForCat = 9;
const kitty = { name: 'Aurora', numLives: numLivesForCat };
// Error
kitty = { name: 'Danielle', numLives: numLivesForCat };
// all "okay"
kitty.name = 'Rory';
kitty.name = 'Kitty';
kitty.name = 'Cat';
kitty.numLives--;
```

<!-- .element class="big-code" -->

Notes:

- LIVE CODING - show special case for function declarations (block scoped) - show function “hoisting”
- let/const hoisting and Temporal Dead Zone

##==##

<!-- .slide: class="exercice" -->

# Exercice 3 : var / let / const

## Lab

<br>
<span class="center"><b>03-variable-declaration</b></span>
<br><br>

- Remplacer les <b>\_</b> présents dans les specs afin de faire passer la transpilation et les tests<br><br>
- Faîtes attention à la portée du let et comment sont passées les variables en JavaScript

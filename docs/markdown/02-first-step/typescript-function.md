<!-- .slide: class="with-code inconsolata" -->

# Objets et fonctions: fonctions

<br>

## functions are types values

<br>

```typescript
function add(x: number, y: number): number {
  return x + y;
}

const add: (op1: number, op2: number) => number = (x, y) => x + y;
// type of arguments is inferred, names just for documentation
```

<!-- .element: class="big-code" -->

Notes:

- typescriptlang functions: https://www.typescriptlang.org/docs/handbook/functions.html
- type for function value

##==##

<!-- .slide: class="with-code inconsolata" -->

# Objets et fonctions: fonctions

<br>

## functions are typed values

<br>

```typescript
interface ICalc {
  add(x: number, y: number): number;
  mult: (x: number, y: number) => number;
}
const adder: ICalc = {
  add: (x, y) => x + y,
  mult(x, y) {
    return x * y;
  },
};
```

<!-- .element: class="big-code" -->

Notes:

- works in interfaces

##==##

<!-- .slide: class="with-code inconsolata" -->

# objets et fonctions: fonctions

<br>

## functions are types values

<br>

```typescript
interface FCombinator {
  (x: number, y: number): number;
}

const adder: FCombinator = (x, y) => x + y;
const mult: FCombinator = function (x, y) {
  return x * y;
};
```

<!-- .element: class="big-code" -->

Notes:

- works in interface
- parler de définitions mulitples

##==##

<!-- .slide: class="with-code inconsolata" -->

# objets et fonctions: fonctions

<br>

## optionals arguments

<br>

```typescript
function greet(firstName: string, lastName?: string) {
  let name = lastName ? `${firstName} ${lastName}` : firstName;
  return `Hello ${name}`;
}
// must come after any required arguments
// lastName: string | undefined
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# objets et fonctions: fonctions

<br>

## default arguments

<br>

```typescript
function greet(firstName = 'M.', lastName: string) {
  return `Hello ${firstName} ${lastName}`;
}
// can be in any position, type inferred
greet('Brendan', 'Eich');
greet(undefined, 'Smith');
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# objets et fonctions: fonctions

<br>

## rest parameters

<br>

```typescript
function sum(...elements: number[]) {
  return elements.reduce((acc, val) => acc + val);
}
// must come in last position
// of type (...elm: number[]) => number
sum(1, 2, 3, 4, 5);
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# objets et fonctions: fonctions

<br>

## overloading (don't do this at home)

<br>

```typescript
function sum(elements: number[]): number;
function sum(...elements: number[]): number;
function sum(elements: any) {
  if (elements.length === 1 && Array.isArray(elements[0])) {
    elements = elements[0];
  }
  return elements.reduce((acc: number, val: number) => acc + val);
}
sum(1, 2, 3, 4, 5);
sum([1, 2, 3, 4, 5]);
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# objets et fonctions: fonctions

<br>

## overloading (better)

<br>

```typescript
interface FSum {
  (elements: number[]): number;
  (...elements: number[]): number;
}
const sum: FSum = (elements: any) {
  if (elements.length === 1 && Array.isArray(elements[0])) {
	  elements = elements[0];
  }
  return elements.reduce((acc: number, val: number) => acc + val);
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="transition-bg-green-1" -->

# This ???

##==##

<!-- .slide: class="with-code inconsolata" -->

# Objet et fonctions: fonctions

<br>

## this is not always what you think

<br>

```typescript
function hello(who: string) {
  return `${this} ${who}`;
}
// call the function with this set
hello.call('hello', 'world'); // => hello world
hello('world'); // => undefined world (strict mode)
```

<!-- .element: class="big-code" -->

Notes:

- Mentionner le typage de this (TS 2.0)

##==##

<!-- .slide: class="with-code inconsolata" -->

# Objet et fonctions: fonctions

<br>

## this in member functions

<br>

```typescript
const person = {
  name: 'Wolfgang',
  hello(who: string) {
    return `${this.name} says hello ${who}`;
  },
};
// call the function with this set
person.hello('world'); // => Wolfgang says hello world
person.hello.call('Cyril', 'you'); // => Cyril says hello you
```

<!-- .element: class="big-code" -->

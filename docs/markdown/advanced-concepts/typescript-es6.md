<!-- .slide: class="with-code inconsolata" -->

# Typescript is ES6

## Destructuring declarations

<br>

```typescript
let [myArrayValue] = [1];
// myArrayValue === 1

let { myobjectValue } = { myobjectValue: 1 };
// myobjectValue === 1
```

<!-- .element: class="big-code" -->

Notes:

-   es6 katas: http://es6katas.org/

##==##

<!-- .slide: class="with-code inconsolata" -->

# Typescript is ES6

## Destructuring assignments

<br>

```typescript
let [a, b] = [1, 2];
[b, a] = [a, b];
// b === 1 && a === 2

let len: number;
{length: len} = [1, 2, 3];
// len === 3
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Typescript is ES6

## Destructuring parameters

<br>

```typescript
interface IOptions {
  repeat: number;
}
function doSomething({repeat}: IOptions) {
  while (repeat--) { … }
}

doSomething({ repeat: 5 });
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="exercice" -->

# Exercice 7: destructuring

## Lab

<span class="center"><b>07-about-destructuring</b></span>
<br>

-   Remplacer les <b>\_</b> présents dans les specs afin de faire passer le transpilation et le test<br><br>
-   Le degré de nesting des propriétés et la transpilation risquent de vous poser problème dans certains cas

##==##

<!-- .slide: class="transition-bg-sfeir-3" -->

# Exercice 7: destructuring

## Soluce : **07-about-destructuring.correction.ts**

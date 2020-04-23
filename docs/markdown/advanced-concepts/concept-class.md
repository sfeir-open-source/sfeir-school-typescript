<!-- .slide: class="with-code inconsolata" -->
# Concepts avancés: classes
<br><br>

```typescript
class Person {
  public firstName: string;
  public lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  public sayHi() {
    return `Hello My Name is ${this.firstName} ${this.lastName}`;
  }
}
```
<!-- .element: class="medium-code" -->
Notes:
- typescriptlang: https://www.typescriptlang.org/docs/handbook/classes.html

##==##

<!-- .slide: class="transition-bg-grey-1" -->
# Wait, where is my prototype??

##==##

<!-- .slide: class="two-column-layout" -->
# Concepts avancés: classes

##--##
<!-- .slide: class="with-code inconsolata" -->
<br><br>

```typescript
class Person {
  public firstName: string;
  public lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  public sayHi() {
    return `Hello My Name is ${this.firstName} ${this.lastName}`;
  }
}
```
<!-- .element: class="medium-code" -->

##--##
<!-- .slide: class="with-code inconsolata" -->
<br><br>

```typescript
function Person(firstName: string, lastName: string) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.sayHi = function() {
  return `Hello My Name is ${this.firstName} ${this.lastName}`;
}
```
<!-- .slide: class="medium-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Concepts avancés: classes
<br>

## Soyez créatif
<br>

```typescript
class Person {
  public static create: () => Person;
  public firstName: string;
  public lastName: string;
  private _age: number;
  public readonly gender: string;
}
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Concepts avancés: classes
<br>

## implements
<br>

```typescript
interface LivingBeing { gender: string; }
interface Animal { makeSound(): string; }

class Person implements LivingBeing, Animal {
  constructor(public gender: string) {}
  public makeSound() {
    return 'Hello';
  }
}
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Concepts avancés: classes
<br>

## abstract & extend
<br>

```typescript
abstract class LivingBeing {
  constructor(public gender: string) {}
}

class Animal extends LivingBeing {
  constructor(public gender: string) {
    super(gender);
  }
}
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="exercice" -->
# Exercice 6: classes
## Exercice
<br><br>
<span class="center"><b>06-about-classes</b></span>
<br>

- Remplacer les <b>_</b> présents dans les specs afin de faire passer la transpilation et le test <br><br>
- Pensez à la chaîne de prototypes.

##==##

<!-- .slide: class="exercice" -->
# Exercice 6: classes
## Solution
<span class="full-center"><b>06-about-classes.correction.ts</b></span>

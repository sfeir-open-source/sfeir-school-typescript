<!-- .slide: class="with-code inconsolata" -->

# Concepts avancés : classes

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

<!-- .element: class="big-code" -->

Notes:

- typescriptlang: https://www.typescriptlang.org/docs/handbook/classes.html

##==##

<!-- .slide: class="transition-bg-green-1" -->

# Wait, where is my prototype??

##==##

<!-- .slide: class="two-column with-code" -->

# Concepts avancés : classes

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

<!-- .element: class="big-code" -->

##--##

<br/>
<br/>
<br/>
<br/>

```typescript
function Person(firstName: string, lastName: string) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.sayHi = function () {
  return `Hello My Name is ${this.firstName} ${this.lastName}`;
};
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Concepts avancés : classes

## Soyez créatif

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

# Concepts avancés : classes

## implements

```typescript
interface LivingBeing {
  gender: string;
}
interface Animal {
  makeSound(): string;
}
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

# Concepts avancés : classes

## abstract & extend

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

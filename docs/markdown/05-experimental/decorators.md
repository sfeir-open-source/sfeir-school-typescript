<!-- .slide: class="two-column with-code" -->

# Expérimental : décorateurs

```typescript
@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  @enumerable(false)
  greet() {
    return 'Hello, ' + this.greeting;
  }
}
```

<!-- .element: class="big-code" -->

##--##

<br/><br/><br/><br/>

**experimentalDecorators : true**

##==##

<!-- .slide: class="with-code" -->

# Expérimental : décorateurs

<br>

## class

<br>

```typescript
function sealed(constructor: Function) {
  // Do something
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Expérimental : décorateurs

<br>

## method

<br>

```typescript
function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}
```

<!-- .element: class="big-code" -->

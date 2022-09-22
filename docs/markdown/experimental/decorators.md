<!-- .slide: class="two-column with-code inconsolata" -->

# Expérimental: décorateurs

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

<!-- .element: class="medium-code" -->

##--##

<!-- .slide -->

<br><br><br>

<span class="center"><b>experimentalDecorators : true</b></span>

##==##

<!-- .slide: class="with-code" -->

# Expérimental: décorateurs

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

# Expérimental: décorateurs

## method

<br>

```typescript
function enumerable(value: boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="exercice" -->

# Exercice 9: décorateurs

## Lab

<span class="center"><b>09-about-decorators</b></span>
<br>

-   Décorer la classe Calculator pour ajouter des logs quand le constructor est défini et quand la méthode double est appelée <br><br>
-   Les décorateurs doivent être importés du répertoire décorators

##==##

<!-- .slide: class="transition-bg-sfeir-3" -->

# Exercice 9: décorateurs

## Soluce : **09-about-decorators.correction.ts && logs.ts**

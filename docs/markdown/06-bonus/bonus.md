<!-- .slide: class="with-code inconsolata" -->

# Concepts avancés : classes

<br>

## mixins

<br>

```typescript
class Disposable {
  isDisposed: boolean;
  dispose() {
    this.isDisposed = true;
  }
}
class Activatable {
  isActive: boolean;
  activate() {
    this.isActive = true;
  }
  deActivate() {
    this.isActive = false;
  }
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Concepts avancés : classes

<br>

## mixins

<br>

```typescript
class SmartObject implements Disposable, Activatable {
  isDisposed: boolean;
  isActive: boolean;
  dispose() => void;
  activate() => void;
  deActivate() => void
}
applyMixins(SmartObject, [Disposable, Activatable]);
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Concepts avancés : classes

<br>

## mixins

<br>

```typescript
function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor =>
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(
      name => (derivedCtor.prototype[name] = baseCtor.prototype[name])
    )
  );
}
```

<!-- .element: class="big-code" -->

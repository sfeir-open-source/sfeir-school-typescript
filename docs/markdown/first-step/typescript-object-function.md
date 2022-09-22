<!-- .slide: class="with-code inconsolata" -->

# Objets et fonctions: interfaces

## Principe - décrire la structure

```typescript
function printLabel(labelledObj: { label: string; size: number }) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
```

<!-- .element: class="big-code" -->

Notes:

-   typescriptlang interfaces: https://www.typescriptlang.org/docs/handbook/interfaces.html
-   Duck-typing or Structural subtyping

##==##

<!-- .slide: class="with-code inconsolata" -->

# Objets et fonctions: interfaces

## Déclaration réutilisable

```typescript
interface ILabelledValue {
    label: string;
}
function printLabel(labelledObj: ILabelledValue) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
```

<!-- .element: class="big-code" -->

Notes:

-   mentionner les type aliases (type = ...) - non extensibles et ne créent pas de noms comme les interfaces (outdated ? cf réponse stackoverflow ci-dessous)
-   types vs interfaces : https://stackoverflow.com/a/52682220/3665963

##==##

<!-- .slide: class="with-code inconsolata" -->

# Objets et fonctions: interfaces

## Optional

```typescript
interface ISquareConfig {
    width: number;
    color?: string;
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Objets et fonctions: interfaces

## Readonly

```typescript
interface ISquareConfig {
    readonly width: number;
    color?: string;
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata max-height" -->

# objets et fonctions: interfaces

## Extendable (two options - v1)

```typescript
interface IA1 {
    aprop: string;
}
interface IB extends IA1 {
    bprop: string;
}
var a: IB = { aprop: 'a', bprop: 'b' };
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata max-height" -->

# objets et fonctions: interfaces

## Extendable (two options - v2)

```typescript
interface IA2 {
    aprop: string;
}
interface IA2 {
    bprop: string;
}
var b: IA2 = { aprop: 'a', bprop: 'b' };
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# objets et fonctions: interfaces

## Maps

```typescript
type weekDay = 'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su';
interface IAgenda {
    [day: weekDay]: string;
}

interface IReadonlyNoteBook {
    readonly [noteId: string]: string;
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="exercice" -->

# Exercice 4: interfaces

## Lab

<span class="center"><b>04-about-interfaces</b></span>
<br>

-   Remplacer les <b>\_</b> présents dans les specs afin de faire passer la transpilation et le test<br><br>
-   Les erreurs à la transpilation ne sont pas les mêmes qu'au runtime!!

##==##

<!-- .slide: class="transition-bg-sfeir-3" -->

# Exercice 4: interfaces

## Soluce : **04-about-interfaces.correction.ts**

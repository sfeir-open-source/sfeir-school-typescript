<!-- .slide: class="with-code inconsolata" -->

# Objets et fonctions: interfaces

<br>

## Principe - décrire la structure

<br>

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

<br>

## Déclaration réutilisable

<br>

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

<br>

## Optional

<br>

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

<br>

## Readonly

<br>

```typescript
interface ISquareConfig {
    readonly width: number;
    color?: string;
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# objets et fonctions: interfaces

<br>

## Extendable (two options)

<br>

```typescript
interface IA1 {
    aprop: string;
}
interface IB extends IA1 {
    bprop: string;
}
var a: IB = { aprop: 'a', bprop: 'b' };

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

<br>

## Maps

<br>

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

## Exercice

<br><br>
<span class="center"><b>04-about-interfaces</b></span>
<br>

-   Remplacer les <b>\_</b> présents dans les specs afin de faire passer la transpilation et le test<br><br>
-   Les erreurs à la transpilation ne sont pas les mêmes qu'au runtime!!

##==##

<!-- .slide: class="exercice" -->

# Exercice 4: interfaces

## Solution

<br><br>
<span class="full-center"><b>04-about-interfaces.correction.ts</b></span>

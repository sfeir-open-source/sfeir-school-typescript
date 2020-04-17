<!-- .slide: class="two-column-layout" -->
# Typescript
<div>
    <img alt="center" src="assets/images/school/presentation/microsoft.png" />
    <img alt="center h-350" src="assets/images/school/presentation/anders.jpg" />
</div>
<!-- .element class="flex-row full-center" -->
Notes:
- Anders Hejlsberg (principal créateur de C#)
- surcouche de JS
- transpilé en JS => lisible par tous les navigateurs

##==##

<!--.slide -->
# La Première version de typescript
<table>
    <thead>
        <tr>
            <td>Évènement</td>
            <td>Date</td>
            <td>Feature</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Public en v0.8</td>
            <td><b>octobre 2012</b></td>
            <td></td>
        </tr>
        <tr>
            <td>v0.9</td>
            <td><b>2013</b></td>
            <td>Génériques</td>
        </tr>
        <tr>
            <td>v1 lancé au Microsoft Build</td>
            <td><b>2-4 Avril 2014</b></td>
            <td></td>
        </tr>
        <tr>
            <td>1er commit github</td>
            <td><b>7 juillet 2014</b></td>
            <td></td>
        </tr>
    </tbody>
</table>
<!-- .element: class="table-center" -->

##==##

<!--.slide -->
# La Première version de typescript
<table>
    <thead>
        <tr>
            <td>Évènement</td>
            <td>Date</td>
            <td>Feature</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>ng-conf</td>
            <td><b>5 mars 2015</b></td>
            <td>Full TypeScript, bye AtScript</td>
        </tr>
        <tr>
            <td>v1.5-alpha<br>v1.5-beta<br>v1.5 </td>
            <td><b>1 avril 2015</b><br><b>27 avril 2015</b><br><b>15 juin 2015</b></td>
            <td><b>es6 modules</b>, namespace, let et const<br>for of, <b>decorators, tsconfig.json</b><br>experimental async/await, destructuring</td>
        </tr>
        <tr>
            <td>v1.6-beta  - v1.6</td>
            <td><b>29 août 2015</b> - <b>11 septembre 2015</b></td>
            <td><b>jsx support</b>abstract classes,<br><b>es6 generators</b>, generic type</td>
        </tr>
        <tr>
            <td>v1.7 - v1.8</td>
            <td><b>20 novembre 2015</b> - <b>9 avril 2016</b></td>
            <td><b>target es6 modules</b> private and protected constructor</td>
        </tr>
    </tbody>
</table>
<!-- .element: class="table-center">

##==##

<!-- .slide -->
# La deuxième version de typescript
<table>
    <thead>
        <tr>
            <td>Évènement</td>
            <td>Date</td>
            <td>Feature</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Release officielle Angular 2</td>
            <td><b>15 septembre 2016</b></td>
            <td></td>
        </tr>
        <tr>
            <td>v2.0</td>
            <td><b>22 septembre 2016</b></td>
            <td>Non nullable types / control flow</td>
        </tr>
        <tr>
            <td>v2.1 (rc)</td>
            <td><b>08 novembre 2016</b></td>
            <td>async/await, object spread/rest, ...</td>
        </tr>
        <tr>
            <td>v2.2 (next)</td>
            <td>...</td>
            <td>...</td>
        </tr>
    </tbody>
</table>
<!-- .element: class="table-center" -->
Notes:
- Mentionner la poltitique d'intégrer TC39 stage3 specs

##==##

<!--.slide -->
# Les 4 fausses rumeurs à propos de Typescript
<br><br>

- Typescript évite les fuites mémoire de Javascript<br><br>
- Typescript a introduit des classes en Javascript<br><br>
- Typescript polyfille es6<br><br>
- Le Typescript c'est du C# qui compile en Javascript<br><br>
- Le typage statique est de la dette technique
Notes:
- add polyfill → ES6 compatibility table / typescript transpile les structures ES6, mais il faut ajouter core-js ou es6-shim pour utiliser la spec du language
- fuite de mémoire indépendante de ts ou js
- class introduites pas es2015 juste sucre syntaxique
- dette tech ?

##==##

<!-- .slide: class="flex-row full-center" -->
# L'apport de Typescript
![h-500](assets/images/school/presentation/typescript.png)
<span class="big-size">==</span>
![h-500](assets/images/school/presentation/javascript.png) + types - liberté? 


Notes:
- Typescript est un super set de javascript
- Apporte du typages
- engendre moins de liberté ?


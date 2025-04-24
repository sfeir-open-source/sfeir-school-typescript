import { describe, expect, it } from 'vitest';

const __ = Symbol('replace me');

describe('about classes', () => {
  it('your first class', () => {
    class SuperHero {
      constructor(private firstname: string, private lastname: string) {}

      talk() {
        return `Hi my name is ${this.firstname} ${this.lastname}`;
      }
    }

    var hero = new SuperHero('Bruce', 'Wayne');
    expect(hero.talk()).to.eq('Hi my name is Bruce Wayne');
  });

  it('you can use getter and setters', () => {
    class Person {
      constructor(public firstName: string, public lastName: string) {}

      get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
      }

      set fullName(newFullName: string) {
        [this.firstName, this.lastName] = newFullName.split(' ');
      }
    }

    var person = new Person('John', 'Doe');
    expect(person.fullName).to.equal('John Doe');
    person.fullName = 'Jane Doe';
    expect(person.firstName).to.equal('Jane');
  });

  it('implement an interface', () => {
    interface IDeveloper {
      readonly favouriteLanguage: string;
    }

    class Developer implements IDeveloper {
      constructor(public favouriteLanguage: string) {}
    }

    var developer: IDeveloper = new Developer('TypeScript');
    expect(developer.favouriteLanguage).to.equal('TypeScript');
  });

  it('extend another class', () => {
    abstract class Citizen {
      constructor(protected name: string) {}
      abstract talk(): string;
    }
    class SuperHero extends Citizen {
      constructor(name: string, public alias: string, public ability: string) {
        super(name);
      }
      public talk() {
        return `I fight against evil with ${this.ability}`;
      }
    }

    class Sidekick extends SuperHero {
      constructor(name: string, alias: string, ability: string, public master: SuperHero) {
        super(name, alias, ability);
      }
      public talk() {
        return super.talk() + ` and my master is ${this.master.alias}`;
      }
    }

    var batman = new SuperHero('Bruce Wayne', 'Batman', 'Martial arts');
    var robin = new Sidekick('Dick Grayson', 'Robin', 'Stick', batman);
    expect(robin.talk()).to.equal('I fight against evil with Stick and my master is Batman');
  });

  it('share methods like in pure JS', () => {
    class Developer {
      constructor(private favouriteLanguage: string) {}

      public sayHi() {
        return `Hello my favourite language is ${this.favouriteLanguage}`;
      }
    }

    var developer = new Developer('JavaScript');
    // think about what this should be
    expect(developer.sayHi.call(new Developer('TypeScript'))).to.eq('Hello my favourite language is TypeScript');
  });
});

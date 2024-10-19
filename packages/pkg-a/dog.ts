export class Dog {
  constructor(public name: string) {}

  bark() {
    console.log(`${this.name} is barking`);
  }

  solveCrime() {
    console.log(`${this.name} is solving crimes`);
  }
}

import { Fish } from "pkg-a/fish.js";
import { Dog } from "pkg-a/dog.js";

export const wanda = new Fish("Wanda");

wanda.swim();
wanda.speak();

export const scooby = new Dog("Scooby-Doo");

scooby.solveCrime();
scooby.bark();

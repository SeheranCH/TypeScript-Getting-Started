import { Person } from "./person";

export class Player implements Person {
    name: string = "Default";
    age: number = 0;
    highScore: number = 0;

    formatName() {
        return this.name.toUpperCase();
    }
}